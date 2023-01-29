import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postsSlice";
// import comments from "../modules/commentsSlice";

const store = configureStore({
  reducer: {
    // comments,
    post,
  },
});

export default store;
