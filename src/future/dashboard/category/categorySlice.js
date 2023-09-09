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
    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `/admin/category/remove/${categoryId}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Category", id: arg.id },
      ],
    }),
    editCategory: builder.mutation({
      query: (categoryId, data) => ({
        url: `/admin/category/update/${categoryId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Category", id }],
    }),
  }),
});

export const {
  useAllCategoryQuery,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
} = categorySlice;
