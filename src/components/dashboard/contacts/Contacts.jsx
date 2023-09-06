import ContactList from "./content/ContactList"
import Header from "./content/Header"

function Contacts() {

  return (
    <div className="flex flex-col gap-5">
        <Header/>
        <ContactList/>
    </div>
  )
}

export default Contacts