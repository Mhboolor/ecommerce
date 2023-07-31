import React from 'react'
import { MdPhone } from 'react-icons/md'

function Number() {
  return (
    <div className='flex items-center justify-end md:justify-center order-1 md:order-1'>
        <button className='text-2xl md:hidden'>
            <MdPhone/>
        </button>
        <p className='hidden md:flex'>۰۲۱-۹۱۰۰۷۳۷۴</p>
    </div>
  )
}

export default Number