import { configureStore } from "@reduxjs/toolkit";
// import comments from "../modules/commentsSlice";
import addPostSlice from "../modules/addPostSlice";
import loginList from "../modules/loginSlice";
const store = configureStore({
  reducer: {
    // addPostSlice,
    // comments,
    loginList,
  },
});

export default store;
