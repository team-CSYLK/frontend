import { configureStore } from "@reduxjs/toolkit";
import post from "../modules/postsSlice";
// import comments from "../modules/commentsSlice";
import addPostSlice from "../modules/addPostSlice";
import loginList from "../modules/loginSlice";
import editSlice from "../modules/editSlice";
import profile from "../modules/profileSlice";
import postsSlice from "../modules/postsSlice";
const store = configureStore({
  reducer: {
    addPostSlice,
    editSlice,
    postsSlice,
    // comments,
    post,
    loginList,
    profile,
  },
});

export default store;
