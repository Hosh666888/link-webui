"use strict";

import Vue from 'vue';
import axios from "axios";
import TokenUtil from "@/utils/TokenUtil";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: "api",
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
  headers:{
    "Authorization":TokenUtil.getToken()
  }
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data

    if (response.data.code===-2){
      console.log(response.data.message)
      TokenUtil.clear()
      this.$router.push("/")
    }
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default _axios;
