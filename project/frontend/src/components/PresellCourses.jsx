import React from "react";

import ActiveSwiper from "./ActiveSwiper/ActiveSwiper";
import SectionHeader from "./SectionHeader";
import { lasCourseData } from "../data";

export default function PresellCourses() {
  return (
    <div className="flex flex-col ">
      <SectionHeader
        title="سایر دوره های مجموعه "
        desc="دوره ها نیزه همگی آپدیت ساعت دارند "
        btnTitle="مشاهده"
      />

      <ActiveSwiper dataSwiper={lasCourseData} />
    </div>
  );
}
