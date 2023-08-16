import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import ProductsSlider from '../components/ProductsSlider'

function Product() {

  const products = [
    {image : "./images/home/newProduct/slider-1.jpg" , info : "هدفون بی سیم طرح سونی مدل WH-XB910N", price : "53,000" , link : ""},
    {image : "./images/home/newProduct/slider-2.jpg" , info : "هدفون بی سیم طرح سونی مدل WH-XB910N", price : "53,000" , link : ""},
    {image : "./images/home/newProduct/slider-3.jpg" , info : "هدفون بی سیم طرح سونی مدل WH-XB910N", price : "53,000" , link : ""},
    {image : "./images/home/newProduct/slider-4.jpg" , info : "هدفون بی سیم طرح سونی مدل WH-XB910N", price : "53,000" , link : ""},
    {image : "./images/home/newProduct/slider-5.jpg" , info : "هدفون بی سیم طرح سونی مدل WH-XB910N", price : "53,000" , link : ""},
    {image : "./images/home/newProduct/slider-6.jpg" , info : "هدفون بی سیم طرح سونی مدل WH-XB910N", price : "53,000" , link : ""},
    {image : "./images/home/newProduct/slider-7.jpg" , info : "هدفون بی سیم طرح سونی مدل WH-XB910N", price : "53,000" , link : ""},
  ]

  return (
    <div className='container m-auto px-4 sm:p-0'>
      <BreadCrumb prev={"صفحه اصلی"} prevLink={""} here={"محصول"} hereLink={""}/>
      <div></div>
      <div></div>
      <div></div>
      <div>
      <ProductsSlider title={'کالاهای مرتبط'} products={products}/>
      </div>
    </div>
  )
}

export default Product