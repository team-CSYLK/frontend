import { configureStore } from "@reduxjs/toolkit";
// import comments from "../modules/commentsSlice";
import addPostSlice from "../modules/addPostSlice";
import loginList from "../modules/loginSlice";
import editSlice from "../modules/editSlice";

const store = configureStore({
  reducer: {
    addPostSlice,
    editSlice,
    // comments,
    loginList,
  },
});

export default store;
