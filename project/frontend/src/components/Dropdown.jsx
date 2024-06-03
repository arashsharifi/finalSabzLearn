import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { dropDownData } from "../data";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [drowpData, setDrowpData] = useState(dropDownData);
  return (
    <div className="rtl font-iransans relative flex flex-col items-center w-[100%] h-full rounded-lg   z-20">
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="bg-customseven text-greydark p-4 w-full flex items-center justify-between font-bold text-[13px] rounded-lg tracking-wider  active:border-myWhite duration-300 active:text-myWhite "
      >
        مرتب سازی پیش فرض
        {!isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {isOpen && (
        <div className="bg-customseven  absolute top-16 flex flex-col items-start rounded-lg p-2 w-full">
          {drowpData.map((item) => (
            <div
              className="flex w-full justify-between text-greydark hover:text-myWhite p-2 hover:bg-customsix cursor-pointer rounded-r-lg border-r-customseven hover:border-r-myWhite border-4 border-customseven duration-300 "
              key={item.id}
            >
              <h3 className="text-[12px]  ">{item.city}</h3>
              <h4>{item.imo}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
