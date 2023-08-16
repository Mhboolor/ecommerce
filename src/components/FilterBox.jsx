import React from "react";

function FilterBox({ title, data }) {
  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
      <div>
        {data.map((item) => (
          <div className="flex items-center gap-2">
            <input type="checkbox" id="" className="" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterBox;
