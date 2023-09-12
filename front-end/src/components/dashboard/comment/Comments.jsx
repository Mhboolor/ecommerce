import React, { useState } from "react";
import HeaderBox from "../HeaderBox";
import AddComment from "./content/AddComment";
import { MdComment } from "react-icons/md";

function Comments() {
  const [showAddBox, setShowAddBox] = useState(false);

  const ShowBoxHandler = () => {
    setShowAddBox((prev) => !prev);
  };

  return (
    <div>
      <HeaderBox
        title={"کامنت ها"}
        button={"اضافه کردن کامنت"}
        placeholder={"کامنت"}
        icon={<MdComment />}
        ShowBoxHandler={ShowBoxHandler}
      />
      {showAddBox && (
        <AddComment showAddBox={showAddBox} ShowBoxHandler={ShowBoxHandler} />
      )}
    </div>
  );
}

export default Comments;
