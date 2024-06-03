import React from "react";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
export default function CourseMainInfo() {
  return (
    <div className="bg-myWhite w-full shadow-xl flex justify-center mt-3 rtl font-iransans p-3">
      <div className="flex  flex-col-reverse md:flex-row gap-3 w-[100%] md:w-[80%]  justify-between p-3">
        <div className="flex flex-col gap-4 p-3 w-[100%] md:w-[50%]">
          <span className="bg-customsix text-customseven p-2 rounded-md text-sm w-[44%] self-start">
            آموزش دوره فرانت اند
          </span>
          <h1 className=" text-lg md:text-2xl font-bold ">
            آموزش جامع تخصص جاوا اسکریپت{" "}
          </h1>
          <p className="text-sm">
            ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
          </p>
          <div className="flex gap-2 items-center self-start">
            <FaTelegram className="text-greydarko text-3xl" />
            <FaWhatsapp className="text-greydarko text-3xl" />
            <IoLogoTwitter className="text-greydarko text-3xl" />
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] mx-auto">
          <video
            className="w-full h-full rounded-lg"
            src=""
            poster="/images/courses/game.png"
            controls
          ></video>
        </div>
      </div>
    </div>
  );
}
