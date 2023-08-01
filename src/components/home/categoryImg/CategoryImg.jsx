import React from "react";
import { Link } from "react-router-dom";

function CategoryImg() {
  return (
    <div className="container m-auto grid grid-cols-2 sm:grid-cols-4 gap-5 my-6 px-4 sm:px-0">
      <Link>
        <img src="./images/home/categoryImg/img-1.jpg" alt="categoryImage" className="rounded-xl"/>
      </Link>
      <Link>
        <img src="./images/home/categoryImg/img-2.jpg" alt="categoryImage" className="rounded-xl"/>
      </Link>
      <Link>
        <img src="./images/home/categoryImg/img-3.jpg" alt="categoryImage" className="rounded-xl"/>
      </Link>
      <Link>
        <img src="./images/home/categoryImg/img-4.jpg" alt="categoryImage" className="rounded-xl"/>
      </Link>
    </div>
  );
}

export default CategoryImg;
