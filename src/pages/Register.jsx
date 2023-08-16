import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='container m-auto px-4 sm:p-0 mb-14'>
        <BreadCrumb prev={"صفحه اصلی"} prevLink={""} here={"ثبت نام"} hereLink={""}/>
        <div className='bg-[#fff] shadow-md rounded-2xl flex-col flex items-center justify-center text-center pt-3 pb-6 px-5 gap-4 w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 m-auto'>
            <p className='font-semibold border-b border-[#eff0f2] py-3 text-xl w-full'>ثبت نام</p>
            <form action="" className='flex flex-col gap-5 w-full'>
                <input type="text" id="UserNme" placeholder='نام کاربری را وارد کنید ...' className='border rounded-lg flex-1 outline-none py-2 px-4'/>
                <input type="email" id="Email" placeholder='ایمیل را وارد کنید ...' className='border rounded-lg flex-1 outline-none py-2 px-4'/>
                <input type="password" id="Pass" placeholder='رمز عبور را وارد کنید ...' className='border rounded-lg flex-1 outline-none py-2 px-4'/>
                <input type="password" id="RePass" placeholder='رمز عبور را تکرار کنید ...' className='border rounded-lg flex-1 outline-none py-2 px-4'/>
                <button className='bg-[#dc3545] border border-[#dc3545] rounded-lg py-2 flex-1 text-white'>ثبت نام</button>
            </form>
            <div className='flex items-start w-full'>
              <Link className=' text-blue-700' to={'/login'}>ورود !!!</Link>
            </div>
        </div>
    </div>
  )
}

export default Register