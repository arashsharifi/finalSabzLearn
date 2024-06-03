import React from "react";
import { AiFillSlackCircle } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="flex flex-col justify-between gap-10  rtl   mt-10 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-grey rounded-lg shadow-md  w-[80%] mx-auto relative  ">
        <div className="flex flex-col justify-between h-[90%] gap-5 p-4">
          <h2 className="font-bold relative ">
            با تولید سادگی نامفهو
            <div className="w-8 h-8 opacity-70 bg-customfive rounded-lg rotate-45 absolute top-0 right-6"></div>
          </h2>
          <p className="text-[13px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
          </p>
        </div>
        <div className="flex flex-col justify-between h-[90%] gap-5 p-4">
          <h2 className="font-bold relative ">
            با تولید سادگی نامفهو
            <div className="w-8 h-8 opacity-70 bg-customfive rounded-lg rotate-45 absolute top-0 right-6"></div>
          </h2>
          <p className="text-[13px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
          </p>
        </div>
        <div className="flex flex-col justify-between h-[90%] gap-5 p-4">
          <h2 className="font-bold relative ">
            با تولید سادگی نامفهو
            <div className="w-8 h-8 opacity-70 bg-customfive rounded-lg rotate-45 absolute top-0 right-6"></div>
          </h2>
          <div className="flex justify-between flex-wrap max-w-[80%]">
            <p className="duration-300 hover:text-customfive my-3 cursor-pointer">
              <a href="#">آموزش پکیج nodejs</a>
            </p>
            <p className="duration-300 hover:text-customfive my-3 cursor-pointer">
              <a href="#">آموزش پکیج php</a>
            </p>
            <p className="duration-300 hover:text-customfive my-3 cursor-pointer">
              <a href="#">آموزش پکیج sql</a>
            </p>
            <p className="duration-300 hover:text-customfive my-3 cursor-pointer">
              <a href="#">آموزش پکیج html&css</a>
            </p>
          </div>
        </div>

        <div className=" rounded-lg w-[49%]  h-14 absolute bottom-[-36px] right-20 md:right-52 flex justify-between ">
          <AiFillSlackCircle className="text-customfive text-[50px]" />
          <AiFillSlackCircle className="text-customfive text-[50px]" />
          <AiFillSlackCircle className="text-customfive text-[50px]" />
        </div>
      </div>
      <div className="flex justify-center items-center p-4 w-[95%] bg-gradient-to-r from-customfour via-customseven to-customfour mx-auto rounded-md ">
        <p className="whitespace-nowrap text-[10px] md:text-lg text-myWhite">
          {" "}
          کلیه حقوق برای آکادمی آموزشی هاب دانش می باشد ومحفوظ می باشد
        </p>
      </div>
    </div>
  );
}
