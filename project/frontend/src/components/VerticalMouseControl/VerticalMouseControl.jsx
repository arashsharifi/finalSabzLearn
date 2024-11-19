import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { GiTeacher } from "react-icons/gi";
import { PiUsersFourFill } from "react-icons/pi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../VerticalMouseControl/VerticalMouseControl.css";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import StarRating from "../StarRating";
import { Link } from "react-router-dom";
// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

export default function VerticalMouseControl({ dataSwiper }) {
  const score = 3;
  const countStudent = 300;

  const [isLoaderShow, setIsLoaderShow] = useState(false);
  const inImageLoaded = () => setIsLoaderShow(true);
  const getHrefPath = (href) => {
    if (href && !href.includes("/course-info/")) {
      return `/course-info/${href}`;
    } else {
      return href;
    }
  };
  console.log(dataSwiper);
  return (
    <>
      <div className="vertical-mouse-control">
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          {dataSwiper.map((item) => (
            <SwiperSlide>
              <div className="w-full h-full flex p-4 md:p-8 font-iransans">
                <Link to={getHrefPath(item.shortName)}>
                  <div className="w-full h-[90%] my-auto flex  border-2 border-customfive border-r-0 rounded-lg overflow-hidden  shadow-grey duration-200 hover:cursor-pointer hover:shadow-custom">
                    <div className="w-full md:w-[70%] h-full flex flex-col gap-2 p-4 bg-grey ">
                      {" "}
                      <h1 className="text-lg font-bold italic self-end">
                        {item.name}
                      </h1>
                      <div className="flex items-center justify-between p-2">
                        <StarRating rate={score} />

                        <div className="flex gap-2 ">
                          <p className="text-sm ">{item.creator}</p>
                          <GiTeacher className="text-2xl text-customOne" />
                        </div>
                      </div>
                      <div className="p-2">
                        <p className="max-w-lg  text-[11px] text-end line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex items-center p-1 justify-between">
                        <div className="flex gap-2">
                          <p>قیمت:</p>
                          <p>{item.price.toLocaleString("fa-IR")}</p>
                        </div>
                        <div className="flex gap-1">
                          <p className="text-[13px]">دانشجو:</p>
                          <p className="text-sm">
                            {countStudent.toLocaleString("fa-IR")}
                          </p>
                          <PiUsersFourFill className="text-2xl text-customOne" />
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-[40%] h-full  flex items-center justify-center">
                      <img
                        className="w-full h-full object-cover"
                        src={`http://localhost:4000/courses/covers/${item.cover}`}
                        onLoad={inImageLoaded}
                        alt={item.name}
                      />
                      {!isLoaderShow && <CircleSpinner />}
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
