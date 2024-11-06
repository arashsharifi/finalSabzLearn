import React, { useEffect, useState } from "react";
import MaterialTable from "../../components/UI/MaterialTable";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
export default function AdminCourses() {
  const [courseData, setCourseData] = useState([]);
  const [token, setToken] = useState(false);

  const statusDictionary = {
    start: "در حال برگزاری",
    completed: "پایان یافته",
    pending: "در انتظار",
  };


  const getAllCourses = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    console.log("localStorageData", localStorageData);

    const response = await fetch("http://localhost:4000/v1/courses", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    });

    const result = await response.json();
    const filteredCourses = result
      .filter((course) => course.shortName.endsWith("-v2"))
      .map((course) => ({
        id: course._id,
        name: course.name,
        creator: course.creator,
        price: course.price,
        status: statusDictionary[course.status] || "نامشخص",
        shortName: course.shortName,
        category: course.categoryID.title,
      }));

    setCourseData(filteredCourses);
  };

  useEffect(() => {
    getAllCourses();
  }, []);
  console.log("courseData", courseData);
  const tableHead = [
    { title: "name", label: "نام دوره" },
    { title: "creator", label: "مدرس" },
    { title: "price", label: "قیمت" },
    { title: "status", label: "وضعیت" },
    { title: "shortName", label: "لینک" },
    { title: "category", label: "دسته‌بندی" },
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

  console.log(courseData);
  return (
    <div className="flex flex-col gap-2 rtl  font-iransans">
       <p className="text-2xl font-bold   bg-clip-text pb-2 border-b-2 border-customfour mr-10 mt-4 mb-6  w-[90%] mx-auto text-customfour">
          لیست  دوره های مجموعه
      </p>
      <MaterialTable
        tableHead={tableHead}
        tableBody={courseData || []} 
        actions={actions}
      />
    </div>
  );
}
