import React, { useEffect, useState } from "react";
import TopBr from "../components/TopBr";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ActiveSwiperEfect from "../components/ActiveSwiperEfect/ActiveSwiperEfect";

import { HiAdjustments } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

import Dropdown from "../components/Dropdown";
import { swiperCourseData } from "../data";
import { useParams } from "react-router-dom";

export default function Category() {
  const[categoryDatas,setCategoryDatas]=useState([])
  const {categoryName}=useParams()

  // console.log(categoryName)
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user")).token;
        const response = await fetch(
          `http://localhost:4000/v1/courses/category/${categoryName}`,
          {
            headers: {
              Authorization: `Bearer ${token === null ? null : token}`,
            },
          }
        );
        const result = await response.json();
        console.log(result);
        if (result) {
          setCategoryDatas(result)
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourseData();
  }, [categoryName]);
// console.log(categoryDatas)
  return (
    <div className="flex flex-col">
      <TopBr />
      <NavBar />
      <div className="flex  flex-col-reverse gap-6 md:gap-0 md:flex-row w-[90%] bg-grey mx-auto justify-between items-center rtl p-3 rounded-lg shadow-xl">
        <div className="flex w-[100%] md:w-[50%]  items-center gap-3">
          <div className="flex gap-1">
            <span className="bg-customfive p-2 rounded-lg cursor-pointer">
              <HiAdjustments className="text-myWhite" />
            </span>
            <span className="bg-greydarko p-2 rounded-lg cursor-pointer">
              <HiAdjustments className="text-myWhite" />
            </span>
          </div>
          <div className="w-[80%] md:w-[60%] h-50px">
            <Dropdown />
          </div>
        </div>
        <div className="bg-grey w-[100%] md:w-[40%] flex items-center justify-end">
          <input
            className="outline-none border-none p-2 pr-3 rounded-lg w-[90%] md:w-[70%]"
            type="text"
            placeholder="سرچ کن "
          />
          <span className="bg-greydarko p-2 rounded-lg cursor-pointer">
            <CiSearch className="text-myWhite" />
          </span>
        </div>
      </div>
      <ActiveSwiperEfect dataSwiper={categoryDatas} />
      <Footer />
    </div>
  );
}
