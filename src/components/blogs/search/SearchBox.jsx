import React from "react";
import { MdSearch } from "react-icons/md";

function SearchBox() {
  return (
    <div className="shadow-md rounded-xl bg-white">
      <div className="border-b p-4">
        <h2 className="text-[#df1e2f] text-sm font-semibold">جستجو در وبلاگ</h2>
      </div>
      <div className="p-4">
        <div className="rounded-2xl border relative py-3 px-3">
          <input
            type="text"
            placeholder="جستجو در وبلاگ ..."
            className="bg-transparent w-full outline-0"
          />
          <button className="text-white text-xl bg-[#df1e2f] absolute left-0 bottom-0 top-0 rounded-l-2xl px-4">
            <MdSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBox;
