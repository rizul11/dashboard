import { configureStore } from "@reduxjs/toolkit";
import  posts  from "../features/postsSlice";
import GeneralSlice from "../features/GeneralSlice";

export const store = configureStore({
  reducer: {
    app: posts,
    general: GeneralSlice
  },
});
