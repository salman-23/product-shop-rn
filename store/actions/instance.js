import axios from "axios";

const instance = axios.create({
  // baseURL: "http://10.5.0.2:8001",
  baseURL: "http://192.168.100.11:8001",
  // exp://10.5.0.2:19000
});

export default instance;
