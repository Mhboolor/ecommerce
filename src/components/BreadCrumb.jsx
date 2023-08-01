import React from 'react'
import { Link } from 'react-router-dom'
import {MdArrowBackIos} from "react-icons/md"

function BreadCrumb({prev , here , prevLink , hereLink}) {
  return (
    <div className='flex items-center gap-1 text-xs text-gray-7 py-3'>
        <Link to={prevLink}>{prev}</Link>
        <MdArrowBackIos className='text-[#6c757d]'/>
        <Link to={hereLink}>{here}</Link>
    </div>
  )
}

export default BreadCrumb