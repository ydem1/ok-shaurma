import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectCurrentUserState = (state: RootState) => state.admin;

export const selectIsLoading = createSelector(
  selectCurrentUserState,
  (adminState) => adminState.isLoading
);

export const selectCurrentIsAuthorized = createSelector(
  selectCurrentUserState,
  (adminState) => adminState.isAuthorized
);
