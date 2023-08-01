import React from 'react'
import HeroSlider from '../components/home/heroSlider/HeroSlider'
import CategorySlider from '../components/home/categorySlider/CategorySlider'
import OfferSlider from '../components/home/offer/OfferSlider'

function Home() {
  return (
    <div>
        <HeroSlider/>
        <CategorySlider/>
        <OfferSlider/>
    </div>
  )
}

export default Home