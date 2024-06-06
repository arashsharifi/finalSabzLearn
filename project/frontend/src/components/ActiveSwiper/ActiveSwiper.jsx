import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { PiUsersFourFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../ActiveSwiper/ActiveSwiper.css";

// import required modules
import { Pagination } from "swiper/modules";
import StarRating from "../StarRating";

export default function ActiveSwiper({ dataSwiper }) {
  const [data, setData] = useState(dataSwiper);
  console.log(data);
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
        modules={[Pagination]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-[60%] md:h-[50%] mx-auto overflow-hidden ">
              <img className="w-full h-full " src={item.img} alt="noot" />
            </div>
            <div className="flex flex-col justify-between bg-grey shadow-lg w-full p-2 rtl h-[50%] md:h-[50%]">
              <h1 className="self-start text-md">{item.nameC}</h1>
              <div className="flex justify-between items-center w-[90%] mx-auto mt-1 md:mt-3">
                <div className="flex items-center gap-2 ">
                  <GiTeacher />
                  <p className="text-sm">{item.nameT}</p>
                </div>
                <StarRating rate={item.rate} />
              </div>
              <div className="flex justify-between items-center w-[90%] mx-auto mt-2 md:mt-8">
                <div className="flex items-center gap-2 ">
                  <PiUsersFourFill />
                  <p className="text-lg font-bold">
                    {item.countStudent.toLocaleString("fa-IR")}
                  </p>
                </div>
                <p className="font-bold">
                  {item.price.toLocaleString("fa-IR")}
                </p>
              </div>
              <button
                type="button"
                class="text-white w-[40%]  bg-gradient-to-r duration-300 from-customfour via-customfive to-customfour hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-customfive dark:focus:ring-customfive font-medium hover:text-myWhite rounded-lg text-sm  p-1 flex justify-between md:justify-evenly items-center gap-2  h-full  md:h-12 self-center md:self-end "
              >
                مشاهده بیشتر
                <FaArrowLeftLong />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
