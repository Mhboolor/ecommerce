import { useForm } from "react-hook-form";
import { MdPhone } from "react-icons/md";
import { TbNumbers } from "react-icons/tb";

import { useDispatch, useSelector } from "react-redux";
import { authUser, checkCode } from "../../future/dashboard/login/loginSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { otp, role } = useSelector((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const authPhone = (mobile) => {
    dispatch(authUser(mobile));
  };
  const checkOtp = (data) => {
    dispatch(checkCode(data));
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <div className="absolute left-0 top-0 h-full">
        <img
          src="../images/dashboard/login/wave.png"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center justify-center z-10 container m-auto gap-40 px-20 sm:px-52">
        <div className="flex flex-col flex-1 gap-5">
          <div className="flex items-center justify-center text-clip flex-col gap-4 text-lg">
            <img
              src="../images/dashboard/login/avatar.svg"
              alt="userAvatar"
              className="w-28 h-28"
            />
            <p>خوش آمدید</p>
          </div>
          <form
            className="flex flex-col gap-4"
            onSubmit={!otp ? handleSubmit(authPhone) : handleSubmit(checkOtp)}
          >
            <div className="flex items-center flex-row-reverse">
              <input
                {...register("mobile", {
                  required: {
                    value: true,
                    message: "شماره تلفن اجباری میباشد !",
                  },
                  pattern: {
                    value: /^((0)9\d{9})$/gm,
                    message: "شماره موبایل درست نمیباشد !",
                  },
                  maxLength: {
                    value: 11,
                    message: "شماره بیش از حد مجاز میباشد !",
                  },
                })}
                type="text"
                id="phone"
                placeholder="شماره موبایل خود را وارد کنید ..."
                className="w-full outline-none bg-transparent peer group border-b p-2 focus:border-b-green-500 placeholder:text-black placeholder:md:text-slate-400"
                readOnly={otp ? true : false}
              />
              <label htmlFor="phone" className=" peer-focus:text-green-500">
                <MdPhone className="text-2xl" />
              </label>
            </div>
            {errors.mobile && (
              <p className="text-sm text-center text-red-600">
                {errors.mobile.message}
              </p>
            )}
            {otp ? (
              <>
                <div className="flex items-center flex-row-reverse">
                  <input
                    {...register("code", {
                      required: {
                        value: true,
                        message: "کد فرستاده شده اجباری میباشد !",
                      },
                    })}
                    id="phone"
                    placeholder="کد ارسال شده را وارد کنید ..."
                    className="w-full outline-none bg-transparent peer group border-b p-2 focus:border-b-green-500 placeholder:text-black placeholder:md:text-slate-400"
                  />
                  <label htmlFor="phone" className=" peer-focus:text-green-500">
                    <TbNumbers className="text-2xl" />
                  </label>
                </div>
                {errors.code && (
                  <p className="text-sm text-center text-red-600">
                    {errors.code.message}
                  </p>
                )}
              </>
            ) : null}
            <button className="flex items-center justify-center bg-white text-black md:bg-green-500 py-1 rounded-2xl w-full md:text-white font-semibold">
              ادامه
            </button>
          </form>
        </div>
        <div className="items-center justify-center w-full h-full flex-1 hidden lg:flex">
          <img
            src="../images/dashboard/login/bg.svg"
            alt=""
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
