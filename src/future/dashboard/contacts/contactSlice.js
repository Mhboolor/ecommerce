import { apiSlice } from "../../../api/apiSlice";
import { createEntityAdapter  } from "@reduxjs/toolkit"

const contactAdapter = createEntityAdapter();

const initialState = contactAdapter.getInitialState();

const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    AllContacts: builder.query({
      query: () => ({
        url: "/contact/list",
      }),
      transformResponse: (result) => {
        if (result.statusCode === 200) {
          return result.data.contacts;
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Contact", id })),
              { type: "Contact", id: "LIST" },
            ]
          : [{ type: "Contact", id: "LIST" }],
    }),
    addContact: builder.mutation({
      query: (data) => ({
        url: "/contact/add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Contact", id: "LIST" }],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contact/remove/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Contact", id: "LIST" }],
    }),
  }),
});

export const {
  useAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactApi;
