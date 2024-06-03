import React from "react";

import SectionHeader from "./SectionHeader";
import { swiperCourseData } from "../data";
import ActiveSwiper from "./ActiveSwiper/ActiveSwiper";
export default function PopularCourses() {
  return (
    <div className="flex flex-col">
      <SectionHeader
        title="محبوب ترین دوره ها "
        desc="بهترنی دوره ها با ما تجربه کنید "
      />
      <ActiveSwiper dataSwiper={swiperCourseData} />
    </div>
  );
}
