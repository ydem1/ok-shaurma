import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMenuItem } from "src/@types/menu-item";

export const menuApiSlice = createApi({
  reducerPath: "menu",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_REACT_API_URL }),
  tagTypes: ["menu"],
  endpoints: (builder) => ({
    getMenu: builder.query<IMenuItem[], object>({
      query: () => "/menu/",
      providesTags: ["menu"],
    }),
  }),
});

export const { useGetMenuQuery } = menuApiSlice;
