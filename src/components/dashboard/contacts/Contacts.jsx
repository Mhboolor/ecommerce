import { useState } from "react";
import ContactList from "./content/ContactList";
import HeaderBox from "./content/HeaderBox";
import { AiOutlineUser } from "react-icons/ai";
import AddContact from "./content/AddContact";

function Contacts() {
  const [showAddBox, setShowAddBox] = useState(false);

  const showAddBoxHandler = () => {
    setShowAddBox((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-5">
      <HeaderBox
        title={"مخاطبین"}
        placeholder={"مخاطبین"}
        button={"اضافه کردن مخاطب"}
        icon={<AiOutlineUser className="text-2xl" />}
        ShowBoxHandler={showAddBoxHandler}
      />
      <ContactList />
      <AddContact ShowBoxHandler={showAddBoxHandler} showAddBox={showAddBox} />
    </div>
  );
}

export default Contacts;
