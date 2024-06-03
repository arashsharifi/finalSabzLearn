import React from "react";
import SectionHeader from "./SectionHeader";

import { ImBubbles2 } from "react-icons/im";
import { ImMagicWand } from "react-icons/im";
import { GiBookAura } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { FaChessKing } from "react-icons/fa6";
export default function AboutUs() {
  const number = 24;
  const numberp = number.toLocaleString("fa-IR");
  return (
    <div className="flex flex-col rtl ">
      <SectionHeader
        title="درباره ما چه میدانید ؟"
        desc="بهترین پرسش پاخس با اپراتور"
      />
      <div className=" w-[80%] grid grid-cols-1 md:grid-cols-2 gap-7 mb-11 mx-auto">
        <div className="flex gap-4 bg-grey rounded-lg shadow-2xl p-3">
          <ImBubbles2 className="text-[90px] text-customseven" />
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="flex gap-1">
              <ImMagicWand />
              <p className="font-bold"> دوره های اختصاصی چگونه ثبتنام کنیم ؟</p>
            </div>
            <div className="flex gap-1">
              <ImMagicWand />
              <p>پشتیبانی {numberp} ساعت با بهترین کیفیت </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 bg-grey rounded-lg shadow-2xl p-3">
          <GiBookAura className="text-[90px] text-customseven" />
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="flex gap- self-start">
              <ImMagicWand />
              <p className="font-bold"> اجازه تدریس </p>
            </div>
            <div className="flex gap-1">
              <ImMagicWand />
              <p>به هر مدرسی داده نمیشه چون کیفیت خیلی مهمه </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 bg-grey rounded-lg shadow-2xl p-3">
          <IoDiamond className="text-[90px] text-customseven" />
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="flex gap-1 self-start">
              <ImMagicWand />
              <p className="font-bold self-start">
                {" "}
                دوره پولی و رایگان براش مهم نیست
              </p>
            </div>
            <div className="flex gap-1">
              <ImMagicWand />
              <p> بهترین حقوق ها داده میشه تا بهترین کیفیت رو داشته باشیم </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4 bg-grey rounded-lg shadow-2xl p-3">
          <FaChessKing className="text-[90px] text-customseven" />
          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="flex gap-1 self-start">
              <ImMagicWand />
              <p className="font-bold  "> اهمیت </p>
            </div>
            <div className="flex gap-1">
              <ImMagicWand />
              <p>اهمیت به کاربر اولویت اولآخر این مجموعه می باشد </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
