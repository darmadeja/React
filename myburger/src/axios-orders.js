import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://react-myburger-9dfd6.firebaseio.com/"
});

export default axiosInstance;
