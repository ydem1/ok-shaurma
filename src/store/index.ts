import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { menuApiSlice } from "./menu";

export const store = configureStore({
  reducer: combineReducers({
    [menuApiSlice.reducerPath]: menuApiSlice.reducer,
  }),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
