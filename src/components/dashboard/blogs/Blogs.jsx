import React from "react";
import HeaderBox from "../HeaderBox";
import { MdOutlineStickyNote2 } from "react-icons/md";

function Blogs() {
  return (
    <div className="flex flex-col gap-5">
      <HeaderBox
        title={"بلاگ ها"}
        placeholder={"بلاگ"}
        icon={<MdOutlineStickyNote2 />}
        button={"اضافه کردن بلاگ"}
      />
    </div>
  );
}

export default Blogs;
