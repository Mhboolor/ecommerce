import React from "react";
import { useGetAllContactsQuery } from "../../../../future/dashboard/contacts/contactSlice";
import Loading from "../../Loading";

function ContactList() {
  const {
    data: allContacts,
    isError,
    isLoading,
    isSuccess,
  } = useGetAllContactsQuery();

  return (
    <div className="w-full overflow-x-auto">
      {/* {isError ? (
        <p>error</p>
      ) : isLoading ? (
        <Loading />
      ) : (
        isSuccess && (
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
            <tbody></tbody>
          </table>
        )
      )} */}
    </div>
  );
}

export default ContactList;
