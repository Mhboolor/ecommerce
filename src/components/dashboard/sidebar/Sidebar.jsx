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
      className={`bg-[#fff] border-l w-full max-w-[280px] p-5 flex-col gap-3 h-screen overflow-y-auto duration-150 absolute top-0 md:static md:top-auto md:right-auto ${showMenu ? "right-0" : "-right-96"}`}
    >
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
                  {item.subMenu.length > 0 &&
                    (item.isActive ? <MdArrowDropUp /> : <MdArrowDropDown />)}
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
