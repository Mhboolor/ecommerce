import React from "react";
import {
  HeroSlider,
  CategorySlider,
  OfferSlider,
  LapTop,
  UpdateBanner,
  ProductBox,
  CategoryImg,
  NewProduct,
  BestSelling,
  SsdBanner,
  Blogs,
} from "../../components/shop/home/index";

function Home() {
  return (
    <div>
      <HeroSlider />
      <CategorySlider />
      <OfferSlider />
      <LapTop />
      <UpdateBanner />
      <ProductBox />
      <CategoryImg />
      <NewProduct />
      <BestSelling />
      <SsdBanner />
      <Blogs />
    </div>
  );
}

export default Home;
