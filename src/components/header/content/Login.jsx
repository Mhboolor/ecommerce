import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center justify-center">
      <Link className="text-2xl flex md:hidden" to={'/login'}>
        <AiOutlineUser />
      </Link>
      <div className="items-center justify-center gap-1 hidden md:flex">
        <AiOutlineUser className="text-lg" />
        <Link className="items-center gap-1 hidden md:flex" to={"/login"}>ورود</Link>
        <span className="text-gray-2">|</span>
        <Link className="items-center gap-1 hidden md:flex" to={"/register"}>ثبت نام</Link>
      </div>
    </div>
  );
}

export default Login;
