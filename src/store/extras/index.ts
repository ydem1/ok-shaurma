import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "src/services/axiosBaseQuery";
import { IExtra } from "src/@types/extra";

export const extraApiSlice = createApi({
  reducerPath: "extra",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["extra"],
  endpoints: (builder) => ({
    getExtras: builder.query<IExtra[], void>({
      query: () => ({
        url: "/extras/",
        method: "GET",
      }),
      providesTags: ["extra"],
    }),

    createExtra: builder.mutation<IExtra, Partial<IExtra>>({
      query: (data) => ({
        url: "/extras/",
        method: "POST",
        data,
      }),
      invalidatesTags: ["extra"],
    }),

    updateExtra: builder.mutation<void, { id: string; data: Partial<IExtra> }>({
      query: ({ id, data }) => ({
        url: `/extras/${id}`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["extra"],
    }),

    deleteExtra: builder.mutation<void, string>({
      query: (id) => ({
        url: `/extras/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["extra"],
    }),
  }),
});

export const {
  useGetExtrasQuery,
  useCreateExtraMutation,
  useUpdateExtraMutation,
  useDeleteExtraMutation,
} = extraApiSlice;
