import React from "react";
import { MdSunny } from "react-icons/md";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="flex items-center gap-5">
      <div className="text-xl">
        <MdSunny />
      </div>
      <ul className="flex items-center gap-2">
        <li>
          <Link>
            <img
              src="./images/dashboard/user/user.jpeg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </Link>
          <ul></ul>
        </li>
        <li className="hidden sm:flex">بولوری</li>
      </ul>
    </div>
  );
}

export default Admin;
