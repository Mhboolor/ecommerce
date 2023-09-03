import React from 'react'
import ProductsSlider from '../../../ProductsSlider'

function NewProduct() {

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
    <div className='container m-auto px-4 sm:px-0'>
    <ProductsSlider title={'جدیدترین محصولات'} products={products}/>
    </div>
  )
}

export default NewProduct