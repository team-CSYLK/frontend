import { configureStore } from "@reduxjs/toolkit";

// import comments from "../modules/commentsSlice";
import addPostSlice from "../modules/addPostSlice";

const store = configureStore({
  reducer: {
    addPostSlice,
    // comments,
  },
});

export default store;
