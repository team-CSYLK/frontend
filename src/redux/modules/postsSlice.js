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
  }
);

export const __editLikeness = createAsyncThunk(
  "EDIT_LIKENESS",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const data = await AxiosInstance.put(`/posts/like/${payload}`);

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
      state.list = action.payload;
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
  },
});

export default postsSlice.reducer;
