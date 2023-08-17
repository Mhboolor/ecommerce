import React from "react";
import {LuLayoutGrid , LuLayoutList} from "react-icons/lu"

function Heading() {
  return (
    <div className="flex items-center justify-between border-b p-3">
      <div className="text-[#1aa878]">لپ تاپ و قطعات لپتاپ</div>
      <div className="flex items-center gap-2">
        <button className="border p-1 rounded-md hover:bg-red-600 hover:text-white font-bold">
          <LuLayoutGrid />
        </button>
        <button className="border p-1 rounded-md hover:bg-red-600 hover:text-white font-bold">
          <LuLayoutList />
        </button>
      </div>
    </div>
  );
}

export default Heading;
