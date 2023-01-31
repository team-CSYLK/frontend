import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postsSlice";
// import comments from "../modules/commentsSlice";
import addPostSlice from "../modules/addPostSlice";
import loginList from "../modules/loginSlice";
import editSlice from "../modules/editSlice";

const store = configureStore({
  reducer: {
    addPostSlice,
    editSlice,
    // comments,
    post,
    loginList,
  },
});

export default store;
