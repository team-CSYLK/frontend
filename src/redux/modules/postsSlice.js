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
      // console.log("data.data", data.data);
      // console.log("위에가 data.data");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
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
  }
);

export const __deletePost = createAsyncThunk(
  "DELETE_POST",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await AxiosInstance.delete(`/posts/${payload}`);
      console.log(data);
      if (data.status === 200) {
        alert("게시글이 삭제되었습니다.");
      }
      return thunkAPI.fulfillWithValue(payload);
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
      state.list = action.payload.data;
      console.log(action.payload);
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
      // console.log(state.list);
      const target = state.list.findIndex(
        (post) => post.postId === action.payload
      );
      // console.log("지고 싶은 대상의 인덱스값", target);

      state.list.splice(target, 1);
      // console.log("지워졌을때", state.list);
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
