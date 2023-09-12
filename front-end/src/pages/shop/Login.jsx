import { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import axios from "axios";

import { useForm } from "react-hook-form";

function Login() {
  const {
    register, 
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container m-auto px-4 sm:p-0 mb-14">
      <BreadCrumb
        prev={"صفحه اصلی"}
        prevLink={""}
        here={"ورود"}
        hereLink={""}
      />
      <div className="bg-[#fff] shadow-md rounded-2xl flex-col flex items-center justify-center text-center pt-3 pb-6 px-5 gap-4 w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 m-auto">
        <p className="border-b border-[#eff0f2] py-3 text-xl w-full font-medium">
          ورود / ثبت نام سریع
        </p>
        <div className="text-sm text-[#212529] flex flex-col items-start w-full gap-1">
          <p>کاربر گرامی، خوش آمدید.</p>
          <p>لطفا شماره موبایل خود را وارد نمایید</p>
        </div>
        <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("mobile", {
              required: "! شماره موبایل اجباری میباشد",
              maxLength: {
                value: 11,
                message: "! شماره موبایل 11 رقم میباشد",
              },
              pattern: {
                value: /^((0)9\d{9})$/gm,
                message: "! شماره موبایل درست نمیباشد",
              },
            })}
            placeholder="... لطفا شماره موبایل خود را وارد کنید"
            className="border rounded-lg flex-1 outline-none py-2 px-4"
          />
          {errors.mobile && (
            <p className="text-sm text-red-500 self-start">
              {errors.mobile.message}
            </p>
          )}
          <div className="flex flex-col gap-5 w-full">
            <p className="text-sm text-[#212529] flex flex-col items-start w-full gap-1">
              لطفا کد ارسالی را وارد کنید
            </p>
            <input
              type="tel"
              className="border rounded-lg flex-1 outline-none py-2 px-4"
              placeholder="کد ارسالی ..."
            />
          </div>
          <button
            className="bg-[#dc3545] border border-[#dc3545] rounded-lg py-2 flex-1 text-white"
          >
            ادامه
          </button>
          <button
            className="bg-[#dc3545] border border-[#dc3545] rounded-lg py-2 flex-1 text-white"
          >
            ورود
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
