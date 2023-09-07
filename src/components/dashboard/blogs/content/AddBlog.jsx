import React from "react";
import { useForm } from "react-hook-form";

function AddBlog({ showAddBox, ShowBoxHandler }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    reset();
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
        className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-3xl bg-[#fff] p-5 shadow-md rounded border z-50"
      >
        <div className="flex items-center justify-center text-center md:col-span-2">
          <p>اضافه کردن بلاگ</p>
        </div>
        <div className="flex flex-col gap-2">
          <input
            {...register("title", {
              required: { value: true, message: "تایتل اجباری میباشد !" },
              maxLength: {
                value: 20,
                message: "تایتل بیش از حد مجاز میباشد !",
              },
              minLength: {
                value: 3,
                message: "تایتل کمتر از حد مجاز میباشد !",
              },
            })}
            className="border rounded py-1.5 px-2 outline-none"
            placeholder="تایتل را وارد کنید ..."
          />
          {errors.title && (
            <p className="text-xs text-btn-red">{errors.title.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            {...register("text", {
              required: { value: true, message: "متن اجباری میباشد !" },
              maxLength: {
                value: 30,
                message: "توضیحات بیش از حد مجاز میباشد !",
              },
              minLength: {
                value: 5,
                message: "توضیحات کمتر از حد مجاز میباشد !",
              },
            })}
            className="border rounded py-1.5 px-2 outline-none"
            placeholder="توضیحات را وارد کنید"
          />
          {errors.text && (
            <p className="text-xs text-btn-red">{errors.text.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            {...register("short_text", {
              required: { value: true, message: "توضیح کوتاه اجباری میباشد !" },
              maxLength: {
                value: 20,
                message: "توضیح کوتاه بیش از حد مجاز میباشد !",
              },
              minLength: {
                value: 5,
                message: "توضیح کوتاه کمتر از حد مجاز میباشد !",
              },
            })}
            className="border rounded py-1.5 px-2 outline-none"
            placeholder="توضیح کوتاه را وارد کنید ..."
          />
          {errors.short_text && (
            <p className="text-xs text-btn-red">{errors.short_text.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            {...register("tags", {
              required: { value: true, message: "تایتل اجباری میباشد !" },
              maxLength: {
                value: 20,
                message: "تایتل بیش از حد مجاز میباشد !",
              },
              minLength: {
                value: 3,
                message: "تایتل کمتر از حد مجاز میباشد !",
              },
            })}
            className="border rounded py-1.5 px-2 outline-none"
            placeholder="تگ ها ..."
          />
          {errors.tags && (
            <p className="text-xs text-btn-red">{errors.tags.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            {...register("category", {
              required: { value: true, message: "تایتل اجباری میباشد !" },
              maxLength: {
                value: 20,
                message: "تایتل بیش از حد مجاز میباشد !",
              },
              minLength: {
                value: 3,
                message: "تایتل کمتر از حد مجاز میباشد !",
              },
            })}
            className="border rounded py-1.5 px-2 outline-none"
            placeholder="دسته بندی ها ..."
          />
          {errors.category && (
            <p className="text-xs text-btn-red">{errors.category.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input type="file" required name="photo" accept="image/*" />
        </div>
        <div className="flex items-center justify-center gap-5 md:col-span-2">
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

export default AddBlog;
