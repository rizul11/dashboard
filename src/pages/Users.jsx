import React, { useState } from "react";
import { useUsers } from "../Context/UserContext";

function Users() {
  const users = useUsers();
  const itemsPerPage = 3; // Display 3 users per page
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedUsers = users.slice(startIndex, endIndex);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="users-container">
      <h2 className="mb-4">User List</h2>
      <ul className="list-group">
        {displayedUsers.map((user) => (
          <li key={user.id} className="list-group-item user-item">
            <strong>Username:</strong> {user.username}
            <br />
            <strong>Name:</strong> {user.name}
            <br />
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
      <nav>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${i + 1 === currentPage ? "active" : ""}`}
              onClick={() => handlePageChange(i + 1)}
            >
              <span className="page-link">{i + 1}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Users;
