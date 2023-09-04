import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { Link } from "react-router-dom";

function Sidebar() {
  const [menu, setMenu] = useState([
    {
      title: "پیشخوان",
      link: "",
      id: 1,
      isActive: false,
      subMenu: [
        { title: "مدیریت منو", link: "/manage-menu" },
        { title: "مدیریت تخفیف ها", link: "/manage-off" },
        { title: "مدیریت منو", link: "/menu" },
      ],
    },
    {
      title: "wtf",
      link: "",
      id: 2,
      isActive: false,
      subMenu: [
        { title: "مدیریت منو", link: "/manage-menu" },
        { title: "مدیریت تخفیف ها", link: "/manage-off" },
        { title: "مدیریت منو", link: "/menu" },
      ],
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
    <aside className="bg-[#fff] border-l w-full max-w-xs p-5 flex flex-col gap-3 h-screen overflow-y-auto">
      <p>داشبورد</p>
      <ul className="text-sm text-[#5e6278]">
        {menu
          ? menu.map((item) => (
              <li
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
                  {item.subMenu && item.isActive ? (
                    <MdArrowDropUp />
                  ) : (
                    <MdArrowDropDown />
                  )}
                </Link>
                {item.subMenu && (
                  <ul
                    className={`flex-col w-full ${
                      item.isActive ? "flex" : "hidden"
                    }`}
                  >
                    {item.subMenu.map((sub) => (
                      <li>
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
