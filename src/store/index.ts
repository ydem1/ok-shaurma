import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { admin } from "./admin/slice";
import { contactApiSlice } from "./contact";
import { extraApiSlice } from "./extras";
import { menuApiSlice } from "./menu";

export const store = configureStore({
  reducer: combineReducers({
    admin,
    [contactApiSlice.reducerPath]: contactApiSlice.reducer,
    [menuApiSlice.reducerPath]: menuApiSlice.reducer,
    [extraApiSlice.reducerPath]: extraApiSlice.reducer,
  }),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(menuApiSlice.middleware)
      .concat(extraApiSlice.middleware)
      .concat(contactApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
