import React, { useEffect } from "react";
import { useGetAllContactsQuery } from "../../../../future/dashboard/contacts/contactSlice";
import Loading from "../../Loading";
import axios from "axios";

function ContactList() {

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://127.0.0.1:1111/contact/list")
      console.log(res.data);
    }

    fetchData()
  } , [])

  // const {
  //   data: allContacts,
  //   isError,
  //   isLoading,
  //   isSuccess,
  // } = useGetAllContactsQuery();

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
