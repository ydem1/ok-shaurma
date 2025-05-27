import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { instance } from "src/services/api-client";
import { NotificationService } from "src/helpers/notifications";
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
      const { data } = await instance.post<IAuthTokens>("/auth/login/", {
        email: email.trim(),
        password,
      });

      Cookies.set(ACCESS_TOKEN, data.access_token);
      Cookies.set(REFRESH_TOKEN, data.refresh_token);
      onSuccess();
      NotificationService.success();
    } catch ({ response }) {
      const errorText = response?.data?.message;
      NotificationService.error(errorText);
      return rejectWithValue(errorText);
    }
  }
);

interface IResponceAuthCheck {
  message: string;
  isAuth?: boolean;
}

export const chechAdminAsync = createAsyncThunk(
  `${ADMIN_SLICE_NAME}/chech`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get<IResponceAuthCheck>("auth/check/");

      return data;
    } catch ({ response }) {
      const errorText = response?.data?.message;
      NotificationService.error(errorText);
      return rejectWithValue(errorText);
    }
  }
);

export const logout = createAction(`${ADMIN_SLICE_NAME}/logout`);
