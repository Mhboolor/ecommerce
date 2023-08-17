import React from "react";

import { Link } from 'react-router-dom'

function Product() {
  return (
    <Link className="flex flex-col items-center justify-center gap-5 border px-4 pt-6 pb-5">
      <div>
        <img src="./images/shop/power-1.webp" alt="product-Images" />
      </div>
      <p className="text-[#555] text-xs text-center my-5">
        پاور 850 وات کولرمستر V850 GOLD-V2 WHITE EDITION Full Modular
      </p>
      <div className="flex items-center gap-1 text-[#444444] text-base font-bold w-full justify-end">
        <p>۷,۳۰۰,۰۰۰</p>
        <p>تومان</p>
      </div>
    </Link>
  );
}

export default Product;

