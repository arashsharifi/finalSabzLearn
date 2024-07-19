import React, { useEffect } from "react";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
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
        <div className="w-[100%] md:w-[50%] mx-auto">
          {Alldata?.cover ? (
            <video
              className="w-full h-full rounded-lg"
              src=""
              poster={Alldata?.cover}
              controls
            ></video>
          ) : (
            <video
              className="w-full h-full rounded-lg"
              src=""
              poster="data:image/jpeg;base64,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"
              controls
            ></video>
          )}
        </div>
      </div>
    </div>
  );
}
