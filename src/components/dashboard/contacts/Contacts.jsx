import ContactList from "./content/ContactList"
import HeaderBox from "./content/HeaderBox"
import { AiOutlineUser } from "react-icons/ai";

function Contacts() {

  return (
    <div className="flex flex-col gap-5">
        <HeaderBox title={"مخاطبین"} placeholder={"مخاطبین"} button={"اضافه کردن مخاطب"} icon={<AiOutlineUser className="text-2xl"/>}/>
        <ContactList/>
    </div>
  )
}

export default Contacts