import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function Blogs() {
  return (
    <div className="container m-auto rounded-md bg-white shadow-md my-6 productsSlider">
      <div className="flex items-center justify-between px-4 py-2">
        <span className="text-gray-4 text-lg">مقالات</span>
        <Link className="text-gray-link underline decoration-dotted" to={"/blogs"}>
          مشاهده وبلاگ
        </Link>
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
        <SwiperSlide>
          <div className="bg-white border rounded-lg m-4">
            <img
              src="./images/home/blogs/slider-1.jpg"
              alt="SliderImage"
              width={"150px"}
              height={"150px"}
              className="m-auto w-full rounded-t-md"
            />
            <div className="flex flex-col items-end p-4 gap-5">
              <p className="line-clamp-2 text-xs text-gray-4 text-center">
                اهنمای خرید مانیتور گیمینگ همراه با تصاویر
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white border rounded-lg m-4">
            <img
              src="./images/home/blogs/slider-2.jpg"
              alt="SliderImage"
              width={"150px"}
              height={"150px"}
              className="m-auto w-full rounded-t-md"
            />
            <div className="flex flex-col items-end p-4 gap-5">
              <p className="line-clamp-2 text-xs text-gray-4 text-center">
                اهنمای خرید مانیتور گیمینگ همراه با تصاویر
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white border rounded-lg m-4">
            <img
              src="./images/home/blogs/slider-3.jpg"
              alt="SliderImage"
              width={"150px"}
              height={"150px"}
              className="m-auto w-full rounded-t-md"
            />
            <div className="flex flex-col items-end p-4 gap-5">
              <p className="line-clamp-2 text-xs text-gray-4 text-center">
                اهنمای خرید مانیتور گیمینگ همراه با تصاویر
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white border rounded-lg m-4">
            <img
              src="./images/home/blogs/slider-4.jpg"
              alt="SliderImage"
              width={"150px"}
              height={"150px"}
              className="m-auto w-full rounded-t-md"
            />
            <div className="flex flex-col items-end p-4 gap-5">
              <p className="line-clamp-2 text-xs text-gray-4 text-center">
                اهنمای خرید مانیتور گیمینگ همراه با تصاویر
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white border rounded-lg m-4">
            <img
              src="./images/home/blogs/slider-5.jpg"
              alt="SliderImage"
              width={"150px"}
              height={"150px"}
              className="m-auto w-full rounded-t-md"
            />
            <div className="flex flex-col items-end p-4 gap-5">
              <p className="line-clamp-2 text-xs text-gray-4 text-center">
                اهنمای خرید مانیتور گیمینگ همراه با تصاویر
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white border rounded-lg m-4">
            <img
              src="./images/home/blogs/slider-6.jpg"
              alt="SliderImage"
              width={"150px"}
              height={"150px"}
              className="m-auto w-full rounded-t-md"
            />
            <div className="flex flex-col items-end p-4 gap-5">
              <p className="line-clamp-2 text-xs text-gray-4 text-center">
                اهنمای خرید مانیتور گیمینگ همراه با تصاویر
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white border rounded-lg m-4">
            <img
              src="./images/home/blogs/slider-7.jpg"
              alt="SliderImage"
              width={"150px"}
              height={"150px"}
              className="m-auto w-full rounded-t-md"
            />
            <div className="flex flex-col items-end p-4 gap-5">
              <p className="line-clamp-2 text-xs text-gray-4 text-center">
                اهنمای خرید مانیتور گیمینگ همراه با تصاویر
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white border rounded-lg m-4">
            <img
              src="./images/home/blogs/slider-8.jpg"
              alt="SliderImage"
              width={"150px"}
              height={"150px"}
              className="m-auto w-full rounded-t-md"
            />
            <div className="flex flex-col items-end p-4 gap-5">
              <p className="line-clamp-2 text-xs text-gray-4 text-center">
                اهنمای خرید مانیتور گیمینگ همراه با تصاویر
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Blogs;
