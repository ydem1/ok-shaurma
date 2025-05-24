import axios from "axios";
import { addAccessToken, refreshAccessToken } from "./interceptors";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_API_URL,
  withCredentials: true,
});

instance.interceptors.request.use(addAccessToken);
instance.interceptors.response.use((config) => config, refreshAccessToken);
