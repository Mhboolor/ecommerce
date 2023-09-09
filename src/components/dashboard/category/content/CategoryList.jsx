import React, { useState } from "react";
import { useAllCategoryQuery } from "../../../../future/dashboard/category/categorySlice";
import Loading from "../../Loading";
import Error from "../../Error";
import Empty from "../../Empty";
import Category from "./Category";

function CategoryList() {
  const {
    data: allCategory,
    isError,
    isLoading,
    isSuccess,
  } = useAllCategoryQuery();

  return (
    <div className="w-full overflow-x-auto">
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loading />
      ) : isSuccess && allCategory.length > 0 ? (
        <div className="flex flex-col gap-3 px-4 py-2 w-[1000px] lg:w-full">
          <div className="flex items-center justify-between py-2 gap-4">
            <p className="flex-1 items-start">عکس</p>
            <p className="flex-1 items-start">نام</p>
            <p className="flex-1 items-start">شناسه</p>
            <p className="flex-1 items-start">عملیات ها</p>
            <p className="flex-1 items-start">زیرمجموعه</p>
          </div>
          {allCategory.map((category) => (
            <Category category={category} key={category._id} />
          ))}
        </div>
      ) : (
        <Empty title={"هیچ دسته بندی وجود ندارد !"} />
      )}
    </div>
  );
}

export default CategoryList;
