import React from 'react'
import Nemads from './Nemads'
import { Link } from 'react-router-dom'

function Menu() {

    const menu = [
        {title : "بولور سیستم" , items : [
            {name : "درباره بولور سیستم" , link : ""},
            {name : "مجوز و گواهینامه ها" , link : ""},
            {name : "استخدام در بولور سیستم" , link : ""},
            {name : "قوانین فروشگاه" , link : ""},
            {name : "تماس با ما" , link : ""},
        ]},
        {title : "راهنمای خرید" , items : [
            {name : "نحوه ثبت سفارش" , link : ""},
            {name : "تخفیف‌های تاپ رایان" , link : ""},
            {name : "مقالات تاپ رایان" , link : ""},
            {name : "سوالات متداول" , link : ""},
            {name : "ورود به سایت تاپ رایان" , link : ""},
        ]},
        {title : "دسته‌بندی‌ها" , items : [
            {name : "مانیتور" , link : ""},
            {name : "لپ تاب" , link : ""},
            {name : "کیس" , link : ""},
            {name : "قطعات" , link : ""},
        ]},
    ]
    

  return (
    <div className='bg-white py-5'>
        <div className='container m-auto flex items-center justify-between flex-col gap-5 md:flex-row'>
            <div className='grid grid-cols-2 sm:grid-cols-3 flex-1 gap-4 text-center sm:text-start'>
                {
                    menu.map(item => (
                        <ul>
                            <li className='text-gray-9 text-base'>{item.title}</li>
                            {
                                item.items.map(sub => (
                                    <li><Link to={sub.link} className='text-sm text-gray-3'>{sub.name}</Link></li>
                                ))
                            }
                        </ul>
                    ))
                }
            </div>
            <div className='flex-1'>
                <Nemads/>
            </div>
        </div>
    </div>
  )
}

export default Menu