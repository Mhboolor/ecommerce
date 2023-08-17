import React from "react";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";

import { Link } from "react-router-dom";

function ProductInfo() {
  return (
    <div className="flex-1 px-4 py-2 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 font-medium text-sm text-[#067d62]">
          <Link>ایسوس</Link>
          <span>/</span>
          <Link>لپ تاپ ایسوس</Link>
        </div>
        <button className="text-2xl text-[#212529]">
          <FiHeart />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-base font-bold text-[#000] tracking-wide">
          لپ تاپ ایسوس 15.6 اینچی مدل X515EP پردازنده Core i5 1135G7 رم 16GB
          حافظه 1TB SSD گرافیک 2GB
        </p>
        <p className="text-[#899696] text-sm tracking-wider">
          ASUS X515EP Core i5 1135G7 16GB 1TB SSD 2GB MX330 FHD Laptop
        </p>
      </div>
      <div className="flex justify-between border-b pb-4 flex-col gap-2 sm:flex-row sm:items-center">
        <div>
          <Link className="flex items-center gap-1 text-sm ">
            <FaStar className="text-[#ffc107] text-base" />
            <p className="flex items-center gap-1 text-[#535353]">
              به این کالا امتیاز بدهید
              <p className="text-[#aaa]">(۵۸۱ بازدید)</p>
            </p>
          </Link>
        </div>
        <div className="text-sm flex items-center gap-1">
          <p className="text-[#aaa]">کدمحصول : </p>
          <p className="text-[#535353]">TP-36816</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-3">
          <p className="text-[#535353] text-xs ">گارانتی محصول</p>
          <div className="border border-[#008e10] rounded-md py-2 px-3 flex items-center gap-2 text-sm">
            از 12 ماه تا 18 ماه | گارانتی شرکتی
            <RiExternalLinkLine className="text-[#008e10]" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between my-5 flex-col gap-2 sm:flex-row">
        <Link className="flex items-center gap-1 text-sm text-[#535353]">
          <BsFillQuestionCircleFill />
          اهنمای خرید سازمانی
        </Link>
        <div className="flex items-center gap-5 flex-col sm:flex-row">
            <div className="flex items-center gap-2">
                <p className="text-2xl font-semibold">۲۴,۹۰۰,۰۰۰</p>
                <p className="text-lg">تومان</p>
            </div>
            <div>
                <button className="flex items-center gap-2 text-white bg-[#df1e2f] rounded px-6 py-4 text-xl">افزودن به سبد خرید <AiOutlineShopping className="text-3xl"/></button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
