import React from "react";
import { RiMenu5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex items-center gap-5">
      <button className="text-2xl bg-gray-200 p-1 rounded-md text-gray-6 duration-150 hover:bg-gray-300">
        <RiMenu5Line/>
      </button>
      <Link>
        <img src="./images/dashboard/logo.png" alt="" className=" w-36 h-7"/>
      </Link>
    </div>
  );
}

export default Logo;
