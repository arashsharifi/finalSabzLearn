import React, { useEffect, useState } from "react";

import ActiveSwiper from "./ActiveSwiper/ActiveSwiper";
import SectionHeader from "./SectionHeader";
import { lasCourseData } from "../data";

export default function PresellCourses() {
  const [presellData,setPresellData]=useState(null)
  useEffect(() => {
    const fetchPresellData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user")).token;
        const response = await fetch(
          `http://localhost:4000/v1/courses/presell`,
          {
            headers: {
              Authorization: `Bearer ${token === null ? null : token}`,
            },
          }
        );
        const result = await response.json();
        console.log(result);
        if (result) {
                setPresellData(result)
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPresellData();
  }, []);
  // console.log(presellData)
  return (
    <div className="flex flex-col ">
      <SectionHeader
        title="دوره های در حال فروش"
        desc="دوره ها نیزه همگی آپدیت ساعت دارند "
        btnTitle="مشاهده"
      />

      <ActiveSwiper dataSwiper={presellData} />
    </div>
  );
}
