import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
export default function Accordian({ title, desc, time, index }) {
  const [accordianOpen, setAccordianOpen] = useState(false);
  return (
    <div
      onClick={() => setAccordianOpen(!accordianOpen)}
      className=" flex flex-col items-center justify-between duration-300 hover:bg-greydark p-2 w-full cursor-pointer "
    >
      <div className="flex justify-between w-full ">
        <p className="flex gap-3">
          {" "}
          <span className="border w-10 h-10 rounded-full flex items-center justify-center ">
            {index + 1}
          </span>{" "}
          <span>معرفی جلسه </span>{" "}
        </p>

        {accordianOpen ? (
          <FaMinus className="text-2xl" />
        ) : (
          <IoMdAdd className="text-2xl" />
        )}
      </div>
      <div
        className={`grid m-1 overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm relative w-full   ${
          accordianOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[1fr] opacity-0"
        } `}
      >
        <div className=" flex gap-3 ">
          <div className="p-1 w-[4%]">
            <FaYoutube className="text-2xl" />
          </div>
          <div className="flex justify-between w-[96%]  p-1  border-b-2 border-customfive">
            <p>{title}</p>
            <p>{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
