import Axios from "axios";

import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
  logout,
} from "./Auth";

// Add a request interceptor
Axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//Add a response interceptor
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === "http://localhost:8000/api/v1/token/refresh"
    ) {
      logout();
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = getRefreshToken();
      if (!refreshToken) {
        logout();
      }
      return Axios.post("http://localhost:8000/api/v1/token/refresh", {
        refresh: refreshToken,
      }).then((res) => {
        if (res.status === 200) {
          setAccessToken(res.data.access);
          setRefreshToken(res.data.refresh);
          Axios.defaults.headers.common["Authorization"] =
            "Bearer " + getAccessToken();
          return Axios(originalRequest);
        }
      });
    }
    return Promise.reject(error);
  }
);

const Api = Axios;
export default Api;
