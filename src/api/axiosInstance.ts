import axios, { Axios } from "axios";
const axiosInstance: Axios = axios.create();

axiosInstance.defaults.baseURL = "https://650a94d7dfd73d1fab088c52.mockapi.io/";
export default axiosInstance;
