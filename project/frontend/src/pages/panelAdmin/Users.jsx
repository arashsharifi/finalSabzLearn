// Users component
import React, { useEffect, useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import MaterialTable from "../../components/UI/MaterialTable";
import swal from "sweetalert";
import AdminRegistration from "../../components/AdminRegistration";
export default function Users() {
  const [token, setToken] = useState(false);
  const [users, setUsers] = useState([]);
  const [bannedUsers, setBannedUsers] = useState([]);
  // const [removeId,setRemoveId]=useState(null)

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
        getAllUsers();
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

  const handlerBanUser = async (userId) => {
    console.log("yyy");

    const result = await swal({
      title: "آیا مطمئن به بن کاربر هستید",
      text: "کاربر را با آره بن کنید",
      icon: "warning",
      buttons: {
        cancel: "نه",
        confirm: "آره",
      },
      dangerMode: true,
    });

    if (result) {
      console.log("yesss");
      try {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        const response = await fetch(
          `http://localhost:4000/v1/users/ban/${userId}`,
          {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${localStorageData.token}`,
            },
          }
        );
        if (!response.ok) throw new Error("خطا در بن کاربر");
        const updatedBannedUsers = [...bannedUsers, userId];
        setBannedUsers(updatedBannedUsers);
        localStorage.setItem("bannedUsers", JSON.stringify(updatedBannedUsers));
        await swal("شما کاربر را بن کردید", {
          icon: "success",
        });
      } catch (error) {
        console.error("Error:", error);
        await swal("خطایی رخ داد، کاربر بن نشد", {
          icon: "error",
        });
      }
    } else {
      console.log("nooo");
      await swal("عملیات لغو شد", {
        icon: "info",
      });
    }
  };

  const getAllUsers = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    const response = await fetch("http://localhost:4000/v1/users", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    });

    const result = await response.json();
    const filteredUsers = result
      .filter((user) => user.role !== "ADMIN")
      .map((user) => ({
        id: user?._id,
        name: user?.name,
        email: user?.email,
        username: user?.username,
        phone: user?.phone,
      }));

    setUsers(filteredUsers);
  };

  useEffect(() => {
    getAllUsers();
  }, [token]);

  useEffect(() => {
    const storedBannedUsers =
      JSON.parse(localStorage.getItem("bannedUsers")) || [];
    setBannedUsers(storedBannedUsers);
  }, []);

  // const tableHead = [
  //   "نام و نام خانوادگی",
  //   "ایمیل",
  //   "شناسه کاربری",
  //   "شماره ",
  //   "عملیات",
  // ];

  const tableHead = [
    { title: "name", label: "نام و نام خانوادگی" },
    { title: "email", label: "ایمیل" },
    { title: "username", label: "شناسه کاربری" },
    { title: "phone", label: "شماره" },
  ];

  const actions = [
    {
      label: "ویرایش",
      icon: PencilIcon,
      onClick: (userData) => console.log("Edit:", userData),
      bgColor: "bg-customfive", 
    },
    {
      label: "حذف",
      icon: TrashIcon,
      onClick: (userData) => handleDeleteClick(userData.id),
      bgColor: "bg-error", 
    },
    {
      label: "بن",
      icon: null,
      onClick: (userData) => handlerBanUser(userData.id),
      disabledCondition: (userData) => bannedUsers.includes(userData.id),
      bgColor: "bg-error", 
    },
  ];

  return (
    <div className="flex flex-col gap-1 rtl font-iransans rtl">
      <p className="text-2xl font-bold   bg-clip-text pb-2 border-b-2 border-customfour mr-10 mt-4 mb-6  w-[90%] mx-auto text-customfour">
        ثبت نام کاربران
      </p>
      <AdminRegistration onUserAdded={getAllUsers} />
      <p className="text-2xl font-bold   bg-clip-text pb-2 border-b-2 border-customfour mr-10 mt-4 mb-6  w-[90%] mx-auto text-customfour">
        لیست کاربران
      </p>
      <MaterialTable
        tableHead={tableHead}
        tableBody={users}
        actions={actions}
      />
    </div>
  );
}


    // <MaterialTable
    //     tableHead={tableHead}
    //     tableBody={users}
    //     handleDeleteClick={handleDeleteClick}
    //     handlerBanUser={handlerBanUser}
    //     bannedUsers={bannedUsers}
    //   /> 