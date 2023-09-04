import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

function Search() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="flex flex-1 justify-center sm:justify-normal">
      <div className="flex items-center justify-center border rounded md:w-2/3 lg:w-1/3">
        <label className="p-2" htmlFor="search" onClick={() => setShowSearch(prev => !prev)}>
          <MdSearch className="text-2xl text-gray-400" />
        </label>
        <input
          id="search"
          type="text"
          placeholder="جستجو ..."
          className={`h-full flex-1 py-2 outline-none duration-200 ${showSearch ? "w-full" : "w-0"} sm:w-full`}
        />
      </div>
    </div>
  );
}

export default Search;
