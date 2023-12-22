import axios from "axios";
// import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL ?? "http://localhost:8081/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get("auth") ?? "";
//     console.log(token);
//     if (token) {
//       config.headers.Authorization = token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
