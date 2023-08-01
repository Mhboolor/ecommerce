import React from 'react'
import ProductsSlider from '../../ProductsSlider'

function BestSelling() {

const products = [
    {image : "./images/home/bestSells/slider-1.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""},
    {image : "./images/home/bestSells/slider-2.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""},
    {image : "./images/home/bestSells/slider-3.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""},
    {image : "./images/home/bestSells/slider-4.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""},
    {image : "./images/home/bestSells/slider-5.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""},
    {image : "./images/home/bestSells/slider-6.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""},
    {image : "./images/home/bestSells/slider-7.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""},
    {image : "./images/home/bestSells/slider-8.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""},
    {image : "./images/home/bestSells/slider-9.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""},
    {image : "./images/home/bestSells/slider-10.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""},
    {image : "./images/home/bestSells/slider-11.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""},
    {image : "./images/home/bestSells/slider-12.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""},
    {image : "./images/home/bestSells/slider-13.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""},
    {image : "./images/home/bestSells/slider-14.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""},
    {image : "./images/home/bestSells/slider-15.jpg" , info : "منبع تغذیه گرین مدل Green GP300A-ECO" , price : "۱,۰۹۰,۰۰۰" , link : ""}
]


  return (
    <div className='container m-auto px-4 sm:px-0'>
        <ProductsSlider title={"پرفروش‌ترین محصولات"} link={"مشاهده همه"} products={products}/>
    </div>
  )
}

export default BestSelling