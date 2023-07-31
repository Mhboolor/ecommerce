import React from "react";

function IconList() {
  return (
    <div className="bg-white pb-4">
      <div className="container m-auto flex items-center justify-evenly">
        <div className="flex flex-col items-center justify-center cursor-pointer text-sm group">
          <img src="./images/footer/guarante.png" alt="" className=" w-20 h-20"/>
          <p className=" group-hover:text-red-500 duration-100 ease-in-out">ضمانت اصالت کالا</p>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer text-sm group">
          <img src="./images/footer/support.png" alt="" className=" w-20 h-20"/>
          <p className=" group-hover:text-red-500 duration-100 ease-in-out">پشتیبانی بر خط</p>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer text-sm group">
          <img src="./images/footer/send.png" alt="" className=" w-20 h-20"/>
          <p className=" group-hover:text-red-500 duration-100 ease-in-out">ارسال به کل کشور</p>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer text-sm group">
          <img src="./images/footer/pay.png" alt="" className=" w-20 h-20"/>
          <p className=" group-hover:text-red-500 duration-100 ease-in-out">پرداخت در محل (تهران)</p>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer text-sm group">
          <img src="./images/footer/refund.png" alt="" className=" w-20 h-20"/>
          <p className=" group-hover:text-red-500 duration-100 ease-in-out">۷ روز ضمانت بازگشت وجه</p>
        </div>
      </div>
    </div>
  );
}

export default IconList;
