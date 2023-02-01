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
    // console.log("get 실행하는가?");
    try {
      const data = await AxiosInstance.get("/posts");
      // console.log(data);
      if (data.status === 204) {
        // alert("로그인 성공");
        // console.log("기능");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __editLikeness = createAsyncThunk(
  "EDIT_LIKENESS",
  async (payload, thunkAPI) => {
    try {
      const data = await AxiosInstance.put(`/posts/like/${payload}`);

      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const __deletePost = createAsyncThunk(
  "DELETE_POST",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await AxiosInstance.delete(`/posts/${payload}`);

      // return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
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
      state.list = action.payload.data;
      // console.log(action.payload.data);
      // list에 어떻게 저장되는지 보기
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__editLikeness.pending]: (state) => {
      state.isLoading = true;
    },
    [__editLikeness.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__editLikeness.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.list = action.payload.data; // splice를 이용해서 제거해야함
      console.log("삭제payload", action.payload.data);
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
  },
});

export default postsSlice.reducer;
