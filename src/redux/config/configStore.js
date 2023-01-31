import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postsSlice";
// import comments from "../modules/commentsSlice";
import addPostSlice from "../modules/addPostSlice";
import loginList from "../modules/loginSlice";
const store = configureStore({
  reducer: {
    // addPostSlice,
    // comments,
    post,
    loginList,
  },
});

export default store;
