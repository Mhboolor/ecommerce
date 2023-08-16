import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import axios from 'axios'

function Login() {

  const [number , setNumber] = useState("")


  const createUser = async () => {
    console.log(number);
    const res = await axios.post('http://127.0.0.1:1111/auth/get-otp' , number , { headers : {'content-type': 'application/x-www',} })
    console.log(res);

  }



  return (
    <div className='container m-auto px-4 sm:p-0 mb-14'>
        <BreadCrumb prev={"صفحه اصلی"} prevLink={""} here={"ورود"} hereLink={""}/>
        <div className='bg-[#fff] shadow-md rounded-2xl flex-col flex items-center justify-center text-center pt-3 pb-6 px-5 gap-4 w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 m-auto'>
            <p className='font-semibold border-b border-[#eff0f2] py-3 text-xl w-full'>ورود / ثبت نام سریع</p>
            <div className='text-sm text-[#212529] flex flex-col items-start w-full gap-1'>
              <p>کاربر گرامی، خوش آمدید.</p>
              <p>لطفا شماره موبایل خود را وارد نمایید</p>
            </div>
            <div action="" className='flex flex-col gap-5 w-full'>
                <input type="text" id="UserNme" placeholder='شماره تفلن خود را وارد کنید ...' className='border rounded-lg flex-1 outline-none py-2 px-4' value={number} onChange={e => setNumber(e.target.value)}/>
                <button className='bg-[#dc3545] border border-[#dc3545] rounded-lg py-2 flex-1 text-white' onClick={createUser}>ادامه</button>
            </div>
        </div>
    </div>
  )
}

export default Login