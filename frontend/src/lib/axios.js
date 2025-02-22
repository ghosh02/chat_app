import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_MODE === "development"
      ? "http://localhost:4000/api"
      : "/api",
  withCredentials: true,
});

export default axiosInstance;
