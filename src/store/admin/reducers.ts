import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "src/constants/cookiesKeys";
import { chechAdminAsync, loginAdminAsync, logout } from "./actions";
import { IAdminState } from "./slice";

type Reducer = (builder: ActionReducerMapBuilder<IAdminState>) => void;

export const loginAdminReducer: Reducer = (builder) => {
  builder.addCase(loginAdminAsync.fulfilled, (state) => {
    state.isLoading = false;
  });

  builder.addCase(loginAdminAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(loginAdminAsync.rejected, (state) => {
    state.isLoading = false;
  });
};

export const chechAdminReducer: Reducer = (builder) => {
  builder.addCase(chechAdminAsync.fulfilled, (state, action) => {
    state.isLoading = false;
    state.isAuthorized = action.payload.isAuth || false;
  });

  builder.addCase(chechAdminAsync.pending, (state) => {
    state.isLoading = true;
  });

  builder.addCase(chechAdminAsync.rejected, (state) => {
    state.isLoading = false;
    state.isAuthorized = false;
  });
};

export const logoutReducer: Reducer = (builder) => {
  builder.addCase(logout, () => {
    Cookies.remove(ACCESS_TOKEN);
    Cookies.remove(REFRESH_TOKEN);
  });
};
