import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../features/postsSlice";
import { Link } from "react-router-dom";
import "./Posts.css";
import { fetchPostDetails } from "../features/postDetailsActions";
import { useUsers, getUserNames } from "../Context/UserContext";



function Posts() {
  const dispatch = useDispatch();
  const users = useUsers();
  const userNames = getUserNames(users);

  const handleReadMoreClick = (postId) => {
    dispatch(fetchPostDetails(postId));
  };

  const data = useSelector((state) => state.app);
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [cachedData, setCachedData] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    userId: null,
    title: "",
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    // Check if data is available in local storage
    const cachedDataString = localStorage.getItem("cachedData");
    if (cachedDataString) {
      const cachedDataArray = JSON.parse(cachedDataString);
      setCachedData(cachedDataArray);
    }
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const fetchAndCacheData = () => {
    dispatch(getAllData()).then((response) => {
      if (!response.error) {
        // Cache the fetched data in local storage
        localStorage.setItem("cachedData", JSON.stringify(response.payload));
        setCachedData(response.payload);
      }
    });
  };

  // FILTER BY ID AND TITLE

  const applyFilters = () => {
    const filteredData = cachedData.filter((item) => {
      if (
        filterCriteria.userId !== null &&
        item.userId !== parseInt(filterCriteria.userId)
      ) {
        return false;
      }

      if (
        filterCriteria.title.trim() !== "" &&
        !item.title.toLowerCase().includes(filterCriteria.title.toLowerCase())
      ) {
        return false;
      }

      return true;
    });

    return filteredData;
  };

  const filteredData = applyFilters();

  return (
    <div className="posts-container">
      <div className="filters mb-3">
        <input
          type="text"
          placeholder="Search by title"
          value={filterCriteria.title}
          onChange={(e) =>
            setFilterCriteria({ ...filterCriteria, title: e.target.value })
          }
          className="form-control"
        />
        <select
          value={filterCriteria.userId}
          onChange={(e) =>
            setFilterCriteria({ ...filterCriteria, userId: e.target.value })
          }
          className="form-select"
        >
          <option value={""}>All Users</option>
          {userNames.map((userName, index) => (
            <option key={index} value={index + 1}>
              {userName}
            </option>
          ))}
        </select>
      </div>
      <div className="row card-row">
        {filteredData.slice(startIndex, endIndex).map((ele, inx) => {
          const user = users.find((user) => user.id === ele.userId);

          return (
            <div className="col-12 col-md-6 col-lg-4" key={ele.id}>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">
                    {ele.title.substring(0, 15)}...
                  </h5>
                  <p className="card-text">{ele.body.substring(0, 50)}...</p>

                  {user && <p className="card-user">User: {user.name}</p>}
                  <Link
                    to={`/post-detail/${ele.id}`}
                    className="card-link btn btn-primary"
                    onClick={() => handleReadMoreClick(ele.id)}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <ul className="pagination">
          {Array.from(
            { length: Math.ceil(filteredData.length / itemsPerPage) },
            (_, i) => (
              <li
                key={i}
                className={`page-item ${i + 1 === currentPage ? "active" : ""}`}
                onClick={() => handlePageChange(i + 1)}
              >
                <span className="page-link">{i + 1}</span>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Posts;


