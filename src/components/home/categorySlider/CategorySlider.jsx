import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation} from "swiper/modules";

function CategorySlider() {
  return (
    <div className="container m-auto categorySlider my-6">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        grabCursor={true}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
          }}
      >
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-1.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">پردازنده</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-2.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">لپ تاپ</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-3.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">هارد (ssd)</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-4.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">کیبورد</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-5.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">فن</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-6.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">موس</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-7.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">پاور</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-8.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">رم</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-9.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">موبایل</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-10.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">هارد (hdd)</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-11.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">کیس</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-12.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">کارت گرافیم</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-13.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">مادربورد</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-14.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">مانیتور</p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/home/categorySlider/slider-15.png"
            alt="SliderImage"
            width={'115px'}
            height={'115px'}
            className="m-auto"
          />
          <p className="text-xs text-gray-7 text-center">هارد اکسترنال</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CategorySlider;
