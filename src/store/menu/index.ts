import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "src/services/axiosBaseQuery";
import { IMenuItem } from "src/@types/menu-item";

export const menuApiSlice = createApi({
  reducerPath: "menu",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["menu"],
  endpoints: (builder) => ({
    getMenu: builder.query<IMenuItem[], void>({
      query: () => ({
        url: "/menu/",
        method: "GET",
      }),
      providesTags: ["menu"],
    }),

    deleteMenuItem: builder.mutation<void, string>({
      query: (id) => ({
        url: `/men2u/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["menu"],
    }),
  }),
});

export const { useGetMenuQuery, useDeleteMenuItemMutation } = menuApiSlice;
