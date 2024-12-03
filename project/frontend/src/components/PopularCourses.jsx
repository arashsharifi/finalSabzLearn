import React, { useEffect, useState } from "react";

import SectionHeader from "./SectionHeader";
import { swiperCourseData } from "../data";
import ActiveSwiper from "./ActiveSwiper/ActiveSwiper";
export default function PopularCourses() {
  const [PapularData, setPapularData] = useState(null);
  const fetchPapularData = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("user")).token;
      const response = await fetch(`http://localhost:4000/v1/courses/popular`, {
        headers: {
          Authorization: `Bearer ${token === null ? null : token}`,
        },
      });
      const result = await response.json();
      const filteredCourses = result.filter((course) =>
        course.shortName.endsWith("-v2")
      );
      if (filteredCourses) {
        setPapularData(filteredCourses);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchPapularData();
  }, []);

  console.log("PapularData",PapularData)
  return (
    <div className="flex flex-col">
      <SectionHeader
        title="محبوب ترین دوره ها "
        desc="بهترین دوره ها با ما تجربه کنید "
      />

      {PapularData === null ? (
        <p>در حال بارگذاری...</p>
      ) : PapularData.length === 0 ? (
        <p className="text-center text-customeeleven border border-customeeleven rounded-md mt-10 mx-auto w-[90%] font-bold text-xl p-3">
        موردی یافت نشد
      </p>
      ) : (
        <ActiveSwiper dataSwiper={PapularData} />
      )}
    </div>
  );
}
