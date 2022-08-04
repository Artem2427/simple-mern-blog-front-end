import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const API_URL = "http://localhost:4444/ap";

export const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API || API_URL,
  headers: { "Content-Type": "application/json", accept: "application/json" },
});

api.interceptors.request.use(async (config): Promise<AxiosRequestConfig> => {
  if (localStorage.getItem("token") && config.headers) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  return config;
});
