// Users component
import React, { useEffect, useState } from "react";
import MaterialTable from "../../components/UI/MaterialTable";

export default function Users() {
  const [token, setToken] = useState(false);
  const [users, setUsers] = useState([]);
  // const [removeId,setRemoveId]=useState(null)

  function getAllUsers() {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

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
            id: user?._id,
            name: user?.name,
            email: user?.email,
            username: user?.username,
          }));
        setUsers(filteredUsers);
      });
  }
  

  const handleDeleteClick = async (userId) => {
    // نمایش پنجره تایید با استفاده از SweetAlert و دریافت نتیجه با await
    const result = await swal({
      title: "آیا مطمئن به حذف کاربر هستید",
      text: "کاربر را با آره حذف کنید",
      icon: "warning",
      buttons: {
        cancel: "نه",
        confirm: "آره",
      },
      dangerMode: true,
    });

    if (result) {
      try {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        const response = await fetch(
          `http://localhost:4000/v1/users/${userId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorageData.token}`,
            },
          }
        );
        getAllUsers()
        if (!response.ok) throw new Error("خطا در حذف کاربر");
        await swal("شما کاربر را حذف کردید", {
          icon: "success",
        });
      } catch (error) {
        console.error("Error:", error);
        await swal("خطایی رخ داد، کاربر حذف نشد", {
          icon: "error",
        });
      }
    } else {
      // پیام لغو عملیات
      await swal("عملیات لغو شد", {
        icon: "info",
      });
    }
  };

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
              id: user?._id,
              name: user?.name,
              email: user?.email,
              username: user?.username,
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
      <MaterialTable
        tableHead={tableHead}
        tableBody={users}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
}
