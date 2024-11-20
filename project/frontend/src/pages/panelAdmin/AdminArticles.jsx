import React, { useEffect, useState } from 'react'
import MaterialTable from '../../components/UI/MaterialTable';
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import AddArticleAdmin from '../../components/AddArticleAdmin';
export default function AdminArticles() {
  const [articledata,setArticleData]=useState(null)
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const getAllArticles = async () => {
    const response = await fetch("http://localhost:4000/v1/articles", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    });

    const result = await response.json();
  

      setArticleData(result);
  };

  const handleDeleteClick = async (articleId) => {
    
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
        const response = await fetch(
          `http://localhost:4000/v1/articles/${articleId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorageData.token}`,
            },
          }
        );
        getAllArticles();
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
      await swal("عملیات لغو شد", {
        icon: "info",
      });
    }
  };

 

  useEffect(() => {
    getAllArticles();
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
      onClick: (articleData) =>handleDeleteClick(articleData._id),
      bgColor: "bg-error", 
    },
 
  ];

  console.log("articledata",articledata)
  return (
    <div className="flex flex-col gap-1 rtl font-iransans rtl">
    <p className="text-2xl font-bold   bg-clip-text pb-2 border-b-2 border-customfour mr-10 mt-4 mb-6  w-[90%] mx-auto text-customfour">
      افزودن مقاله جدید 
    </p>
    <AddArticleAdmin onArticleAdded={getAllArticles}/>
    {/* <AdminRegistration onUserAdded={getAllUsers} /> */}
    <p className="text-2xl font-bold   bg-clip-text pb-2 border-b-2 border-customfour mr-10 mt-4 mb-6  w-[90%] mx-auto text-customfour">
      لیست مقالات 
    </p>
    <MaterialTable
      tableHead={tableHead}
      tableBody={articledata}
      actions={actions}
    />
  </div>
  )
}
