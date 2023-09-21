import React, { useState } from "react";
import { Login, Logo, Search, Menu, Number, Cart } from "./index";
import { MdMenu } from "react-icons/md";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="bg-white">
      <div
        className={`absolute left-0 top-0 w-full h-full bg-black/25 z-10 ${
          showMenu ? "flex" : "hidden"
        } md:hidden`}
        onClick={showMenuHandler}
      ></div>
      <div className="container m-auto gap-4 md:gap-10 py-3 grid grid-cols-3 md:grid-cols-5 px-2 md:px-0">
        <div className="flex items-center justify-start md:hidden">
          <button className="text-3xl" onClick={showMenuHandler}>
            <MdMenu />
          </button>
        </div>
        <Logo />
        <Search />
        <Number />
        <div className="flex items-center justify-end md:justify-evenly order-2 md:order-1 gap-2">
          <Login />
          <Cart />
        </div>
      </div>
      <Menu showMenu={showMenu} showMenuHandler={showMenuHandler} />
    </header>
  );
}

export default Header;
