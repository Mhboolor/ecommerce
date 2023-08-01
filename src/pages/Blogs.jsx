import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Blog from "../components/blogs/blog/Blog";
import SearchBox from "../components/blogs/search/SearchBox";
import CategoryBox from "../components/blogs/category/CategoryBox";
import Banner from "../components/blogs/banner/Banner";
import LastBlogs from "../components/blogs/lastBlogs/LastBlogs";


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
        <div className="min-w-[25%] flex flex-col gap-5">
            <SearchBox/>
            <CategoryBox/>
            <Banner/>
            <LastBlogs/>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
