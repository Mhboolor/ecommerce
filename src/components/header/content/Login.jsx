import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='flex items-center justify-center'>
        <button className="text-2xl flex md:hidden"><AiOutlineUser/></button>
      <Link className="items-center gap-1 hidden md:flex">
        <AiOutlineUser className="text-lg"/>
        ورود
        <span className="text-gray-2">|</span>
        ثبت نام
      </Link>
    </div>
  );
}

export default Login;
