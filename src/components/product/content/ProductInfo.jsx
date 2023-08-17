import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function ProductInfo() {
  return (
    <div className='flex-1 px-4 py-2 flex flex-col gap-2'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1 font-medium text-sm text-[#067d62]'>
                <Link>ایسوس</Link>
                <span>/</span>
                <Link>لپ تاپ ایسوس</Link>
            </div>
            <button className='text-2xl text-[#212529]'><FiHeart/></button>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-base font-bold text-[#000] tracking-wide'>لپ تاپ ایسوس 15.6 اینچی مدل X515EP پردازنده Core i5 1135G7 رم 16GB حافظه 1TB SSD گرافیک 2GB</p>
            <p className='text-[#899696] text-sm tracking-wider'>ASUS X515EP Core i5 1135G7 16GB 1TB SSD 2GB MX330 FHD Laptop</p>
        </div>
        <div>
            <div></div>
        </div>
    </div>
  )
}

export default ProductInfo