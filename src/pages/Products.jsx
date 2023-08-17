import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Product from "../components/products/content/Product";
import Sorting from "../components/products/content/Sorting";
import Heading from "../components/products/content/Heading";
import FilterBox from "../components/products/content/FilterBox";



function Products() {
  return (
    <div className="container m-auto px-4 sm:p-0">
      <BreadCrumb
        prev={"صفحه اصلی"}
        prevLink={""}
        here={"محصولات"}
        hereLink={""}
      />
      <div className="flex items-start gap-8">
        <div className="w-1/4 flex flex-col gap-4">
          <FilterBox/>
          <FilterBox/>
        </div>
        <div className="bg-white rounded-xl flex flex-col gap-3">
          <Heading />
          <Sorting />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
