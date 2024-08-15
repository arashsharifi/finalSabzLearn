import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

import { lasCourseData } from "../data";
import CourseBox from "./CourseBox";

export default function LastCourses() {
  const [coursesData, setCoursesData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/v1/courses")
      .then((res) => res.json())
      .then((result) => setCoursesData(result.slice(0, 6))) 
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const getHrefPath = (href) => {
    if (href && !href.includes("/course-info/")) {
      return `/course-info/${href}`;
    } else {
      return href;
    }
  };

  // console.log(coursesData)
  return (
    <div className="flex flex-col rtl m-3">
      <SectionHeader
        title="جدیدترین دوره ها"
        desc="سکوی پرتا به سمت موفقیت "
        btnTitle="تمامیدوره ها "
      />
      <div className=" bg-customeigth bg-cover bg-center rounded-lg grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mx-4 ">
        {coursesData.map((courseData) => (
          <CourseBox key={courseData._id} courseData={courseData} />
        ))}
      </div>
    </div>
  );
}
