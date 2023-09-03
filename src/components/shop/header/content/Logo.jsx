import React from 'react'

function Logo() {
  return (
    <div className='flex items-center justify-center order-1 md:order-1'>
        <img src="./images/logo-sm.png" alt="Logo" className='flex md:hidden w-40 h-8 md:h-12'/>
        <img src="./images/logo-xl.png" alt="Logo" className='hidden md:flex w-40 h-8 md:h-12'/>
    </div>
  )
}

export default Logo