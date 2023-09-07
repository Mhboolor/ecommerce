import { apiSlice } from "../../../api/apiSlice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const contactAdapter = createEntityAdapter({
  selectId: (e) => e._id,
});

const initialState = contactAdapter.getInitialState();

const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    AllContacts: builder.query({
      query: () => ({
        url: "/contact/list",
      }),
      transformResponse: (result) => {
        if (result.statusCode === 200) {
          contactAdapter.setAll(initialState.entities, result.data.contacts);
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
      invalidatesTags: (result, error, arg) => [
        { type: "Contact", id: arg.id },
      ],
    }),
  }),
});

export const {
  useAllContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactApi;

export const selectContactsResult = contactApi.endpoints.AllContacts.select();

const selectContactsData = createSelector(
  selectContactsResult,
  (contactsResult) => contactsResult.data
);

export const { selectAll: selectAllContacts , selectById} = contactAdapter.getSelectors(
  (state) => selectContactsData(state) ?? initialState
);
