import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL ?? "https://swapi.dev/api",
});

export default axiosInstance;
