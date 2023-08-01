import React from 'react'
import HeroSlider from '../components/home/heroSlider/HeroSlider'
import CategorySlider from '../components/home/categorySlider/CategorySlider'
import OfferSlider from '../components/home/offer/OfferSlider'
import LapTop from '../components/home/laptop/LapTop'
import UpdateBanner from '../components/home/updareBanner/UpdateBanner'
import ProductBox from '../components/home/productBox/ProductBox'
import NewProduct from '../components/home/newProduct/NewProduct'
import BestSelling from '../components/home/bestselling/BestSelling'

function Home() {
  return (
    <div>
        <HeroSlider/>
        <CategorySlider/>
        <OfferSlider/>
        <LapTop/>
        <UpdateBanner/>
        <ProductBox/>
        <NewProduct/>
        <BestSelling/>
    </div>
  )
}

export default Home