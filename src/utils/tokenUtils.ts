import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "src/constants/cookiesKeys";

export const isTokenExpired = (token: string | undefined) => {
  if (!token) return true;

  try {
    const decodedToken: { exp?: number } = jwtDecode(token);

    if (!decodedToken.exp) {
      return true;
    }

    const currentTime = Date.now() / 1000;
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};

export const getAccessToken = () => {
  return Cookies.get(ACCESS_TOKEN);
};

export const getRefreshToken = () => {
  return Cookies.get(REFRESH_TOKEN);
};

export const setAccessToken = (token: string) => {
  if (!token) {
    Cookies.remove(ACCESS_TOKEN);
  } else {
    Cookies.set(ACCESS_TOKEN, token);
  }
};

export const setRefreshToken = (token: string) => {
  if (!token) {
    Cookies.remove(REFRESH_TOKEN);
  } else {
    Cookies.set(REFRESH_TOKEN, token);
  }
};
