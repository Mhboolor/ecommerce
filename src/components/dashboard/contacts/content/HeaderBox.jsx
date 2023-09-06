import { MdSearch } from "react-icons/md";

function HeaderBox({ title, icon, placeholder , button}) {
  return (
    <div className="flex items-center justify-between text-lg flex-col gap-4 sm:flex-row">
      <div className="text-xl sm:text-2xl">{title}</div>
      <div className="flex items-center justify-between w-full flex-1 sm:justify-end gap-3 text-base sm:text-lg relative">
        <button className="flex items-center justify-center gap-1 text-white bg-btn-blue py-1 px-5 rounded-md hover:shadow-xl duration-150">
          {icon}
          {button}
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
            className="outline-none rounded-md duration-200 p-2 text-sm absolute scale-0 left-0 top-0 w-0 focus-visible:w-full focus-visible:scale-100 focus-visible:border-btn-blue
            sm:static sm:top-auto sm:left-auto sm:w-auto sm:focus-visible:w-auto sm:scale-100 z-20 border"
            placeholder={`جستجوی ${placeholder} ...`}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderBox;
