import React from "react";
import { Link } from "react-router-dom";
import { MdArrowLeft, MdDateRange } from "react-icons/md";

function Blog() {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center gap-4 lg:flex-row lg:p-0 lg:pl-4">
      <div className="flex items-center justify-center w-64 h-64">
        <img
          src="./images/blogs/blog-1.webp"
          alt="Blog_Image"
          className="rounded-xl w-full h-full lg:rounded-l-none"
        />
      </div>
      <div className="flex flex-col gap-5 flex-1">
        <Link className="text-gray-9 text-base flex items-center gap-2 font-medium">
          <MdArrowLeft className="text-2xl" />
          راهنمای خرید CPU (پردازنده) + ویژگی‌های آن
        </Link>
        <p className="text-gray-6 text-sm leading-7 text-justify">
          اگر قرار باشد کامپیوتر جدیدی ببندید (اسمبل کنید) شاید مهم‌ترین سوالی
          که ذهن شما را به خود مشغول می‌کند این باشد که چه پردازنده‌ای مناسب من
          است؟ بدون شک بیشتر کاربران می‌خواهند پردازنده‌ای بخرند که از یک سو
          جوابگوی نیازهایشان باشد و از سوی دیگر هزینه زیادی برای خرید آن
          نپردازند یا بهتر بگوییم هزینه معقولی برای آن بپردازند.
        </p>
        <div className="border rounded-md py-1 px-2 flex items-center justify-between">
          <p className="text-gray-8 text-xs flex items-center gap-1">
            <MdDateRange />
            شنبه، ۳۱ تیر ۱۴۰۲
          </p>
          <Link className="text-[#df1e2f] text-sm font-medium">ادامه خبر</Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
