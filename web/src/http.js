import axios from "axios";
// import Vue from "vue"
// import router from "./router/index"

const http = axios.create({
  baseURL: "http://localhost:3000/web/api"
});

export default http;
