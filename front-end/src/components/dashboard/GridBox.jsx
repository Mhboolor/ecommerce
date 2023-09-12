import React from "react";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";

function GridBox() {
  return (
    <div className="text-2xl flex items-center justify-end gap-2">
      <button className="p-1 rounded border hover:border-btn-blue hover:bg-btn-blue hover:text-white hover:shadow-lg duration-150">
        <CiGrid2H />
      </button>
      <button className="p-1 rounded border hover:border-btn-blue hover:bg-btn-blue hover:text-white hover:shadow-lg duration-150">
        <CiGrid41 />
      </button>
    </div>
  );
}

export default GridBox;
