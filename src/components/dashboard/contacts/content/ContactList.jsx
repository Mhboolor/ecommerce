import {
  useAllContactsQuery,
} from "../../../../future/dashboard/contacts/contactSlice";
import Error from "../../Error";
import Loading from "../../Loading";
import Empty from "../../Empty";
import Contact from "./Contact";

function ContactList() {

  const {
    data: allContacts,
    isError,
    isLoading,
    isSuccess,
  } = useAllContactsQuery();

  return (
    <div className="w-full overflow-x-auto">
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loading />
      ) : isSuccess && allContacts.length > 0 ? (
        <table className="w-[800px] md:w-full shadow">
          <thead>
            <tr className="bg-[#F6F8FA]">
              <td className="py-2 px-4">کاربر</td>
              <td className="py-2 px-4">ایمیل</td>
              <td className="py-2 px-4">تلفن</td>
              <td className="py-2 px-4">توضیحات</td>
              <td className="text-center py-2 px-4">عملیات</td>
            </tr>
          </thead>
          <tbody>
            {allContacts.map((contact) => (
              <Contact key={contact._id} {...contact} />
            ))}
          </tbody>
        </table>
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default ContactList;
