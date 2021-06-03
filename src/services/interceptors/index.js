/* ANCHOR: 📚 Lib imports. */
import Cookies from "js-cookie";
import axios from "axios";

export const api = axios.create({ baseURL: process.env.API_URL });

api.interceptors.request.use(
  async (config) => {
    if (Cookies.getJSON("auth")) {
      const auth = await Cookies.getJSON("auth");

      if (typeof auth != "undefined") {
        config.headers.Authorization = `Bearer ${auth}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (typeof error.response != "undefined" && error.response.status === 401) {
      const requestConfig = error.config;

      Cookies.remove("auth");
      window.location = "/auth/login";

      return axios(requestConfig);
    }
    return Promise.reject(error);
  }
);
