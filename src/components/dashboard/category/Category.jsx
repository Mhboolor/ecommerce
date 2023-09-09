import React, { useState } from "react";
import HeaderBox from "../HeaderBox";
import { MdAdd } from "react-icons/md";
import AddCategory from "./content/AddCategory";
import CategoryList from "./content/CategoryList";

function Category() {
  const [showAddBox, setShowAddBox] = useState(false);

  const ShowBoxHandler = () => {
    setShowAddBox((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-5">
      <HeaderBox
        title={"دسته بندی ها"}
        button={"اضافه کرده دسته بندی"}
        placeholder={"دسته بندی"}
        icon={<MdAdd />}
        ShowBoxHandler={ShowBoxHandler}
      />
      {showAddBox && (
        <AddCategory showAddBox={showAddBox} ShowBoxHandler={ShowBoxHandler} />
      )}
      <CategoryList />
    </div>
  );
}

export default Category;
