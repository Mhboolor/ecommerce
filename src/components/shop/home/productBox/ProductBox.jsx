import React from "react";
import { Link } from "react-router-dom";

function ProductBox() {
  const data = [
    {
      products: [
        { image: "./images/home/categoryBox/slider-1.jpg", link: "" },
        { image: "./images/home/categoryBox/slider-2.jpg", link: "" },
        { image: "./images/home/categoryBox/slider-3.jpg", link: "" },
        { image: "./images/home/categoryBox/slider-4.jpg", link: "" },
      ],
    },
    {
      products: [
        { image: "./images/home/categoryBox/slider-5.jpg", link: "" },
        { image: "./images/home/categoryBox/slider-6.jpg", link: "" },
        { image: "./images/home/categoryBox/slider-7.jpg", link: "" },
        { image: "./images/home/categoryBox/slider-8.jpg", link: "" },
      ],
    },
    {
      products: [
        { image: "./images/home/categoryBox/slider-9.jpg", link: "" },
        { image: "./images/home/categoryBox/slider-10.jpg", link: "" },
        { image: "./images/home/categoryBox/slider-11.jpg", link: "" },
        { image: "./images/home/categoryBox/slider-12.jpg", link: "" },
      ],
    },
    {
      products: [
        { image: "./images/home/categoryBox/slider-13.jpg", link: "" },
        { image: "./images/home/categoryBox/slider-14.jpg", link: "" },
        { image: "./images/home/categoryBox/slider-15.jpg", link: "" },
        { image: "./images/home/categoryBox/slider-16.png", link: "" },
      ],
    },
  ];

  return (
    <div className="container m-auto px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {data.map((box) => (
        <div className="bg-white shadow-md rounded-xl grid grid-cols-2">
          {box.products.map((item) => (
            <Link
              to={item.link}
              className="border flex items-center justify-center p-5"
            >
              <img src={item.image} alt="productImage" className="w-28 h-28" />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductBox;
