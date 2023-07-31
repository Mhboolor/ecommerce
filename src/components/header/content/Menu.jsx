import React from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { MdClose } from "react-icons/md";

function Menu() {
  const menu = [
    {
      title: "قطعات کامپیوتر",
      link: "",
      subMenu: [
        { title: "پردازنده", link: "" },
        { title: "مادربرد", link: "" },
        { title: "کارت گرافیک", link: "" },
        { title: "مانیتور", link: "" },
        { title: "رم", link: "" },
        { title: "کارت صدا", link: "" },
        { title: "هارد اینترنال", link: "" },
        { title: "کیس", link: "" },
        { title: "پاور", link: "" },
        { title: "فن", link: "" },
        { title: "اس اس دی", link: "" },
      ],
    },
    {
      title: "لپ تاپ",
      link: "",
      subMenu: [
        { title: "لپ تاپ", link: "" },
        { title: "مک بوک", link: "" },
        { title: "قطعات لپ تاپ", link: "" },
        { title: "لوازم جانبی لپ تاپ", link: "" },
      ],
    },
    { title: "مانیتور", link: "", subMenu: [] },
    {
      title: "کیس",
      link: "",
      subMenu: [
        { title: "کیس آماده", link: "" },
        { title: "مینی کیس", link: "" },
        { title: "کیس آل این وان", link: "" },
      ],
    },
  ];

  return (
    <div className="absolute right-0 top-0 max-w-xs w-full z-50 h-screen bg-white sm:border-t sm:border-[#e2e2e2] sm:shadow-sm sm:h-auto sm:relative sm:w-auto sm:max-w-none">
      <div className="flex items-center justify-between p-2 text-2xl sm:hidden">
        <img src="./images/logo-sm.png" alt="logo" className="w-28 h-6"/>
        <button>
          <MdClose />
        </button>
      </div>
      <nav className="container m-auto">
        <ul className="flex flex-col h-full w-full justify-around p-4 sm:flex-row sm:relative sm:items-center">
          {menu.map((item) => (
            <li className="text-gray-4 group relative sm:static">
              <Link
                to={item.link}
                className="text-base flex items-center py-3 hover:text-[#df1e2f] hover:border-b hover:border-b-[#df1e2f]"
              >
                {item.title}
                {item.subMenu.length ? (
                  <BiChevronDown className="text-[#ccc]" />
                ) : null}
              </Link>
              {item.subMenu.length ? (
                <ul className="hidden sm:items-center justify-around gap-4 px-4 rounded text-xs bg-[#fff] shadow-sm w-full flex-col group-hover:flex sm:group-hover:flex-row sm:absolute sm:right-0">
                  {item.subMenu.map((subItem) => (
                    <li>
                      <Link
                        to={subItem.link}
                        className="flex py-3 text-sm hover:text-[#df1e2f]"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
