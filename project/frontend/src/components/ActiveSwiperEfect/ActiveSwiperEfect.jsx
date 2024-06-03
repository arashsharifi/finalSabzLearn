import React, { useRef, useState } from "react";

import { PiUsersFourFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../ActiveSwiperEfect/ActiveSwiperEfect.css";
import StarRating from "../StarRating";

import { EffectCoverflow, Pagination } from "swiper/modules";
export default function ActiveSwiperEfect({ dataSwiper }) {
  const [data, setData] = useState(dataSwiper);
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
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide>
            <img src={item.img} />
            <div className="flex flex-col bg-grey gap-2 w-full h-full rtl p-3">
              <h1 className="self-start text-md font-bold">{item.nameC}</h1>
              <div className="flex justify-between w-[90%] mx-auto mt-2">
                <div className="flex gap-2">
                  <GiTeacher className="text-2xl text-customOne" />
                  <p className="text-sm">{item.nameT}</p>
                </div>
                <StarRating rate={item.rate} />
              </div>
              <div className="flex justify-between w-[90%] mx-auto mt-3">
                <div className="flex gap-2">
                  <PiUsersFourFill className="text-2xl text-customOne" />
                  <p className="text-sm">
                    {item.countStudent.toLocaleString("fa-IR")}
                  </p>
                </div>
                <p>{item.price.toLocaleString("fa-IR")}</p>
              </div>
              <button className="bg-gradient-to-r w-[70%] md:w-[50%]   from-customfour to-customseven px-1 py-1 rounded-lg text-sm flex justify-center md:justify-between gap-2 items-center duration-300 hover:text-myWhite self-center md:self-end ">
                مشاهده بیشتر
                <FaArrowLeftLong />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
