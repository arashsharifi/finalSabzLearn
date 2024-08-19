import React, { useState } from "react";
import StarRating from "./StarRating";
import pic from "../img/3.jpg";
import { PiUsersFourFill } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { FaArrowLeftLong } from "react-icons/fa6";
import CircleSpinner from "./CircleSpinner/CircleSpinner";
import { Link } from "react-router-dom";

export default function ArticleCart({ data }) {
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
  const getHrefArticlePath = (href) => {
    if (href && !href.includes("/article-info/")) {
      return `/article-info/${href}`;
    } else {
      return href;
    }
  };

  return (

    <div className="flex flex-col  justify-between gap-5 bg-customenine rounded-lg p-3 shadow-xl border border-customsix w-[90%] ">
      <div className="w-[90%] h-[300px] mx-auto">
        <Link
          className="cursor-pointer"
          to={getHrefArticlePath(data?.shortName)}
        >
          <img className="w-full h-full" src={data?.cover} alt="noot" />
        </Link>
      </div>
      <div className="flex flex-col gap-4 bg-greydarko rounded-lg p-4 shadow-2xl  w-[90%] mx-auto ">
        <p className="max-w-[100%] font-bold text-[17px] text-center">
          {data?.title}
        </p>
        <p className="max-w-[90%] text-[12px] ">{data.descTwo}</p>
      </div>
      <button className="border border-customTwo-3 text-customTwo px-2 py-2 rounded-lg font-bold  text-center cursor-pointer duration-300 hover:bg-customTwo hover:text-myWhite">
        خواندن مقاله
      </button>
    </div>
  );
}
// .toLocaleString("fa-IR")
// shortName
