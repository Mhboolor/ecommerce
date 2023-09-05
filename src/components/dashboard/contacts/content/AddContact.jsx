import React from "react";
import { useForm } from "react-hook-form";

function AddContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    console.log("hi");
  };

  return (
    <div className="h-screen w-screen fixed left-0 top-0 z-50 flex items-center justify-center">
        <div className="w-full h-full bg-black/10 absolute left-0 top-0"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full max-w-xs bg-[#fff] p-5 shadow-md rounded border z-50"
      >
        <div className="flex flex-col gap-2">
          <input
            {...register("name", {
              required: { value: true, message: "نام کاربر اجباری میباشد !" },
              maxLength: { value: 20, message: "نام بیش از حد مجاز میباشد !" },
              minLength: { value: 3, message: "نام کمتر از حد مجاز میباشد !" },
            })}
            className="border rounded py-1.5 px-2 outline-none"
            placeholder=""
          />
          {errors.name && (
            <p className="text-xs text-btn-red">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            {...register("email", {
              required: { value: true, message: "ایمیل کاربر اجباری میباشد !" },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "ایمیل کاربر نادرست میباشد !",
              },
            })}
            className="border rounded py-1.5 px-2 outline-none"
            placeholder=""
          />
          {errors.email && (
            <p className="text-xs text-btn-red">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            {...register("phone", {
              required: { value: true, message: "شماره کاربر اجباری میباشد !" },
              maxLength: {
                value: 13,
                message: "شماره بیش از حد مجاز میباشد !",
              },
              minLength: {
                value: 10,
                message: "شماره کمتر از حد مجاز میباشد !",
              },
            })}
            className="border rounded py-1.5 px-2 outline-none"
            placeholder=""
          />
          {errors.phone && (
            <p className="text-xs text-btn-red">{errors.phone.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <input
            {...register("body", {
              required: {
                value: true,
                message: "توضیحات کاربر اجباری میباشد !",
              },
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
            placeholder=""
          />
          {errors.body && (
            <p className="text-xs text-btn-red">{errors.body.message}</p>
          )}
        </div>
        <div className="flex items-center justify-center gap-5">
          <button className="py-1 px-3 text-success border-success border rounded hover:text-white hover:bg-success duration-150">
            تایید
          </button>
          <button className="py-1 px-3 text-btn-red border-btn-red border rounded hover:text-white hover:bg-btn-red duration-150">
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddContact;
