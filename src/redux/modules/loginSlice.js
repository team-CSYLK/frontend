import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosInstance from "../../api/AxiosInstance";
const initialState = {
  loginList: [],
  isLogin: false,
  isLoading: false,
  error: null,
  //   idNotChecked: true,
  //   nickNotChecked: true,
};

export const __postLogin = createAsyncThunk(
  "POST_LOGIN",
  async (payload, thunkAPI) => {
    // console.log(payload, " 썽크로 들어오나?");
    try {
      const data = await axios
        .post("http://becool0514.shop/kakao/code", payload)
        .then((res) => {
          // console.log(res.headers.authorization);
          sessionStorage.setItem("authorization", res.headers.authorization);
          //   sessionStorage.setItem("refreshToken", res.data.refreshToken);
          return res;
        });

      if (data.status === 200) {
        // console.log(data.data);
        // console.log(data.data.nickname);
        // console.log(data.data.imageUrl);

        // alert("로그인 성공");
        // console.log(data);
        // console.log(data.data);
        // console.log(data.data.nickname);
        if (data.data.nickname === "") {
          // 닉네임을 입력 못 받았다면 닉네임 입력페이지
          window.location.href = "/SignNick";
        } else {
          sessionStorage.setItem("nickname", data.data.nickname);
          sessionStorage.setItem("myimg", data.data.imageUrl);
          window.location.href = "/Main";
        }
      }
      // console.log(data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);

      // if (error.response.status === 409) {
      //   alert("아이디와 패스워드를 확인해주세요");
      // }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addNick = createAsyncThunk(
  "ADD_NICK",
  async (payload, thunkAPI) => {
    // console.log(payload, " 썽크로 들어오나?");
    try {
      const data = await AxiosInstance.post("/sendNickname", payload).then(
        (res) => {
          return res;
        }
      );
      if (data.status === 200) {
        sessionStorage.setItem("nickname", payload.nickname);
        window.location.href = "/Main";
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      if (error.response.status === 409) {
        alert("중복된 닉네임입니다.");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    checkLogin: (state, action) => {
      state.isLogin = true;
    },
    checkLogout: (state, action) => {
      state.isLogin = false;
    },
  },
  extraReducers: {
    //post
    [__postLogin.pending]: (state) => {
      state.isLoading = true;
    },
    [__postLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
      //   sessionStorage.setItem("memberinfo", JSON.stringify(action.payload));
    },
    [__postLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addNick.pending]: (state) => {
      state.isLoading = true;
    },
    [__addNick.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
      //   sessionStorage.setItem("memberinfo", JSON.stringify(action.payload));
    },
    [__addNick.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { checkLogin, checkLogout } = loginSlice.actions;
export default loginSlice.reducer;
