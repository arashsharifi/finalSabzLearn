import React from "react";
import StarRating from "./StarRating";
import pic from "../img/3.jpg";
import { PiUsersFourFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
{
  /* <SwiperSlide key={item.id}>
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
</SwiperSlide> */
}

export default function ProductCart({ data }) {
  const items = 14000;
  const items1 = 150;
  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-2 overflow-hidden rounded-lg items-center bg-greydarko shadow-lg shadow-greydark">
      <div className="w-full h-[60%] md:h-[50%] mx-auto overflow-hidden ">
        <img className="w-full h-full " src={data.img} alt="noot" />
      </div>
      <div className="flex flex-col justify-between bg-grey shadow-lg w-full p-2 rtl h-[50%] md:h-[50%]">
        <h1 className="self-start text-md">{data.nameC}</h1>
        <div className="flex justify-between items-center w-[90%] mx-auto ">
          <div className="flex items-center gap-2 ">
            <GiTeacher />
            <p className="text-sm">{data.nameT}</p>
          </div>
          <StarRating rate={data.rate} />
        </div>
        <div className="flex justify-between items-center w-[90%] mx-auto ">
          <div className="flex items-center gap-2 ">
            <PiUsersFourFill />
            <p className="text-lg font-bold">
              {data.countStudent.toLocaleString("fa-IR")}
            </p>
          </div>
          <p className="font-bold">{data.price.toLocaleString("fa-IR")}</p>
        </div>
        <button
          type="button"
          class="text-white w-[100%]  bg-gradient-to-r duration-300 border-b-2 border-customfour hover:from-customfour via-customfive to-customfour  hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-customfive font-medium hover:text-myWhite rounded-lg text-sm  p-1 flex justify-between md:justify-evenly items-center gap-2  h-full  md:h-12 self-center md:self-end "
        >
          مشاهده بیشتر
          <FaArrowLeftLong />
        </button>
      </div>
    </div>
  );
}
