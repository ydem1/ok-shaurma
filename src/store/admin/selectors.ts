import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectAdminState = (state: RootState) => state.admin;

export const selectIsLoadingLogin = createSelector(
  selectAdminState,
  (adminState) => adminState.isLoadingLogin
);


export const selectIsLoadingAuthorized = createSelector(
  selectAdminState,
  (adminState) => adminState.isLoadingAuthorized
);

export const selectIsAuthorized = createSelector(
  selectAdminState,
  (adminState) => adminState.isAuthorized
);
