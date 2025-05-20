import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { loginAdminAsync } from "./actions";
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
