import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function ProductsSlider({ link, title, products }) {
  return (
    <div className="container m-auto rounded-md bg-white shadow-md my-6 productsSlider">
      <div className="flex items-center justify-between px-4 py-2">
        <span className="text-gray-4 text-lg">{title}</span>
        {link ? (
          <Link
            to={link}
            className="text-gray-link underline decoration-dotted"
          >
            مشاهده همه
          </Link>
        ) : null}
      </div>
      <Swiper
        slidesPerView={2}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper border-collapse"
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
      >
        {products.map((slide) => (
          <SwiperSlide>
            <div className="bg-white m-auto border border-b-0">
              <img
                src={slide.image}
                alt="SliderImage"
                width={"150px"}
                height={"150px"}
                className="m-auto my-5"
              />
              <div className="flex flex-col items-end p-4 gap-5">
                <p className="line-clamp-2 text-xs text-gray-4 text-justify">
                  {slide.info}
                </p>
                {slide.price ? (
                  <div className="text-base text-gray-9 flex items-center gap-1">
                    <span>{slide.price}</span>
                    <span>تومان</span>
                  </div>
                ) : null}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductsSlider;
