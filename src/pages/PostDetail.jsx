

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostDetails } from "../features/postDetailsActions";
import { Link } from "react-router-dom";

function PostDetails() {
  const postId = useSelector((state) => state.general.param);
  console.log("post id", postId);
  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.postDetails);

  useEffect(() => {
    dispatch(fetchPostDetails(postId));
  }, [dispatch, postId]);
  console.log("details", postDetails);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <Link to="/posts" className="btn btn-primary mb-3">
                Back to Posts
              </Link>
              <h3 className="card-title">{postDetails?.title}</h3>
              <p className="card-text">{postDetails?.body}</p>
              <p className="card-text">
                <small className="text-muted">
                  UserId: {postDetails?.userId}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
