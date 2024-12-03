import React, { useEffect, useState } from "react";

import ActiveSwiper from "./ActiveSwiper/ActiveSwiper";
import SectionHeader from "./SectionHeader";
import { lasCourseData } from "../data";

export default function PresellCourses() {
  const [presellData, setPresellData] = useState(null);
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
        const filteredCourses = result.filter((course) =>
          course.shortName.endsWith("-v2")
        );

        if (filteredCourses) {
          setPresellData(filteredCourses);
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

      {presellData === null ? (
        <p>در حال بارگذاری...</p>
      ) : presellData.length === 0 ? (
        <p className="text-center text-customeeleven border border-customeeleven rounded-md mt-10 mx-auto w-[90%] font-bold text-xl p-3">
          موردی یافت نشد
        </p>
      ) : (
        <ActiveSwiper dataSwiper={presellData} />
      )}
    </div>
  );
}
