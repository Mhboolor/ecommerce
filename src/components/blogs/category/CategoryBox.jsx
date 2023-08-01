import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";

function CategoryBox() {
  return (
    <div className="shadow-md rounded-xl bg-white">
      <div className="border-b p-4">
        <h2 className="text-[#df1e2f] text-sm font-semibold">دسته‌بندی‌ها</h2>
      </div>
      <div className="px-4 flex flex-col divide-y">
        <div className="flex items-center gap-3 py-3">
          <img
            src="./images/blogs/categoryBox/Learn-4630.webp"
            alt="ImageCategory"
            width={50}
            height={50}
          />
          <div>
            <Link className="text-gray-6 text-sm font-medium">آموزش</Link>
            <p className="flex items-center gap-1 text-gray-8 text-sm">
              <AiOutlineBars />
              ۵۹ مطلب
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-3">
          <img
            src="./images/blogs/categoryBox/Learn-4630.webp"
            alt="ImageCategory"
            width={50}
            height={50}
          />
          <div>
            <Link className="text-gray-6 text-sm font-medium">آموزش</Link>
            <p className="flex items-center gap-1 text-gray-8 text-sm">
              <AiOutlineBars />
              ۵۹ مطلب
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-3">
          <img
            src="./images/blogs/categoryBox/Learn-4630.webp"
            alt="ImageCategory"
            width={50}
            height={50}
          />
          <div>
            <Link className="text-gray-6 text-sm font-medium">آموزش</Link>
            <p className="flex items-center gap-1 text-gray-8 text-sm">
              <AiOutlineBars />
              ۵۹ مطلب
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-3">
          <img
            src="./images/blogs/categoryBox/Learn-4630.webp"
            alt="ImageCategory"
            width={50}
            height={50}
          />
          <div>
            <Link className="text-gray-6 text-sm font-medium">آموزش</Link>
            <p className="flex items-center gap-1 text-gray-8 text-sm">
              <AiOutlineBars />
              ۵۹ مطلب
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 py-3">
          <img
            src="./images/blogs/categoryBox/Learn-4630.webp"
            alt="ImageCategory"
            width={50}
            height={50}
          />
          <div>
            <Link className="text-gray-6 text-sm font-medium">آموزش</Link>
            <p className="flex items-center gap-1 text-gray-8 text-sm">
              <AiOutlineBars />
              ۵۹ مطلب
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBox;
