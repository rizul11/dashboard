import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchPostDetails } from "../features/postDetailsActions";

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
    <div className="post-detail-container">
      <h3>{postDetails?.title}</h3>
      <p>{postDetails?.body}</p>
      <p>UserId: {postDetails?.userId}</p>
    </div>
  );
}

export default PostDetails;
