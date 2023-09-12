import React from "react";
import { TbError404, TbError404Off } from "react-icons/tb";
import { BiError, BiErrorAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="w-full h-screen flex items-center justify-center gap-5 text-center px-5 bg-slate-950 text-white text-base sm:text-2xl relative">
      <BiError className=" absolute top-10 right-10 animate-ping" />
      <BiErrorAlt className=" absolute bottom-10 left-10 animate-spin-slow" />
      <TbError404Off className="text-2xl animate-bounce" />
      <div className="flex flex-col items-center justify-center gap-5">
        <p>متاسفانه , نمیتونیم این صفحه رو پیدا کنیم</p>
        <Link
          to={"/dashboard"}
          className="text-base border rounded px-3 py-1.5 duration-150 hover:text-black hover:bg-white"
        >
          صفحه اصلی
        </Link>
      </div>
      <TbError404 className="text-2xl animate-bounce" />
    </div>
  );
}

export default ErrorPage;
