import React from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

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
    <div className="sm:border-t border-[#e2e2e2] shadow-sm">
      <nav className="container m-auto">
        <ul className="flex items-center justify-around relative">
          {menu.map((item) => (
            <li className="text-gray-4 group">
              <Link to={item.link} className="font-semibold text-sm flex items-center py-3 hover:text-[#df1e2f] hover:border-b hover:border-b-[#df1e2f]">
                {item.title}
                {
                  item.subMenu.length ? <BiChevronDown className="text-[#ccc]"/> : null
                }
              </Link>
              {
                item.subMenu.length ? (
                  <ul className="hidden items-center justify-around gap-4 px-4 rounded text-xs absolute right-0 top-full bg-[#fff] shadow-sm w-full group-hover:flex">
                    {
                      item.subMenu.map(subItem => (
                        <li><Link to={subItem.link} className="flex py-3 hover:text-[#df1e2f] font-semibold">{subItem.title}</Link></li>
                      ))
                    }
                  </ul>
                ) : null
              }
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
