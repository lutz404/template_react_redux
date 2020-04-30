import axios from "axios";
import { store } from "../store";

const api = axios.create({
  baseURL:
    "http://192.168.15.99:3000" /* http://localhost:3000  https://oncopro.herokuapp.com */
});

api.interceptors.request.use(config => {
  const { token } = store.getState().auth;

  const headers = { ...config.headers };

  if (token) headers.Authorization = `Bearer ${token}`;

  return { ...config, headers };
});

export default api;
