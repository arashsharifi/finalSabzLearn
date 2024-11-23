import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { PiUsersFourFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../ActiveSwiper/ActiveSwiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import StarRating from "../StarRating";
import CircleSpinner from "../CircleSpinner/CircleSpinner";

export default function ActiveSwiper({ dataSwiper }) {
  const rate = 3;
  const countStudent = 200;

  const [isLoaderShow, setIsLoaderShow] = useState(false);
  const inImageLoaded = () => setIsLoaderShow(true);
  const getHrefPath = (href) => {
    if (href && !href.includes("/course-info/")) {
      return `/course-info/${href}`;
    } else {
      return href;
    }
  };
  useEffect(() => {
    console.log(dataSwiper);
  }, [dataSwiper]);

  return (
    <div className=" flex justify-center items-center h-[75vh] m-8">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-[60%] md:h-[50%] mx-auto overflow-hidden ">
              <img
                className="w-full h-full "
                src={`http://localhost:4000/courses/covers/${item.cover}`}
                alt="noot"
                onLoad={inImageLoaded}
              />
              {!isLoaderShow && <CircleSpinner />}
            </div>
            <div className="flex flex-col justify-between bg-grey shadow-lg w-full p-2 rtl h-[50%] md:h-[50%]">
              <h1 className="self-start text-md">{item?.name}</h1>
              <div className="flex justify-between items-center w-[90%] mx-auto mt-1 md:mt-3">
                <div className="flex items-center gap-2 ">
                  <GiTeacher />
                  {/* <p className="text-sm">{item.nameT}</p> */}
                </div>
                <StarRating rate={rate} />
              </div>
              <div className="flex justify-between items-center w-[90%] mx-auto mt-2 md:mt-8">
                <div className="flex items-center gap-2 ">
                  <PiUsersFourFill />
                  <p className="text-lg font-bold">
                    {countStudent?.toLocaleString("fa-IR")}
                  </p>
                </div>
                <p className="font-bold">
                  {item?.price.toLocaleString("fa-IR")}
                </p>
              </div>
              <Link to={getHrefPath(item?.shortName)}>
                <button
                  type="button"
                  class="text-white w-[40%]  bg-gradient-to-r duration-300 from-customfour via-customfive to-customfour hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-customfive dark:focus:ring-customfive font-medium hover:text-myWhite rounded-lg text-sm  p-1 flex justify-between md:justify-evenly items-center gap-2  h-full  md:h-12 self-center md:self-end "
                >
                  مشاهده بیشتر
                  <FaArrowLeftLong />
                </button>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
