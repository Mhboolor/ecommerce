import { apiSlice } from "../../../api/apiSlice";

const categorySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/admin/category/add",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: data,
      }),
    }),
  }),
});

export const { useAddCategoryMutation } = categorySlice;
