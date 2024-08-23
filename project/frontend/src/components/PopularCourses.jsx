import React, { useEffect, useState } from "react";

import SectionHeader from "./SectionHeader";
import { swiperCourseData } from "../data";
import ActiveSwiper from "./ActiveSwiper/ActiveSwiper";
export default function PopularCourses() {
  const [PapularData,setPapularData]=useState(null)
  useEffect(() => {
    const fetchPapularData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user")).token;
        const response = await fetch(
          `http://localhost:4000/v1/courses/popular`,
          {
            headers: {
              Authorization: `Bearer ${token === null ? null : token}`,
            },
          }
        );
        const result = await response.json();
        console.log(result);
        if (result) {
          setPapularData(result)
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPapularData();
  }, []);
  return (
    <div className="flex flex-col">
      <SectionHeader
        title="محبوب ترین دوره ها "
        desc="بهترنی دوره ها با ما تجربه کنید "
      />
      <ActiveSwiper dataSwiper={PapularData} />
    </div>
  );
}
