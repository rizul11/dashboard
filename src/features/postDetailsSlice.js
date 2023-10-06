import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  body: "",
  userId: null,
};

const postDetailsSlice = createSlice({
  name: "postDetails",
  initialState,
  reducers: {
    setPostDetails(state, action) {
      console.log("Reducer: setPostDetails called with payload:", action.payload);
      const { title, body, userId } = action.payload;
      state.title = title;
      state.body = body;
      state.userId = userId;
    },
  },
});

export const { setPostDetails } = postDetailsSlice.actions;

export default postDetailsSlice.reducer;





