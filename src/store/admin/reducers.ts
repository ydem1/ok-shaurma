import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "src/constants/cookiesKeys";
import { chechAdminAsync, loginAdminAsync, logout } from "./actions";
import { IAdminState } from "./slice";

type Reducer = (builder: ActionReducerMapBuilder<IAdminState>) => void;

export const loginAdminReducer: Reducer = (builder) => {
  builder.addCase(loginAdminAsync.fulfilled, (state) => {
    state.isLoadingLogin = false;
  });

  builder.addCase(loginAdminAsync.pending, (state) => {
    state.isLoadingLogin = true;
  });

  builder.addCase(loginAdminAsync.rejected, (state) => {
    state.isLoadingLogin = false;
  });
};

export const chechAdminReducer: Reducer = (builder) => {
  builder.addCase(chechAdminAsync.fulfilled, (state, action) => {
    state.isLoadingAuthorized = false;
    state.isAuthorized = action.payload.isAuth || false;
  });

  builder.addCase(chechAdminAsync.pending, (state) => {
    state.isLoadingAuthorized = true;
  });

  builder.addCase(chechAdminAsync.rejected, (state) => {
    state.isLoadingAuthorized = false;
    state.isAuthorized = false;
  });
};

export const logoutReducer: Reducer = (builder) => {
  builder.addCase(logout, () => {
    Cookies.remove(ACCESS_TOKEN);
    Cookies.remove(REFRESH_TOKEN);
  });
};
