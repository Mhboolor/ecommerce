import React from 'react'

function Otp() {
  return (
    <div className='bg-[#fff] shadow-md rounded-2xl flex-col flex items-center justify-center text-center pt-3 pb-6 px-5 gap-4 w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 m-auto'>
            <p className='border-b border-[#eff0f2] py-3 text-xl w-full font-medium'>وارد کردن کد OTP</p>
            <div className='text-sm text-[#212529] flex flex-col items-start w-full gap-1'>
              <p>کاربر گرامی، خوش آمدید.</p>
              <p>لطفا کد ارسال شده به موبایل خود را وارد نمایید</p>
            </div>
            <div action="" className='flex flex-col gap-5 w-full'>
                <div className='grid grid-cols-6 gap-2 text-center'>
                    <input type="tel" maxLength={1} className='border rounded-lg flex-1 outline-none p-4 text-center focus-visible:border-b-[#007aff] focus-visible:border-b-2' autoComplete='off'/>
                    <input type="tel" maxLength={1} className='border rounded-lg flex-1 outline-none p-4 text-center focus-visible:border-b-[#007aff] focus-visible:border-b-2' autoComplete='off'/>
                    <input type="tel" maxLength={1} className='border rounded-lg flex-1 outline-none p-4 text-center focus-visible:border-b-[#007aff] focus-visible:border-b-2' autoComplete='off'/>
                    <input type="tel" maxLength={1} className='border rounded-lg flex-1 outline-none p-4 text-center focus-visible:border-b-[#007aff] focus-visible:border-b-2' autoComplete='off'/>
                    <input type="tel" maxLength={1} className='border rounded-lg flex-1 outline-none p-4 text-center focus-visible:border-b-[#007aff] focus-visible:border-b-2' autoComplete='off'/>
                    <input type="tel" maxLength={1} className='border rounded-lg flex-1 outline-none p-4 text-center focus-visible:border-b-[#007aff] focus-visible:border-b-2' autoComplete='off'/>
                </div>
                <button className='bg-[#dc3545] border border-[#dc3545] rounded-lg py-2 flex-1 text-white'>ورود</button>
            </div>
        </div>
  )
}

export default Otp