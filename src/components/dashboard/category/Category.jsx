import React, { useState } from "react";
import HeaderBox from "../HeaderBox";
import { MdAdd } from "react-icons/md";
import AddCategory from "./content/AddCategory";

function Category() {
  const [showAddBox, setShowAddBox] = useState(false);

  const ShowBoxHandler = () => {
    setShowAddBox((prev) => !prev);
  };
  return (
    <div>
      <HeaderBox
        title={"دسته بندی ها"}
        button={"اضافه کرده دسته بندی"}
        placeholder={"دسته بندی"}
        icon={<MdAdd />}
        ShowBoxHandler={ShowBoxHandler}
      />
      {
        showAddBox && <AddCategory showAddBox={showAddBox} ShowBoxHandler={ShowBoxHandler} />
      }
      
    </div>
  );
}

export default Category;
