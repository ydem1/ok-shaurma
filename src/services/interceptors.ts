import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import {
  getAccessToken,
  getRefreshToken,
  isTokenExpired,
  setAccessToken,
  setRefreshToken,
} from "src/utils/tokenUtils";
import { IAuthTokens } from "src/@types/auth";

type Interceptor = (
  v: InternalAxiosRequestConfig
) => InternalAxiosRequestConfig;

export const addAccessToken: Interceptor = (config) => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  if (accessToken && !isTokenExpired(refreshToken)) {
    config.headers.Authorization = accessToken;
  }

  return config;
};

const RESPONSE_CODES = [401, 403];

let accessTokenPromise: Promise<string | null> | null = null;

export const refreshAccessToken = async (error: AxiosError) => {
  const refreshToken = getRefreshToken();

  if (!RESPONSE_CODES.includes(error.response?.status as number)) {
    return Promise.reject(error);
  }

  if (!accessTokenPromise && refreshToken) {
    accessTokenPromise = fetchToken().then((token) => {
      accessTokenPromise = null;

      return token;
    });
  }

  const token = await accessTokenPromise;

  if (!token || !error.config) {
    return Promise.reject(error);
  }

  setAccessToken(token);

  const config = addAccessToken(error.config);

  return axios(config);
};

const fetchToken = async () => {
  const refreshToken = getRefreshToken();

  try {
    const { data } = await axios.post<Pick<IAuthTokens, "access_token">>(
      `${import.meta.env.VITE_REACT_API_URL}token/refresh/`,
      { refresh: refreshToken }
    );

    return data.access_token;
  } catch {
    setAccessToken("");
    setRefreshToken("");
    return null;
  }
};
