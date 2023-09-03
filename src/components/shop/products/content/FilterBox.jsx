import React from "react";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function FilterBox({title , data}) {
  return (
    <div className="bg-white shadow-md rounded-xl">
      <div className="flex items-center justify-between border-b px-3 py-2">
        <span>{title}</span>
        <span>
          <MdKeyboardArrowDown />
        </span>
      </div>
      <div className="px-3 py-2 flex flex-col gap-2 max-h-60 overflow-y-auto">
        <div className="flex items-center text-[#616161] text-sm">
          <input type="checkbox" id="stocks" className="cursor-pointer" />
          <label htmlFor="stocks" className="cursor-pointer pr-2 flex-1">
            لنوو | Lenovo
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterBox;
