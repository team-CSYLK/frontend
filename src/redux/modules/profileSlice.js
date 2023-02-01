import axiosInstance from "../../api/AxiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  profiles: [],
  isLoading: false,
  error: null,
};

export const __getProfile = createAsyncThunk(
  "GET_PROFILE",
  async (payload, thunkAPI) => {
    // console.log(payload, "들어오나?");
    try {
      const data = await axiosInstance.get(`/user/${payload}`);
      // console.log("data", data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      //   console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {
    [__getProfile.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__getProfile.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
      state.profiles = action.payload.data;
      console.log("action.payload", action.payload.data);
    },
    [__getProfile.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; // catch 된 error 객체를 state.error에 추가
    },
  },
});

export const {} = profileSlice.actions;
export default profileSlice.reducer;
