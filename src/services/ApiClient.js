import axios from "axios";

/* const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
}; */
export default axios.create({
  baseURL: process.env.VUE_APP_API_IP
    ? process.env.VUE_APP_API_IP
    : "http://10.63.10.111:5443",
  /* headers: defaultHeaders, */
});
