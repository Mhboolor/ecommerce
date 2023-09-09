import React from "react";
import { useAllCategoryQuery } from "../../../../future/dashboard/category/categorySlice";
import Loading from "../../Loading";
import Error from "../../Error";
import Empty from "../../Empty";
import { MdArrowDropDown } from "react-icons/md";

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
        <div className="flex flex-col gap-3 px-4 py-2">
          <div className="flex items-center justify-between py-2">
            <p className="flex-1 items-start">عکس</p>
            <p className="flex-1 items-start">نام</p>
            <p className="flex-1 items-start">شناسه</p>
            <p className="flex-1 items-start">زیرمجموعه</p>
          </div>
          {allCategory.map((category) => (
            <div key={category._id} className="flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex-1 items-start">
                  {category.images.map((image) => (
                    <img
                      key={category._id}
                      src={image}
                      alt="category_Images"
                      className="w-12 h-12 rounded-full"
                    />
                  ))}
                </div>
                <div className="flex-1 items-start">
                  <p>{category.title}</p>
                </div>
                <div className="flex-1 items-start">
                  <p>{category._id}</p>
                </div>
                {category.children.length > 0 ? (
                  <p className="flex-1">
                    <MdArrowDropDown />
                  </p>
                ) : (
                  <p className="flex-1">چیزی نیست</p>
                )}
              </div>
              {category.children.length > 0 && (
                <div className="flex flex-col gap-3 my-3">
                  {category.children.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex-1 items-start">
                        {item.images.map((image) => (
                          <img
                            key={item._id}
                            src={image}
                            alt="category_Images"
                            className="w-12 h-12 rounded-full"
                          />
                        ))}
                      </div>
                      <div className="flex-1 items-start">
                        <p>{item.title}</p>
                      </div>
                      <div className="flex-1 items-start">
                        <p>{item._id}</p>
                      </div>
                      {item.children.length > 0 ? (
                        <p className="flex-1">
                          <MdArrowDropDown />
                        </p>
                      ) : (
                        <p className="flex-1">چیزی نیست</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <Empty title={"هیچ دسته بندی وجود ندارد !"} />
      )}
    </div>
  );
}

export default CategoryList;
