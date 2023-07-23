import axios from "axios";

console.log(import.meta.env.VITE_VUE_APP_API_URL);
//create an axios instance in order to use it globally with same config
const instance = axios.create({
  baseURL: import.meta.env.VITE_VUE_APP_API_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instance;
