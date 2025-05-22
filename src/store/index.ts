import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { admin } from "./admin/slice";
import { contactApiSlice } from "./contact";
import { menuApiSlice } from "./menu";

export const store = configureStore({
  reducer: combineReducers({
    admin,
    [contactApiSlice.reducerPath]: contactApiSlice.reducer,
    [menuApiSlice.reducerPath]: menuApiSlice.reducer,
  }),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(menuApiSlice.middleware)
      .concat(contactApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
