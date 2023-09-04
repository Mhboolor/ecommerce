import React from "react";
import { Admin, Logo, Search } from "./content";

function Header() {
  return (
    <header className="flex items-center justify-between gap-5">
      <Logo />
      <Search />
      <Admin />
    </header>
  );
}

export default Header;
