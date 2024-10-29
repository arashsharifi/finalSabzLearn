// Users component
import React, { useEffect, useState } from "react";
import MaterialTable from "../../components/UI/MaterialTable";

export default function Users() {
  const [token, setToken] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch("http://localhost:4000/v1/users", {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
       
          const filteredUsers = result
            .filter((user) => user.role !== "ADMIN")
            .map((user) => ({
              name: user.name,
              email: user.email,
              username: user.username,
            }));
          setUsers(filteredUsers);
        });
    }
  }, [token]);

  const tableHead = ["نام و نام خانوادگی", "ایمیل", "شناسه کاربری", "عملیات"];

  return (
    <div className="flex flex-col gap-1 rtl font-iransans">
      <p className="text-2xl font-bold   bg-clip-text pb-2 border-b-2 border-customfour mr-10 mt-4 mb-6  w-[90%] mx-auto text-customfour">
        لیست کاربران
      </p>
      <MaterialTable tableHead={tableHead} tableBody={users} />
    </div>
  );
}
