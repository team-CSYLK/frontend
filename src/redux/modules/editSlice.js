import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api/AxiosInstance";

const initialState = {
  editProfiles: [],
  isLoading: false,
  error: null,
};

export const __getEditFormData = createAsyncThunk(
  "editGetProfileFormData",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosInstance.get("/editProfile", payload);
      console.log("data", data);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __putEditFormData = createAsyncThunk(
  "editPutProfileFormData",
  async (payload, thunkAPI) => {
    console.log(payload, " 들어오나?");
    try {
      const data = await axiosInstance.put("/editProfileImage", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      sessionStorage.setItem("nickname", data.data.nickname);
      // sessionStorage.setItem("myimg", data.data.imageProfile);

      // return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      console.log("error", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const editSlice = createSlice({
  name: "editProfile",
  initialState,
  reducers: {},
  extraReducers: {
    [__getEditFormData.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__getEditFormData.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
      state.editProfiles = action.payload.data.data;
      console.log("action.payload", action.payload.data.data);
    },
    [__getEditFormData.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; // catch 된 error 객체를 state.error에 추가
    },
    [__putEditFormData.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경
    },
    [__putEditFormData.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경
      state.editProfiles = action.payload;
      console.log("action.payload", action.payload);
    },
    [__putEditFormData.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경
      state.error = action.payload; // catch 된 error 객체를 state.error에 추가
    },
  },
});

export const {} = editSlice.actions;
export default editSlice.reducer;
