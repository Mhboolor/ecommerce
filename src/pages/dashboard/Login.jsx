import { useForm } from "react-hook-form";
import { MdPhone } from "react-icons/md";
import { TbNumbers } from "react-icons/tb";

function Login() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <div className="absolute left-0 top-0 h-full hidden md:flex">
        <img
          src="../images/dashboard/login/wave.png"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center justify-center z-10 container m-auto gap-40 px-20 sm:px-52">
        <div className="flex flex-col flex-1 gap-5">
          <div className="flex items-center justify-center text-clip flex-col gap-4">
            <img
              src="../images/dashboard/login/avatar.svg"
              alt="userAvatar"
              className="w-28 h-28"
            />
            <p>خوش آمدید</p>
          </div>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
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
                className="w-full outline-none bg-transparent peer group border-b p-2 focus:border-b-green-500"
              />
              <label htmlFor="phone" className=" peer-focus:text-green-500">
                <MdPhone className="text-2xl" />
              </label>
            </div>
            {errors.mobile && (
              <p className="text-sm text-center text-red-500">
                {errors.mobile.message}
              </p>
            )}
            <div className="flex items-center flex-row-reverse">
              <input
                {...register("code", {
                  required: {
                    value: true,
                    message: "کد فرستاده شده اجباری میباشد !",
                  },
                })}
                type="text"
                id="phone"
                placeholder="کد ارسال شده را وارد کنید ..."
                className="w-full outline-none bg-transparent peer group border-b p-2 focus:border-b-green-500"
              />
              <label htmlFor="phone" className=" peer-focus:text-green-500">
                <TbNumbers className="text-2xl" />
              </label>
            </div>
            {errors.code && (
              <p className="text-sm text-center text-red-500">
                {errors.code.message}
              </p>
            )}
            <button className="flex items-center justify-center bg-green-500 py-1 rounded-2xl w-full text-white font-semibold">
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
