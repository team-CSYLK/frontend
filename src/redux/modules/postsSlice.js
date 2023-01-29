import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AxiosInstance from "../../api/AxiosInstance";

const initialState = {
  list: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const __getPost = createAsyncThunk(
  "GET_POST",
  async (payload, thunkAPI) => {
    try {
      const data = await AxiosInstance.get("/posts");
      console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPost: (state, action) => {
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export default postsSlice.reducer;
