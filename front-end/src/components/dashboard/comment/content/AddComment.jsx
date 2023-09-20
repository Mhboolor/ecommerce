import React from "react";
import { useForm } from "react-hook-form";

function AddComment({ ShowBoxHandler }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("images", data.file[0]);
    formData.append("title", data.title);
    formData.append("parent", data.parent);
  };

  return (
    <div
      className={`h-screen w-screen fixed left-0 top-0 z-50 items-center justify-center flex`}
    >
      <div
        className="w-full h-full bg-black/10 absolute left-0 top-0"
        onClick={() => {
          ShowBoxHandler();
          reset();
        }}
      ></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full max-w-sm bg-[#fff] p-5 shadow-md rounded border z-50"
      >
        <div className="flex items-center justify-center text-center">
          <p>اضافه کردن کامنت</p>
        </div>
        <div className="flex flex-col gap-2">
          <input
            {...register("comment", {
              required: { value: true, message: "نام دسته اجباری میباشد !" },
              maxLength: {
                value: 20,
                message: "نام دسته بندی بیش از حد مجاز میباشد !",
              },
              minLength: {
                value: 3,
                message: "نام دسته بندی کمتر از حد مجاز میباشد !",
              },
            })}
            className="border rounded py-1.5 px-2 outline-none"
            placeholder="نام دسته بندی را وارد کنید ..."
          />
          {errors.comment && (
            <p className="text-xs text-btn-red">{errors.comment.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            {...register("blogName", {
              required: { value: true, message: "نام دسته اجباری میباشد !" },
              maxLength: {
                value: 20,
                message: "نام دسته بندی بیش از حد مجاز میباشد !",
              },
              minLength: {
                value: 3,
                message: "نام دسته بندی کمتر از حد مجاز میباشد !",
              },
            })}
            className="border rounded py-1.5 px-2 outline-none"
            placeholder="نام دسته بندی را وارد کنید ..."
          />
          {errors.blogName && (
            <p className="text-xs text-btn-red">{errors.blogName.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            {...register("productName", {
              required: { value: true, message: "نام دسته اجباری میباشد !" },
              maxLength: {
                value: 20,
                message: "نام دسته بندی بیش از حد مجاز میباشد !",
              },
              minLength: {
                value: 3,
                message: "نام دسته بندی کمتر از حد مجاز میباشد !",
              },
            })}
            className="border rounded py-1.5 px-2 outline-none"
            placeholder="نام دسته بندی را وارد کنید ..."
          />
          {errors.productName && (
            <p className="text-xs text-btn-red">{errors.productName.message}</p>
          )}
        </div>
        <div className="flex items-center justify-center gap-5">
          <button className="py-1 px-3 text-success border-success border rounded hover:text-white hover:bg-success duration-150">
            اضافه
          </button>
          <button
            type="button"
            className="py-1 px-3 text-btn-red border-btn-red border rounded hover:text-white hover:bg-btn-red duration-150"
            onClick={() => {
              ShowBoxHandler();
              reset();
            }}
          >
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddComment;
