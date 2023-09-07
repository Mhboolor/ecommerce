import { useState } from "react";
import ContactList from "./content/ContactList";
import HeaderBox from "./content/HeaderBox";
import { AiOutlineUser } from "react-icons/ai";
import AddContact from "./content/AddContact";

function Contacts() {
  const [showAddBox, setShowAddBox] = useState(false);
  const [searchContact, setSearchContact] = useState("");

  const showAddBoxHandler = () => {
    setShowAddBox((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-5">
      <HeaderBox
        inpValue={searchContact}
        inpFunc={setSearchContact}
        title={"مخاطبین"}
        placeholder={"مخاطبین"}
        button={"اضافه کردن مخاطب"}
        icon={<AiOutlineUser className="text-2xl" />}
        ShowBoxHandler={showAddBoxHandler}
      />
      <ContactList searchContact={searchContact} />
      <AddContact ShowBoxHandler={showAddBoxHandler} showAddBox={showAddBox} />
    </div>
  );
}

export default Contacts;
