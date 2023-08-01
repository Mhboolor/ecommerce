import React from 'react'
import HeroSlider from '../components/home/heroSlider/HeroSlider'
import CategorySlider from '../components/home/categorySlider/CategorySlider'
import OfferSlider from '../components/home/offer/OfferSlider'
import LapTop from '../components/home/laptop/LapTop'
import UpdateBanner from '../components/home/updareBanner/UpdateBanner'

function Home() {
  return (
    <div>
        <HeroSlider/>
        <CategorySlider/>
        <OfferSlider/>
        <LapTop/>
        <UpdateBanner/>
    </div>
  )
}

export default Home