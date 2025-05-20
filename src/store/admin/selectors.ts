import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectAdminState = (state: RootState) => state.admin;

export const selectIsLoading = createSelector(
  selectAdminState,
  (adminState) => adminState.isLoading
);

export const selectIsAuthorized = createSelector(
  selectAdminState,
  (adminState) => adminState.isAuthorized
);
