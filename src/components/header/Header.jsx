import React from "react";
import { Login, Logo, Search, Menu, Number, Cart } from "./index";
import { MdMenu } from "react-icons/md";

function Header() {
  return (
    <header className="bg-white">
      <div className="container m-auto gap-4 md:gap-10 py-3 grid grid-cols-3 md:grid-cols-5 px-2 md:px-0">
        <div className="flex items-center justify-start md:hidden">
          <button className="text-3xl"><MdMenu/></button>
        </div>
        <Logo />
        <Search />
        <Number />
        <div className="flex items-center justify-end md:justify-evenly order-2 md:order-1 gap-2">
          <Login />
          <Cart />
        </div>
      </div>
      <Menu/>
    </header>
  );
}

export default Header;
