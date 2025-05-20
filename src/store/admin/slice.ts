import { createSlice } from "@reduxjs/toolkit";
import { ADMIN_SLICE_NAME } from "./actions";
import {
  chechAdminReducer,
  loginAdminReducer,
  logoutReducer,
} from "./reducers";

export interface IAdminState {
  isLoading: boolean;
  isAuthorized: boolean;
}

export const initialState: IAdminState = {
  isLoading: false,
  isAuthorized: false,
};

export const { reducer: admin } = createSlice({
  name: ADMIN_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers(builder) {
    loginAdminReducer(builder);
    chechAdminReducer(builder);
    logoutReducer(builder);
  },
});
