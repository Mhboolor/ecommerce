import React from "react";
import { MdSunny } from "react-icons/md";
import { ImExit, ImProfile } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../../../future/dashboard/login/loginSlice";

function Admin() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOutHandler = () => {
    dispatch(logOut())
    navigate("/dashboard/login")
  }

  return (
    <div className="flex items-center gap-5">
      <div className="text-xl">
        <MdSunny />
      </div>
      <ul className="flex items-center gap-2">
        <li className=" relative group">
          <Link>
            <img
              src="./images/dashboard/user/user.jpeg"
              alt=""
              className="w-10 h-10 rounded-full"
            />
          </Link>
          <ul className="flex-col text-sm bg-white shadow absolute top-full left-0 z-50 rounded hidden group-hover:flex">
            <li>
              <Link className="px-3 py-2 hover:bg-gray-100 flex items-center justify-center w-full gap-2">
                پروفایل
                <ImProfile />
              </Link>
            </li>
            <li>
              <button className="px-3 py-2 hover:bg-gray-100 flex items-center justify-center w-full gap-2" onClick={logOutHandler}>
                خروج
                <ImExit />
              </button>
            </li>
          </ul>
        </li>
        <li className="hidden sm:flex">بولوری</li>
      </ul>
    </div>
  );
}

export default Admin;
