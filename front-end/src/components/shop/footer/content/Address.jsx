import React from 'react'
import {MdLocationPin , MdWhatsapp} from "react-icons/md"
import {AiOutlineInstagram , AiFillYoutube} from "react-icons/ai"
import {FaTelegram} from "react-icons/fa6"

function Address() {
  return (
    <div className='container m-auto flex items-center justify-around py-5 flex-col gap-4 px-4 sm:flex-row sm:px-0'>
        <div className='flex items-center justify-center gap-1 text-gray-2'>
            <MdLocationPin className=' text-xl'/>
            <p> تهران، خیابان ولیعصر، نرسیده به بزرگمهر، بن بست گلساز، پلاک ۲، طبقه منفی ۱، کد پستی ۱۴۱۶۹۴۴۱۳۹</p>
        </div>
        <div className='flex items-center justify-center divide-x divide-x-reverse divide-[#ddd]'>
            <div className='pl-3 font-semibold text-gray-9'>
                <p>(۰۲۱-۹۱۰۰۷۳۷۴)</p>
            </div>
            <div className='flex items-center justify-center gap-3 text-2xl pr-3'>
                <AiOutlineInstagram className='text-[#fb3958] cursor-pointer hover:scale-125 ease-in-out duration-200'/>
                <FaTelegram className='text-[#08c] cursor-pointer hover:scale-125 ease-in-out duration-200'/>
                <MdWhatsapp className='text-[#25d366] cursor-pointer hover:scale-125 ease-in-out duration-200'/>
                <AiFillYoutube className='text-[#ea1d5d] cursor-pointer hover:scale-125 ease-in-out duration-200'/>
            </div>
        </div>
    </div>
  )
}

export default Address