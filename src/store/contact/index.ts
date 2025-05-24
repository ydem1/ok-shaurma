import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "src/services/axiosBaseQuery";
import { IContactFormValues } from "src/page-components/admin/ContactForm/types";
import { IContact } from "src/@types/contact";

export const contactApiSlice = createApi({
  reducerPath: "contact",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["contact"],
  endpoints: (builder) => ({
    getContact: builder.query<IContact, void>({
      query: () => ({
        url: "/contact/",
        method: "GET",
      }),
      providesTags: ["contact"],
    }),

    updateContact: builder.mutation<void, IContactFormValues>({
      query: (data) => ({
        url: "/contact/",
        method: "POST",
        data,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});

export const { useGetContactQuery, useUpdateContactMutation } =
  contactApiSlice;
