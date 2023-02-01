import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";
import axiosInstance from "../../api/AxiosInstance";

// // 토큰 받아와지면 사용
// const tokenLocal = localStorage.getItem('token');
// const refreshToken = localStorage.getItem('refreshToken');
//axios.defaults.withCredentials = true;
// Initial State
const initialState = {
  addPostLists: [],
  isLoading: false,
  error: null,
};
export const __addPostFormData = createAsyncThunk(
  "addPostFormData",
  async (payload, thunkAPI) => {
    console.log("payload=", payload);

    await axiosInstance
      .post(
        // `${serverUrl}/posts`,
        //"http://prachang.shop/api/users/",
        "/posts/upload",
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      )
      .then((res) => {
        // sessionStorage.setItem("authorization", res.headers.authorization);
        // sessionStorage.setItem("refreshToken", res.data.refreshToken);
        console.log("요청성공");
        alert("업로드성공");
        window.location.href = "/Main";
        return res;
      })
      .catch((error) => {
        console.log("요청실패");

        alert("실패");
        console.log(error);
        //return thunkAPI.rejectWithValue(error);
      });
  },
);
const addPostSlice = createSlice({
  name: "addPost",
  initialState,
  reducers: {},
  extraReducers: {
    [__addPostFormData.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__addPostFormData.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.lists = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      console.log("전송 action.payload", action.payload);
    },
    [__addPostFormData.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
      console.log("전송실패 action.payload", action.payload);
    },
  },
});

export const {} = addPostSlice.actions;
export default addPostSlice.reducer;
