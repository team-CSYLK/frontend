import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://becool0514.shop",
  // baseURL: "http://localhost:3001",
  timeout: 100000,
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
  },
});
//TODO: 서버랑 비교하고 수정하기.

axiosInstance.interceptors.request.use(function (config) {
  // console.log("들어가나");
  const access_token = sessionStorage.getItem("authorization");
  if (access_token !== null) {
    // console.log(access_token);
    // config.headers.common["Authorization"] = `${access_token}`;
    config.headers["Authorization"] = `${access_token}`;

    // config.headers.common["Authorization"] = `Bearer ${access_token}`;
  }
  return config;
});

export default axiosInstance;
