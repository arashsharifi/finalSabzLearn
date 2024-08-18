import React, { useContext, useEffect, useState } from "react";
import TopBr from "../components/TopBr";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ActiveSwiperEfect from "../components/ActiveSwiperEfect/ActiveSwiperEfect";

import { HiAdjustments } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

import Dropdown from "../components/Dropdown";
import { swiperCourseData } from "../data";
import { useParams } from "react-router-dom";
import AuthContext from "../context/authContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Category() {
  const authContext = useContext(AuthContext);
  const isUserInfosEmpty = Object.keys(authContext.userInfos).length === 0;
  console.log("infoسس", isUserInfosEmpty);
  const [categoryDatas, setCategoryDatas] = useState([]);
  const { categoryName } = useParams();

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
          setCategoryDatas(result);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourseData();
    const timer = setTimeout(() => {
      if (isUserInfosEmpty) {
        toast.error(`${errorData}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [categoryName, isUserInfosEmpty]);
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
      <div>
      {isUserInfosEmpty ? (
        <p className="text-center mx-auto text-error font-bold text-xl border border-error rounded-md p-3 mt-10 w-[90%]">
          شما به دیدن دسته بندی ها دسترسی ندارید لطفا لاگین کنید
        </p>
      ) : categoryDatas.length === 0 ? (
        <p className="text-center text-customeeleven border border-customeeleven rounded-md mt-10 mx-auto font-bold text-xl p-3">
          فعلا آموزشی برای این دسته بندی نداریم 
        </p>
      ) : (
      <ActiveSwiperEfect dataSwiper={categoryDatas} />
      )}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
