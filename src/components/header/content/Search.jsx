import React from 'react'
import {MdSearch} from "react-icons/md"

function Search() {
  return (
    <div className='bg-light rounded-xl relative p-3 border border-[#dfdfdf] flex-1 order-2 md:order-1 col-span-2'>
        <input type="text" placeholder='جستجو در بولور سیستم ...' className='rounded-m w-full h-full bg-transparent outline-0 placeholder:font-semibold'/>
        <button className='absolute left-2 top-0 bottom-0 text-3xl text-[#8e8c8c] bg-light'><MdSearch/></button>
    </div>
  )
}

export default Search