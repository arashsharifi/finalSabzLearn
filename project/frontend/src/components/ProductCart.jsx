import React, { useState } from "react";
import StarRating from "./StarRating";
import pic from "../img/3.jpg";
import { PiUsersFourFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
import CircleSpinner from "./CircleSpinner/CircleSpinner";
import { Link } from "react-router-dom";

export default function ProductCart({ data }) {
  console.log(data);
  const [isLoaderShow, setIsLoaderShow] = useState(false);
  const inImageLoaded = () => setIsLoaderShow(true);
  const items = 14000;
  const items1 = 150;
  const rate = 4;
  const getHrefPath = (href) => {
    if (href && !href.includes("/course-info/")) {
      return `/course-info/${href}`;
    } else {
      return href;
    }
  };

  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-2 overflow-hidden rounded-lg items-center bg-greydarko shadow-lg shadow-greydark">
      <div className="w-full h-[60%] md:h-[50%] mx-auto overflow-hidden ">
        <img
          className="w-full h-full "
          src={data.cover}
          alt="noot"
          onLoad={inImageLoaded}
        />
        {!isLoaderShow && <CircleSpinner />}
      </div>
      <div className="flex flex-col justify-between bg-grey shadow-lg w-full p-2 rtl h-[50%] md:h-[50%]">
        <h1 className="self-start text-md">{data.name}</h1>
        <div className="flex justify-between items-center w-[90%] mx-auto ">
          <div className="flex items-center gap-2 ">
            <GiTeacher />
            <p className="text-sm">{data.creator}</p>
          </div>
          <StarRating rate={rate} />
        </div>
        <div className="flex justify-between items-center w-[90%] mx-auto ">
          <div className="flex items-center gap-2 ">
            <PiUsersFourFill />
            <p className="text-lg font-bold">
              {items1}
            </p>
          </div>
          <p className="font-bold">{data.price}</p>
        </div>
        <Link to={getHrefPath(data.shortName)} >
        <button
          type="button"
          class="text-white w-[100%]  bg-gradient-to-r duration-300 border-b-2 border-customfour hover:from-customfour via-customfive to-customfour  hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-customfive font-medium hover:text-myWhite rounded-lg text-sm  p-1 flex justify-between md:justify-evenly items-center gap-2  h-full  md:h-12 self-center md:self-end "
        >
          مشاهده بیشتر
          <FaArrowLeftLong />
        </button>
        </Link>
      </div>
    </div>
  );
}
// .toLocaleString("fa-IR")
// shortName
