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
import Cart from "../../components/shop/cart/Cart";

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
      <Cart/>
    </div>
  );
}

export default Home;
