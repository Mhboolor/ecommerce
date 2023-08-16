import React from 'react'
import BreadCrumb from '../components/BreadCrumb'

function Products() {
  return (
    <div className='container m-auto px-4 sm:p-0'>
        <BreadCrumb prev={"صفحه اصلی"} prevLink={""} here={"محصولات"} hereLink={""}/>
        <div>
            <div className='w-1/3'></div>
            <div className='bg-white rounded-xl flex flex-col gap-3'>
                <div>لپ تاپ و قطعات لپتاپ</div>
                <div>
                    <button></button>
                    <button></button>
                </div>
                <div>
                    <div>
                        <button>گرانترین</button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <div>
                        <input type="checkbox" id="" className=''/>
                        <p></p>
                    </div>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Products