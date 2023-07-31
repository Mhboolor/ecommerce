import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation , Autoplay} from "swiper/modules";

function HeroSlider() {
  return (
    <div className="container m-auto heroSlider">
      <Swiper
        dir="ltr"
        navigation={true}
        loop={true}
        modules={[Navigation , Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./images/home/heroSlider/slider-1.jpg" alt="SliderImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/home/heroSlider/slider-2.jpg" alt="SliderImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/home/heroSlider/slider-3.jpg" alt="SliderImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/home/heroSlider/slider-4.jpg" alt="SliderImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/home/heroSlider/slider-5.jpg" alt="SliderImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/home/heroSlider/slider-6.jpg" alt="SliderImage" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/home/heroSlider/slider-7.jpg" alt="SliderImage" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
