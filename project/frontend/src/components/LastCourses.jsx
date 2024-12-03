import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";

import { lasCourseData } from "../data";
import CourseBox from "./CourseBox";

export default function LastCourses() {
  const [coursesData, setCoursesData] = useState(null);

  const fetchCourses = async () => {
    try {
      const response = await fetch("http://localhost:4000/v1/courses");
      const result = await response.json();
      const filteredCourses = result
        .filter((course) => course.shortName.endsWith("-v2"))
        .slice(0, 6);

      setCoursesData(filteredCourses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  const getHrefPath = (href) => {
    if (href && !href.includes("/course-info/")) {
      return `/course-info/${href}`;
    } else {
      return href;
    }
  };

  // console.log("coursesData",coursesData)
  return (
    <div className="flex flex-col rtl m-3">
      <SectionHeader
        title="جدیدترین دوره ها"
        desc="سکوی پرتا به سمت موفقیت "
        btnTitle="تمامیدوره ها "
      />
      <div className=" bg-customeigth bg-cover bg-center rounded-lg grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mx-4 ">
        {coursesData === null ? (
          <p>در حال بارگذاری...</p>
        ) : coursesData.length === 0 ? (
          <p className="text-center text-customeeleven border border-customeeleven rounded-md mt-10 mx-auto w-[90%] font-bold text-xl p-3">
          موردی یافت نشد
        </p>
        ) : (
          coursesData.map((courseData) => (
            <CourseBox key={courseData._id} courseData={courseData} />
          ))
        )}
 
      </div>
    </div>
  );
}
// {coursesData.map((courseData) => (
//   <CourseBox key={courseData._id} courseData={courseData} />
// ))}
