import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

function OfferSlider() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat pt-5 pb-10 offer "
      style={{ backgroundImage: `url('./images/home/offer/offer_bg.svg')` }}
    >
      <div className="container m-auto px-4 sm:px-0">
        <div className="flex items-center justify-between gap-4 text-white text-lg mb-5">
          <span>خرید هیجانی</span>
          <span className="flex-1 border-b"></span>
          <Link>مشاهده همه</Link>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          grabCursor={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <div className="bg-white m-auto rounded-md">
              <img
                src="./images/home/offer/slider-1.jpg"
                alt="SliderImage"
                width={"115px"}
                height={"115px"}
                className="m-auto pb-4 pt-6"
              />
              <div className="flex flex-col items-end p-4">
                <div className="text-xs flex items-center justify-end gap-2">
                  <span className="text-gray-8 line-through">۱۳۹,۰۰۰,۰۰۰</span>
                  <span className="font-semibold bg-red-600 text-white px-2">
                    3%
                  </span>
                </div>
                <div className="flex items-center justify-end">
                  <p>۱۳۵,۹۰۰,۰۰۰ </p>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white m-auto rounded-md">
              <img
                src="./images/home/offer/slider-2.jpg"
                alt="SliderImage"
                width={"115px"}
                height={"115px"}
                className="m-auto pb-4 pt-6"
              />
              <div className="flex flex-col items-end p-4">
                <div className="text-xs flex items-center justify-end gap-2">
                  <span className="text-gray-8 line-through">۱۳۹,۰۰۰,۰۰۰</span>
                  <span className="font-semibold bg-red-600 text-white px-2">
                    3%
                  </span>
                </div>
                <div className="flex items-center justify-end">
                  <p>۱۳۵,۹۰۰,۰۰۰ </p>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white m-auto rounded-md">
              <img
                src="./images/home/offer/slider-3.jpg"
                alt="SliderImage"
                width={"115px"}
                height={"115px"}
                className="m-auto pb-4 pt-6"
              />
              <div className="flex flex-col items-end p-4">
                <div className="text-xs flex items-center justify-end gap-2">
                  <span className="text-gray-8 line-through">۱۳۹,۰۰۰,۰۰۰</span>
                  <span className="font-semibold bg-red-600 text-white px-2">
                    3%
                  </span>
                </div>
                <div className="flex items-center justify-end">
                  <p>۱۳۵,۹۰۰,۰۰۰ </p>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white m-auto rounded-md">
              <img
                src="./images/home/offer/slider-4.jpg"
                alt="SliderImage"
                width={"115px"}
                height={"115px"}
                className="m-auto pb-4 pt-6"
              />
              <div className="flex flex-col items-end p-4">
                <div className="text-xs flex items-center justify-end gap-2">
                  <span className="text-gray-8 line-through">۱۳۹,۰۰۰,۰۰۰</span>
                  <span className="font-semibold bg-red-600 text-white px-2">
                    3%
                  </span>
                </div>
                <div className="flex items-center justify-end">
                  <p>۱۳۵,۹۰۰,۰۰۰ </p>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white m-auto rounded-md">
              <img
                src="./images/home/offer/slider-5.jpg"
                alt="SliderImage"
                width={"115px"}
                height={"115px"}
                className="m-auto pb-4 pt-6"
              />
              <div className="flex flex-col items-end p-4">
                <div className="text-xs flex items-center justify-end gap-2">
                  <span className="text-gray-8 line-through">۱۳۹,۰۰۰,۰۰۰</span>
                  <span className="font-semibold bg-red-600 text-white px-2">
                    3%
                  </span>
                </div>
                <div className="flex items-center justify-end">
                  <p>۱۳۵,۹۰۰,۰۰۰ </p>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white m-auto rounded-md">
              <img
                src="./images/home/offer/slider-6.jpg"
                alt="SliderImage"
                width={"115px"}
                height={"115px"}
                className="m-auto pb-4 pt-6"
              />
              <div className="flex flex-col items-end p-4">
                <div className="text-xs flex items-center justify-end gap-2">
                  <span className="text-gray-8 line-through">۱۳۹,۰۰۰,۰۰۰</span>
                  <span className="font-semibold bg-red-600 text-white px-2">
                    3%
                  </span>
                </div>
                <div className="flex items-center justify-end">
                  <p>۱۳۵,۹۰۰,۰۰۰ </p>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white m-auto rounded-md">
              <img
                src="./images/home/offer/slider-7.jpg"
                alt="SliderImage"
                width={"115px"}
                height={"115px"}
                className="m-auto pb-4 pt-6"
              />
              <div className="flex flex-col items-end p-4">
                <div className="text-xs flex items-center justify-end gap-2">
                  <span className="text-gray-8 line-through">۱۳۹,۰۰۰,۰۰۰</span>
                  <span className="font-semibold bg-red-600 text-white px-2">
                    3%
                  </span>
                </div>
                <div className="flex items-center justify-end">
                  <p>۱۳۵,۹۰۰,۰۰۰ </p>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white m-auto rounded-md">
              <img
                src="./images/home/offer/slider-8.jpg"
                alt="SliderImage"
                width={"115px"}
                height={"115px"}
                className="m-auto pb-4 pt-6"
              />
              <div className="flex flex-col items-end p-4">
                <div className="text-xs flex items-center justify-end gap-2">
                  <span className="text-gray-8 line-through">۱۳۹,۰۰۰,۰۰۰</span>
                  <span className="font-semibold bg-red-600 text-white px-2">
                    3%
                  </span>
                </div>
                <div className="flex items-center justify-end">
                  <p>۱۳۵,۹۰۰,۰۰۰ </p>
                  <span>تومان</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default OfferSlider;
