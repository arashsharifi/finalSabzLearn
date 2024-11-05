import React, { useEffect, useState } from "react";
import MaterialTable from "../../components/UI/MaterialTable";

export default function AdminCourses() {
  const [courseData, SetCourseData] = useState(null);
  const [token, setToken] = useState(false);
  const getAllCourses = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    console.log("localStorageData", localStorageData);

    const response = await fetch("http://localhost:4000/v1/courses", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    });

    const result = await response.json();
    const filteredCourses = result.filter(course => course.shortName.endsWith('-v2'));
    console.log("result", filteredCourses);
 
    SetCourseData(filteredCourses);
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  console.log(courseData)
  return <div className="flex flex-col gap-2 rtl  font-iransans">
     <MaterialTable
        tableHead={tableHead}
        tableBody={users}
        handleDeleteClick={handleDeleteClick}
        handlerBanUser={handlerBanUser}
        bannedUsers={bannedUsers}
      />
  </div>;
}
