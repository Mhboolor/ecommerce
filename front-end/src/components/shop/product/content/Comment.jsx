import React from 'react'

function Comment() {
  return (
    <div className='w-full flex-1 flex flex-col gap-4'>
      <div className='border-b pb-3'>
        <p className='text-[#df1e2f] text-base font-semibold'>دیدگاه های کاربران</p>
      </div>
      <div className='bg-[#f5f5f5] rounded-lg p-4 flex flex-col gap-4'>
        <div className='bg-[#fafafa] py-2 px-4 text-[#474747] text-base font-semibold rounded-lg border border-[#eee]'>
          <p>دیدگاه شما</p>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-8 flex-col md:flex-row'>
            <div className='flex-1 flex flex-col gap-1'>
              <label htmlFor="FirstComment" className='text-sm text-[#212529]'>نام</label>
              <input type="text" name="" id="FirstComment" className='border border-[#ced4da] rounded-md py-1 px-2'/>
            </div>
            <div className='flex-1 flex flex-col gap-1'>
              <label htmlFor="LastComment" className='text-sm text-[#212529]'>نام خانوادگی</label>
              <input type="text" name="" id="LastComment" className='border border-[#ced4da] rounded-md py-1 px-2'/>
            </div>
            <div className='flex-1 flex flex-col gap-1'>
              <label htmlFor="EmailComment" className='text-sm text-[#212529]'>آدرس ایمیل</label>
              <input type="text" name="" id="EmailComment" className='border border-[#ced4da] rounded-md py-1 px-2'/>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="TextComment" className='text-sm text-[#212529]'>نظر شما</label>
            <textarea name="" id="TextComment" cols="30" rows="10" className='h-36 border border-[#ced4da]'></textarea>
          </div>
          <div>
            <button className='bg-[#28a745] border border-[#28a745] text-white rounded-md py-2 px-3 text-sm'>ارسال</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment