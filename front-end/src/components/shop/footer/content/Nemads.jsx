import React from 'react'

function Nemads() {
  return (
    <div className='grid grid-cols-2 gap-5 sm:grid-cols-4 md:gap-0 justify-items-center'>
        <div className='rounded-md h-[115px] w-[90px] bg-[##feda00] cursor-pointer'>
            <img src="images/footer/post-logo.png" alt="" className='h-full'/>
        </div>
        <div className='rounded-md h-[115px] w-[90px] bg-[#dfdfdf] p-2 cursor-pointer'>
            <img src="images/footer/tipax.png" alt="" className='h-full w-20'/>
        </div>
        <div className='rounded-md h-[115px] w-[90px] bg-[#dfdfdf] p-2 cursor-pointer'>
            <img src="images/footer/etehadie.svg" alt="" className='h-full w-20'/>
        </div>
        <div className='rounded-md h-[115px] w-[90px] bg-[#dfdfdf] p-2 cursor-pointer'>
            <img src="images/footer/samandehi.png" alt="" className='h-full w-20'/>
        </div>
    </div>
  )
}

export default Nemads