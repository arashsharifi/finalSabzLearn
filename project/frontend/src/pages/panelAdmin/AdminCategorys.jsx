import React, { useEffect, useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import MaterialTable from "../../components/UI/MaterialTable";
export default function AdminCategorys() {
  const [categoryData, setCategoryData] = useState([]);
  const getAllCategorys = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
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

  console.log("categoryData", categoryData);
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
      onClick: (userData) => console.log("Edit:", userData),
    },
    {
      label: "حذف",
      icon: TrashIcon,
      onClick: (userData) => console.log("Edit:", userData),
    },
  ];
  return (
    <div className="flex flex-col gap-2 rtl  font-iransans">
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
