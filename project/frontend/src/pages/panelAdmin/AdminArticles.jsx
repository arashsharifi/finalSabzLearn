import React, { useEffect, useState } from 'react'
import MaterialTable from '../../components/UI/MaterialTable';
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
export default function AdminArticles() {
  const [articledata,setArticleData]=useState(null)
  const localStorageData = JSON.parse(localStorage.getItem("user"));

  const getAllUsers = async () => {

    const response = await fetch("http://localhost:4000/v1/articles", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    });

    const result = await response.json();
  

      setArticleData(result);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const tableHead = [
    { title: "_id",label: "شناسه" },  
    { title: "title", label: "عنوان" },
    { title: "creator.name", label: "نام نویسنده" },
    // { title: "username", label: "شناسه کاربری" },
    // { title: "phone", label: "شماره" },
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
      onClick: (userData) =>console.log("delete:", userData),
      bgColor: "bg-error", 
    },
 
  ];

  console.log("articledata",articledata)
  return (
    <div className="flex flex-col gap-1 rtl font-iransans rtl">
    <p className="text-2xl font-bold   bg-clip-text pb-2 border-b-2 border-customfour mr-10 mt-4 mb-6  w-[90%] mx-auto text-customfour">
      ثبت نام کاربران
    </p>
    {/* <AdminRegistration onUserAdded={getAllUsers} /> */}
    <p className="text-2xl font-bold   bg-clip-text pb-2 border-b-2 border-customfour mr-10 mt-4 mb-6  w-[90%] mx-auto text-customfour">
      لیست کاربران
    </p>
    <MaterialTable
      tableHead={tableHead}
      tableBody={articledata}
      actions={actions}
    />
  </div>
  )
}
