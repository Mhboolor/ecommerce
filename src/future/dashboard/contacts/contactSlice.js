import { apiSlice } from "../../../api/apiSlice";

const contactApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: () => "/contact/list",
    }),
  }),
});

export const { useGetAllContactsQuery } = contactApi;
