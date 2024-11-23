import React, { useEffect } from "react";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import AuthContext from "../context/authContext";
export default function CourseMainInfo({ Alldata }) {
  useEffect(() => {
    // console.log("alldata", Alldata);
  }, [Alldata]);

  return (
    <div className="bg-myWhite w-full shadow-xl flex justify-center mt-3 rtl font-iransans p-3">
      <div className="flex  flex-col-reverse md:flex-row gap-3 w-[100%] md:w-[80%]  justify-between p-3">
        <div className="flex flex-col gap-4 p-3 w-[100%] md:w-[50%]">
          <span className="bg-customsix text-customseven p-2 rounded-md text-sm w-[44%] self-start">
            {Alldata?.categoryID?.title
              ? Alldata?.categoryID?.title
              : "موردی نیست دیتایی نیست "}
          </span>
          <h1 className=" text-lg md:text-2xl font-bold ">
            {Alldata?.name ? Alldata?.name : "موردی نیست دیتایی نیست "}
          </h1>
          <p className="text-sm">
            {Alldata?.description
              ? Alldata?.description
              : "موردی نیست دیتایی نیست "}
          </p>
          <div className="flex gap-2 items-center self-start">
            <FaTelegram className="text-greydarko text-3xl" />
            <FaWhatsapp className="text-greydarko text-3xl" />
            <IoLogoTwitter className="text-greydarko text-3xl" />
          </div>
        </div>
        <div className="w-[80%] md:w-[50%] mx-auto bg-customTwo">
          {Alldata?.cover ? (
            <img
              className="w-full h-[300px] rounded-lg bg-customfive"
              src={`http://localhost:4000/courses/covers/${Alldata.cover}`}
              alt="nooot"
              // onLoad={inImageLoaded}
            />
          ) : (
            <img
              className="w-full h-auto rounded-lg"
              src={`http://localhost:4000/courses/covers/${Alldata.cover}`}
              alt="nooot"
              // onLoad={inImageLoaded}
            />
          )}
        </div>
      </div>
    </div>
  );
}
