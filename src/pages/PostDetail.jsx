import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"; // Import useParams to access URL parameters
import { fetchPostDetails } from "../features/postDetailsActions";

function PostDetails() {
  const { postId } = useParams(); // Get the postId from URL parameters
  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.postDetails);

  useEffect(() => {
    dispatch(fetchPostDetails(postId));
  }, [dispatch, postId]);

  return (
    <div className="post-detail-container">
      <h3>{postDetails.title}</h3>
      <p>{postDetails.body}</p>
      <p>UserId: {postDetails.userId}</p>
    </div>
  );
}

export default PostDetails;


