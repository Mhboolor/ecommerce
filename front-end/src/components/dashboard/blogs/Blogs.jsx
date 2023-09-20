import React, { useState } from "react";
import HeaderBox from "../HeaderBox";
import { MdOutlineStickyNote2 } from "react-icons/md";
import GridBox from "../GridBox";
import AddBlog from "./content/AddBlog";

function Blogs() {
  
  const [showAddBox, setShowAddBox] = useState(false);

  const ShowBoxHandler = () => {
    setShowAddBox((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-5">
      <HeaderBox
        title={"بلاگ ها"}
        placeholder={"بلاگ"}
        icon={<MdOutlineStickyNote2 />}
        button={"اضافه کردن بلاگ"}
        ShowBoxHandler={ShowBoxHandler}
      />
      <GridBox />
      {showAddBox && (
        <AddBlog showAddBox={showAddBox} ShowBoxHandler={ShowBoxHandler} />
      )}
    </div>
  );
}

export default Blogs;
