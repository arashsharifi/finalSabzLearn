import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PiUsersFourFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../ActiveSwiperEfect/ActiveSwiperEfect.css";
import StarRating from "../StarRating";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import { EffectCoverflow, Pagination } from "swiper/modules";
export default function ActiveSwiperEfect({ dataSwiper }) {
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

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper active-swiper" // اضافه کردن کلاس خاص
      >
        {/* item.cover */}
        {dataSwiper.map((item) => (
          <SwiperSlide key={item.id}>
            <img className="w-full h-[170px]" src={`http://localhost:4000/courses/covers/${item.cover}`} onLoad={inImageLoaded} alt={item.name} />
            {!isLoaderShow && <CircleSpinner />}
            <div className="flex flex-col bg-grey gap-2 w-full h-full rtl p-3">
              <h1 className="self-start text-md font-bold">{item.name}</h1>
              <div className="flex justify-between w-[90%] mx-auto mt-2">
                <div className="flex gap-2">
                  <GiTeacher className="text-2xl text-customOne" />
                  <p className="text-sm">{item.creator}</p>
                </div>
                <StarRating rate={score} />
              </div>
              <div className="flex justify-between w-[90%] mx-auto mt-3">
                <div className="flex gap-2">
                  <PiUsersFourFill className="text-2xl text-customOne" />
                  <p className="text-sm">
                    {countStudent.toLocaleString("fa-IR")}
                  </p>
                </div>
                <p>{item.price.toLocaleString("fa-IR")}</p>
              </div>
              <Link to={getHrefPath(item.shortName)}>
                <button className="bg-gradient-to-r w-[100%] md:w-[100%] from-customfour to-customseven px-1 py-1 rounded-lg text-sm flex justify-center md:justify-between gap-2 items-center duration-300 hover:text-myWhite self-center md:self-end ">
                  مشاهده بیشتر
                  <FaArrowLeftLong />
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
