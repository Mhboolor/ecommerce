import React, { useState } from "react";
import { useDeleteCategoryMutation } from "../../../../future/dashboard/category/categorySlice";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

function Category({ category }) {
  const [drop, setDrop] = useState(null);
  const [deleteCategory] = useDeleteCategoryMutation();

  const deleteCategoryHandler = (id) => {
    deleteCategory(id);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between gap-4">
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
        <div className="flex-1 flex items-center gap-3">
          <button className="border border-btn-blue text-btn-blue hover:text-white hover:bg-btn-blue rounded-md px-1.5 py-0.5 duration-150">
            ویرایش
          </button>
          <button
            className="border border-btn-red text-btn-red hover:text-white hover:bg-btn-red rounded-md px-1.5 py-0.5 duration-150"
            onClick={(e) => deleteCategoryHandler(category._id)}
          >
            حذف
          </button>
        </div>
        {category.children.length > 0 ? (
          <p className="flex-1 items-center flex">
            <button
              className="border rounded text-xl"
              onClick={(e) => setDrop(category._id)}
            >
              {drop === category._id ? <MdArrowDropUp /> : <MdArrowDropDown />}
            </button>
          </p>
        ) : (
          <p className="flex-1">چیزی نیست</p>
        )}
      </div>
      {category.children.length > 0 && (
        <div
          className={`flex-col gap-3 my-3 ${
            drop === category._id ? "flex" : "hidden"
          }`}
        >
          {category.children.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between gap-4"
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
              <div className="flex-1 flex items-center gap-3">
                <button className="border border-btn-blue text-btn-blue hover:text-white hover:bg-btn-blue rounded-md px-1.5 py-0.5 duration-150">
                  ویرایش
                </button>
                <button
                  className="border border-btn-red text-btn-red hover:text-white hover:bg-btn-red rounded-md px-1.5 py-0.5 duration-150"
                  onClick={(e) => deleteCategoryHandler(item._id)}
                >
                  حذف
                </button>
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
  );
}

export default Category;
