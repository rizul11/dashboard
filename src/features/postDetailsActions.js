import { createAsyncThunk } from "@reduxjs/toolkit";
import { setPostDetails } from "./postDetailsSlice";


export const fetchPostDetails = createAsyncThunk(
  "postDetails/fetchPostDetails",
  async (postId, { dispatch }) => {
    try {
      // Perform an API request to fetch post details based on the postId
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      const postDetails = await response.json();
      // Dispatch a success action with the fetched post details
     dispatch(setPostDetails(postDetails));
     return postDetails;
       // Return the fetched data if needed
    } 
    catch (error) { // Handle any errors or dispatch an error action if needed
      console.error("Error fetching post details:", error);
      throw error;
    }
  }
);


