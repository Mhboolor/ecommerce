import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Blog from "../components/blogs/blog/Blog";
import { MdSearch } from "react-icons/md";


function Blogs() {
  return (
    <div className="container m-auto px-4 sm:px-0">
      <BreadCrumb
        prev={"خانه"}
        prevLink={"/"}
        hereLink={"/blogs"}
        here={"مقالات"}
      />
      <div className="flex flex-col lg:flex-row gap-5">
        <div>
            <Blog/>
        </div>
        <div>
            <div className="shadow-md rounded-xl bg-white">
                <div className="border-b">
                    <h2 className="text-[#df1e2f] text-sm font-semibold">جستجو در وبلاگ</h2>
                </div>
                <div className="rounded-xl border">
                    <input type="text" placeholder="جستجو در وبلاگ ..." className="bg-transparent"/>
                    <button className="text-white text-base"><MdSearch/></button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
