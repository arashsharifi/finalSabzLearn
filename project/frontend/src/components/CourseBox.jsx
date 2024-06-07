import React, { useState } from "react";
import { FaUsersLine } from "react-icons/fa6";
import { PiStarThin } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import CircleSpinner from "./CircleSpinner/CircleSpinner";
import ButtonCustomOne from "./ButtonCustomOne";
import StarRating from "./StarRating";

export default function CourseBox({
  id,
  img,
  nameC,
  nameT,
  rate,
  countStudent,
  price,
}) {
  const [isLoaderShow, setIsLoaderShow] = useState(false);
  const inImageLoaded = () => setIsLoaderShow(true);
  return (
    <div
      key={id}
      className="bg-myWhite w-full  md:w-[85%] flex flex-col gap-2 p-4 rounded-lg duration-300 hover:shadow-custom"
    >
      <div className="w-[98%]  mx-auto rounded-lg z-20">
        <img
          className="w-full h-full rounded-lg"
          src={img}
          alt="nooot"
          onLoad={inImageLoaded}
        />
        {!isLoaderShow && <CircleSpinner />}
        {/* {isLoaderShow ? (
          <img
            className="w-full h-full rounded-lg"
            src={img}
            alt="nooot"
            onLoad={inImageLoaded}
          />
        ) : (
          <CircleSpinner />
        )} */}
      </div>

      <div className="flex flex-col gap-3 pr-4">
        <h1 className="text-xl text-black m-2"> {nameC} </h1>
        <div className="w-full  mx-auto flex justify-between">
          <div className="flex  gap-2 w-full  items-center p-3">
            <p> {nameT} </p>
            <GiTeacher />
          </div>
          <div className="mt-4">
            <StarRating rate={rate} />
          </div>
        </div>
        <div className="w-full  mx-auto flex items-center">
          <div className="flex  gap-2 w-full items-center p-3">
            <p>{countStudent.toLocaleString("fa-IR")} </p>
            <FaUsersLine />
          </div>
          <p className="text-xl">{price.toLocaleString("fa-IR")}</p>
        </div>
        <div>
          <ButtonCustomOne>مشاهده جزئیات بیشتر </ButtonCustomOne>
        </div>
      </div>
    </div>
  );
}
