import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="flex flex-col justify-between gap-5 bg-white h-screen fixed left-0 top-0 w-full max-w-[290px] z-30 p-4 shadow-2xl drop-shadow-xl">
      <div className="flex items-center justify-between">
        <p>سبد خرید</p>
        <button className="text-[#666] text-xl font-bold">
          <MdClose />
        </button>
      </div>
      <div className="flex-1"></div>
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <Link className="bg-[#e4e4e4] text-[#666] w-full rounded-md py-1.5">
          مشاهده سبد خرید
        </Link>
        <Link className="bg-[#df1e2f] text-white w-full rounded-md py-1.5">
          نهایی کردن سفارش
        </Link>
      </div>
    </div>
  );
}

export default Cart;
