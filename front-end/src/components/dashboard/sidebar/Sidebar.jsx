import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Link } from "react-router-dom";

function Sidebar({ showMenu }) {
  const [menu, setMenu] = useState([
    {
      title: "مدیریت مخاطبین",
      link: "manage-contact",
      id: 1,
      isActive: false,
      subMenu: [],
    },
    {
      title: "مدیریت محصولات",
      link: "manage-products",
      id: 2,
      isActive: false,
      subMenu: [
        { title: "لیست محصولات", link: "" },
        { title: "محصولات مورد علاقه", link: "" },
        { title: "محصولات ذخیره شده", link: "" },
      ],
    },
    {
      title: "مدیریت بلاگ ها",
      link: "blogs",
      id: 3,
      isActive: false,
      subMenu: [
        { title: "لیست بلاگ ها", link: "blogs" },
        { title: "بلاگ های مورد علاقه", link: "blogs/favorit-blogs" },
        { title: "بلاگ های ذخیره شده", link: "blogs/book-blogs" },
      ],
    },
    {
      title: "مدیریت دسته بندی ها",
      link: "manage-categories",
      id: 4,
      isActive: false,
      subMenu: [],
    },
    {
      title: "مدیریت تیکت ها",
      link: "manage-tikets",
      id: 5,
      isActive: false,
      subMenu: [],
    },
    {
      title: "مدیریت کامنت ها",
      link: "manage-comments",
      id: 6,
      isActive: false,
      subMenu: [],
    },
    {
      title: "مدیریت دسترسی ها",
      link: "manage-permissions",
      id: 7,
      isActive: false,
      subMenu: [],
    },
    {
      title: "مدیریت نقش ها",
      link: "manage-roles",
      id: 8,
      isActive: false,
      subMenu: [],
    },
  ]);

  const dropHandler = (id) => {
    setMenu(
      menu.map((item) => {
        if (item.id === id) {
          return { ...item, isActive: !item.isActive };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <aside
      className={`bg-[#fff] z-40 border-l w-full max-w-xs md:w-72 p-5 flex-col gap-3 h-screen overflow-y-auto duration-150 absolute top-0 lg:static lg:top-auto lg:right-auto ${
        showMenu ? "right-0" : "-right-96"
      }`}
    >
      <p>داشبورد</p>
      <ul className="text-sm text-[#5e6278]">
        {menu
          ? menu.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between flex-col relative"
                onClick={() => dropHandler(item.id)}
              >
                <Link
                  to={item.link}
                  className="w-full flex items-center justify-between py-3 rounded-lg duration-150 hover:bg-menu-hover hover:text-menu-hover"
                >
                  <div className="flex items-center gap-1">
                    <BsDot className="text-xl" />
                    {item.title}
                  </div>
                  {item.subMenu.length > 0 &&
                    (item.isActive ? <MdArrowDropUp /> : <MdArrowDropDown />)}
                </Link>
                {item.subMenu && (
                  <ul
                    className={`flex-col w-full ${
                      item.isActive ? "flex" : "hidden"
                    }`}
                  >
                    {item.subMenu.map((sub, index) => (
                      <li key={index}>
                        <Link
                          to={sub.link}
                          className="w-full flex items-center gap-1 px-4 py-3 rounded-lg duration-150 hover:bg-menu-hover hover:text-menu-hover"
                        >
                          <BsDot className="text-xl" />
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))
          : null}
      </ul>
    </aside>
  );
}

export default Sidebar;
