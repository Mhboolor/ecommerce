import { apiSlice } from "../../../api/apiSlice";

const categorySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    AllCategory: builder.query({
      query: () => ({
        url: "/admin/category/list",
      }),
      transformResponse: (result) => {
        if (result.statusCode === 200) {
          return result.data.categories;
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Category", id })),
              { type: "Category", id: "LIST" },
            ]
          : [{ type: "Category", id: "LIST" }],
    }),
  }),
});

export const { useAllCategoryQuery } = categorySlice;
