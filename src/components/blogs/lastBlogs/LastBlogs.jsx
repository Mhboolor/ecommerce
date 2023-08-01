import React from "react";
import { MdDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

function LastBlogs() {
  return (
    <div className="shadow-md rounded-xl bg-white">
      <div className="border-b p-4">
        <h2 className="text-[#df1e2f] text-sm font-semibold">جستجو در وبلاگ</h2>
      </div>
      <div className="px-4 flex flex-col divide-y">
        <div className="flex items-center gap-3 py-3">
          <img
            src="./images/blogs/blog-1.webp"
            alt="ImageCategory"
            width={50}
            height={50}
          />
          <div>
            <Link className="text-sm text-gray-6 text-justify">
              راهنمای خرید CPU (پردازنده) + ویژگی‌های آن
            </Link>
            <p className="flex items-center gap-1 text-gray-8 text-sm">
              <MdDateRange />
              ۱۴۰۲/۰۴/۳۱
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-3">
          <img
            src="./images/blogs/blog-1.webp"
            alt="ImageCategory"
            width={50}
            height={50}
          />
          <div>
            <Link className="text-sm text-gray-6 text-justify">
              راهنمای خرید CPU (پردازنده) + ویژگی‌های آن
            </Link>
            <p className="flex items-center gap-1 text-gray-8 text-sm">
              <MdDateRange />
              ۱۴۰۲/۰۴/۳۱
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-3">
          <img
            src="./images/blogs/blog-1.webp"
            alt="ImageCategory"
            width={50}
            height={50}
          />
          <div>
            <Link className="text-sm text-gray-6 text-justify">
              راهنمای خرید CPU (پردازنده) + ویژگی‌های آن
            </Link>
            <p className="flex items-center gap-1 text-gray-8 text-sm">
              <MdDateRange />
              ۱۴۰۲/۰۴/۳۱
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-3">
          <img
            src="./images/blogs/blog-1.webp"
            alt="ImageCategory"
            width={50}
            height={50}
          />
          <div>
            <Link className="text-sm text-gray-6 text-justify">
              راهنمای خرید CPU (پردازنده) + ویژگی‌های آن
            </Link>
            <p className="flex items-center gap-1 text-gray-8 text-sm">
              <MdDateRange />
              ۱۴۰۲/۰۴/۳۱
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastBlogs;
