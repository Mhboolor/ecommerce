import React from 'react'

function TechnicalInfo() {
  return (
    <div className='flex flex-col gap-4 w-full flex-1'>
        <div className='border-b'>
            <p className='border-b-2 border-[#df1e2f]'>مشخصات فنی</p>
        </div>
        <div className='w-full flex flex-col gap-2 flex-1'>
            <div>
                <p className='text-md font-bold text-[#212529]'>مشخصات فیزیکی :</p>
            </div>
            <table className='w-full'>
              <tbody className='text-[13px] text-[#636363] w-full'>
                <tr className='w-full'>
                  <td className='bg-[#f5f5f5] border-[3px] border-[#fff] py-2 px-3 w-1/5 rounded-md'>ابعاد</td>
                  <td className='bg-[#f5f5f5] border-[3px] border-[#fff] py-2 px-3 w-4/5 rounded-md'>358x235x18 میلی‌متر</td>
                </tr>
              </tbody>
            </table>
        </div>
    </div>
  )
}

export default TechnicalInfo