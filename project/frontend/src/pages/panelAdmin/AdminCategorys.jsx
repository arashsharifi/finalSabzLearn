import React, { useEffect, useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import MaterialTable from "../../components/UI/MaterialTable";
import AdminAddCategoryForm from "../../components/AdminAddCategoryForm";
import swal from "sweetalert";
export default function AdminCategorys() {

  const [categoryData, setCategoryData] = useState([]);
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const getAllCategorys = async () => {
    console.log("localStorageData", localStorageData);

    const response = await fetch("http://localhost:4000/v1/category", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    });

    const result = await response.json();

    const formatData = result.map((category) => ({
      id: category._id,
      title: category.title,
    }));
    setCategoryData(formatData);
  };


  const handleDeleteClick = async (categoryId) => {
      // console.log("categoryId",categoryId)
    
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
          `http://localhost:4000/v1/category/${categoryId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorageData.token}`,
            },
          }
        );
        getAllCategorys();
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
    getAllCategorys();
  }, []);

  const tableHead = [
    { title: "id", label: " ردیف" },
    { title: "title", label: "عنوان" },
  ];

  const actions = [
    {
      label: "ویرایش",
      icon: PencilIcon,
      onClick: (categoryData) => console.log("Edit:", categoryData),
    },
    {
      label: "حذف",
      icon: TrashIcon,
      onClick: (categoryData) => handleDeleteClick(categoryData.id),
    },
  ];
  return (
    <div className="flex flex-col gap-2 rtl  font-iransans">
      <p className="text-2xl font-bold   bg-clip-text pb-2 border-b-2 border-customfour mr-10 mt-4 mb-6  w-[90%] mx-auto text-customfour">
          اضافه کردن دسته بندی 
      </p>
      <AdminAddCategoryForm onUserAdded={getAllCategorys}/>
      <p className="text-2xl font-bold   bg-clip-text pb-2 border-b-2 border-customfour mr-10 mt-4 mb-6  w-[90%] mx-auto text-customfour">
        لیست دوره های مجموعه
      </p>
      <MaterialTable
        tableHead={tableHead}
        tableBody={categoryData || []}
        actions={actions}
      />
    </div>
  );
}
