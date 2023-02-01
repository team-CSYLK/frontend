import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AxiosInstance from "../../api/AxiosInstance";
const initialState = {
  post: {},
  comments: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const __getDetail = createAsyncThunk(
  "GET_DETAIL",
  async (payload, thunkAPI) => {
    // console.log(payload, "postid받아야함");
    try {
      const data = await AxiosInstance.get(`/posts/${payload}`);
      //   console.log(data.data.data.post);
      console.log(...data.data.data);
      //   if (data.status === 200) {
      //     // alert("로그인 성공");
      //     // console.log("기능");
      //   }
      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    clearPost: (state, action) => {
      state.isSuccess = false;
    },
  },
  extraReducers: {
    [__getDetail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload.post;
      console.log(action.payload.post);
    },
    [__getDetail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getDetail.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export default detailSlice.reducer;
