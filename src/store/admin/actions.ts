// import { successfulResponses } from "@/constants/responses";
// import { NotificationService } from "@/helpers/notifications";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { instance } from "src/services/api-client";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "src/constants/cookiesKeys";
import { IAuthTokens } from "src/@types/auth";

export const ADMIN_SLICE_NAME = "admin";

interface LoginUserParams {
  email: string;
  password: string;
  onSuccess?: VoidFunction;
}

export const loginAdminAsync = createAsyncThunk(
  `${ADMIN_SLICE_NAME}/fetchLogin`,
  async (
    { email, password, onSuccess }: LoginUserParams,
    { rejectWithValue }
  ) => {
    try {
      const { data } = await instance.post<IAuthTokens>("/user/login/", {
        email,
        password,
      });

      Cookies.set(ACCESS_TOKEN, data.access_token);
      Cookies.set(REFRESH_TOKEN, data.refresh_token);
      onSuccess();
      // NotificationService.success(successfulResponsesTrns.login);
    } catch ({ response }) {
      const errorText = response?.data?.error;
      // NotificationService.error(errorText || errorResponsesTrns.login);
      return rejectWithValue(errorText);
    }
  }
);
