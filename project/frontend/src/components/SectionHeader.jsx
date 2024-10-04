import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Botton from "./Botton";

export default function SectionHeader({ title, desc, btnTitle, btnArticl }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-[90%] mx-auto rtl p-6 md:p-10 animate-fadeIn">
      <div className="flex flex-col gap-5 p-7 w-full md:w-[70%]">
        <div className="p-2 border-b-2 border-customfive w-full md:w-[60%] animate-slideIn">
          <h1 className="text-2xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-customfive via-customsix to-customseven">
            {title}
          </h1>
        </div>

        <p className="text-lg text-customfive font-bold opacity-0 animate-fadeInDelay">
          {desc}
        </p>
      </div>

      <div className="mt-6 md:mt-0">
        {btnTitle ? (
          <Botton>
            <Link
              className="flex gap-2 items-center text-customfive hover:text-white transition-colors duration-300 bg-customsix px-4 py-2 rounded-lg shadow-md hover:bg-gradient-to-r from-customsix to-customfour"
              to="/coursesall"
            >
              {btnTitle}
              <FaArrowLeft className="animate-bounceLeft" />
            </Link>
          </Botton>
        ) : null}

        {btnArticl ? (
          <Botton>
            <Link
              className="flex gap-2 items-center text-customfive hover:text-white transition-colors duration-300 bg-customsix px-4 py-2 rounded-lg shadow-md hover:bg-gradient-to-r from-customsix to-customfour"
              to="/allArticle"
            >
              {btnArticl}
              <FaArrowLeft className="animate-bounceLeft" />
            </Link>
          </Botton>
        ) : null}
      </div>
    </div>
  );
}
