import axios from "axios";
const AxiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  baseURL: "https://becool0514.shop",
  timeout: 10000,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});
//TODO: 서버랑 비교하고 수정하기.

AxiosInstance.interceptors.request.use(function (config) {
  const access_token = sessionStorage.getItem("authorization");
  if (access_token !== null) {
    // console.log(access_token);
    // config.headers.common["Authorization"] = `${access_token}`;
    config.headers["Authorization"] = `${access_token}`;

    // config.headers.common["Authorization"] = `Bearer ${access_token}`;
  }
  return config;
});

export default AxiosInstance;
