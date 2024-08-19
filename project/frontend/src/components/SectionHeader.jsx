import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Botton from "./Botton";
export default function SectionHeader({ title, desc, btnTitle, btnArticl }) {
  return (
    <div className="flex w-[90%] justify-between items-center  mx-auto rtl ">
      <div className="flex flex-col gap-3 p-7 w-[70%]">
        <div className="p-2 border-b-2  border-customfive w-[80%] md:w-[40%]">
          <h1 className="text-black">{title}</h1>
        </div>

        <p className="text-customfive font-bold">{desc}</p>
      </div>
      <div>
        {btnTitle ? (
          <Botton>
            <Link className="flex gap-1 items-center" to="/coursesall">
              تمامی دوره ها
              <FaArrowLeft />
            </Link>
          </Botton>
        ) : null}
        {btnArticl ? (
          <Botton>
            <Link className="flex gap-1 items-center" to="/allArticle">
             تمامی مقاله ها 
              <FaArrowLeft />
            </Link>
          </Botton>
        ) : null}
      </div>
    </div>
  );
}
