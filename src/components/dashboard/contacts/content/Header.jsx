import { AiOutlineUser } from "react-icons/ai";
import { CiGrid41, CiGrid2H } from "react-icons/ci";
import { MdSearch } from "react-icons/md";

function Header() {
  return (
    <div className="flex items-center justify-between text-lg relative">
      <div>مخاطبین</div>
      <div className="flex items-center gap-3 text-base sm:text-lg">
        <button className="flex items-center justify-center gap-1">
          <AiOutlineUser className="text-xl" />
          اضافه کردن
        </button>
        <button>
          <CiGrid41 className="text-xl" />
        </button>
        <button>
          <CiGrid2H className="text-xl" />
        </button>
        <div className="flex items-center">
          <label
            htmlFor="search"
            className="flex sm:hidden text-xl cursor-pointer"
          >
            <MdSearch />
          </label>
          <input
            id="search"
            type="text"
            className="outline-none rounded duration-150 px-2 py-1 text-sm absolute scale-0 left-0 top-0 w-0 focus-visible:w-full focus-visible:scale-100 sm:static sm:top-auto sm:left-auto sm:w-auto sm:focus-visible:w-auto sm:scale-100"
            placeholder={`جستجوی ${"مخاطب"} ...`}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
