import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";

import { EffectFlip } from "swiper/modules";

function ProductImage() {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        modules={[EffectFlip]}
        className="product-slider-image"
      >
        <SwiperSlide>
          <img
            src="./images/product/product-1-3.jpg"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/product/product-1-2.jpg"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/product/product-1-1.jpg"
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProductImage;
