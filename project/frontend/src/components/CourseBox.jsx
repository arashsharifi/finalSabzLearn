import React, { useEffect, useState } from "react";
import { FaUsersLine } from "react-icons/fa6";
import { PiStarThin } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import CircleSpinner from "./CircleSpinner/CircleSpinner";
import ButtonCustomOne from "./ButtonCustomOne";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
export default function CourseBox({ courseData }) {
  const [data, setData] = useState([]);
  // useEffect(()=>{

  // },[coursesData])
  // console.log(courseData)

  const countStudent = 100;
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
    <div
      key={courseData?._id}
      className="bg-myWhite w-full  md:w-[85%] flex flex-col gap-2 p-4 rounded-lg duration-300 hover:shadow-custom"
    >
      <div className="w-[98%]  mx-auto rounded-lg z-20">
        <img
          className="w-full h-auto rounded-lg"
          src={courseData?.cover}
          alt="nooot"
          onLoad={inImageLoaded}
        />
        {!isLoaderShow && <CircleSpinner />}
        {/* {isLoaderShow ? (
          <img
            className="w-full h-full rounded-lg"
            src={coursesData?.cover}
            alt="nooot"
            onLoad={inImageLoaded}
          />
        ) : (
          <CircleSpinner />
        )} */}
      </div>

      <div className="flex flex-col gap-3 pr-4">
        <h1 className="text-xl text-black m-2"> {courseData?.name} </h1>

        <div className="w-full  mx-auto flex justify-between">
          <div className="flex  gap-2 w-full  items-center p-3">
            <p> {courseData?.creator} </p>
            <GiTeacher />
          </div>
          <div className="mt-4">
            <StarRating rate={3} />
          </div>
        </div>
        <div className="w-full  mx-auto flex items-center">
          <div className="flex  gap-2 w-full items-center p-3">
            <p>{countStudent}</p>
            <FaUsersLine />
          </div>
          <div className="w-full flex justify-between ">
            <p>تومان:</p>
            <p className="text-xl">
              {courseData?.price.toLocaleString("fa-IR")}
            </p>
          </div>
        </div>
        <div>
          <Link to={getHrefPath(courseData?.shortName)}>
            <ButtonCustomOne>مشاهده جزئیات بیشتر </ButtonCustomOne>
          </Link>
        </div>
      </div>
    </div>
  );
}

// toLocaleString("fa-IR")
