import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8080/api/v1/"
      : "http://localhost:8080/api/v1/", // DEV
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const api = (axios: AxiosInstance) => ({
  // get: <T>(url: string, config: AxiosRequestConfig = {}) => axios.get<T>(url, config),
  delete: <T>(url: string, config: AxiosRequestConfig = {}) => axios.delete<T>(url, config),
  put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
    axios.put<T>(url, config),
  patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
    axios.patch<T>(url, config),
  post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
    axios.post<T>(url, config),
});

export default api(instance);
