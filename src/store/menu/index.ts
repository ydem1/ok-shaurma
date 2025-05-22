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

    createMenuItem: builder.mutation<IMenuItem, FormData>({
      query: (data) => ({
        url: "/menu/",
        method: "POST",
        data,
      }),
      invalidatesTags: ["menu"],
    }),

    updateMenuItem: builder.mutation<void, { _id: string; data: FormData }>({
      query: ({ _id, ...data }) => ({
        url: `/menu/${_id}`,
        method: "PUT",
        data,
      }),
      invalidatesTags: ["menu"],
    }),

    deleteMenuItem: builder.mutation<void, string>({
      query: (id) => ({
        url: `/menu/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["menu"],
    }),
  }),
});

export const {
  useGetMenuQuery,
  useDeleteMenuItemMutation,
  useCreateMenuItemMutation,
  useUpdateMenuItemMutation,
} = menuApiSlice;
