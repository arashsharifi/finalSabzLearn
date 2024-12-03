import React, { useContext, useEffect, useState } from "react";
import TopBr from "../components/TopBr";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ActiveSwiperEfect from "../components/ActiveSwiperEfect/ActiveSwiperEfect";
import VerticalMouseControl from "../components/VerticalMouseControl/VerticalMouseControl";
import { HiAdjustments } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

import { useParams } from "react-router-dom";
import AuthContext from "../context/authContext";
import { TbAxisX } from "react-icons/tb";
import { TbAxisY } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Category() {
  const authContext = useContext(AuthContext);
  const isUserInfosEmpty = Object.keys(authContext.userInfos).length === 0;
  const [categoryDatas, setCategoryDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]); // داده‌های فیلتر شده
  const [status, setStatus] = useState("default"); // استیت برای وضعیت فیلتر
  const { categoryName } = useParams();

  const [mode, setMode] = useState({
    selected: "x",
  });

  const handleToggle = (axis) => {
    setMode((prevState) => ({
      ...prevState,
      selected: axis,
    }));
  };

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
        const filteredCourses = result.filter((course) =>
          course.shortName.endsWith("-v2")
        );
        if (filteredCourses) {
          setCategoryDatas(filteredCourses);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourseData();
  }, [categoryName, isUserInfosEmpty]);

  const handleSearch = (data) => {
    const filtered = categoryDatas.filter(
      (item) => item.name.toLowerCase().includes(data.toLowerCase()) // فرض بر این است که هر آیتم یک property به نام name دارد
    );
    setFilteredData(filtered);
  };

  // console.log(filteredData,"filteredData")

  useEffect(() => {
    let filtered = [...categoryDatas];

    switch (status) {
      case "free":
        filtered = filtered.filter((course) => course.price === 0);
        break;
      case "cheapest":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "expensive":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "first":
        filtered = filtered.slice().reverse();
        break;
      case "default":
      case "last":
      default:
        filtered = [...categoryDatas];
        break;
    }

    setFilteredData(filtered);
  }, [status, categoryDatas]);

  return (
    <div className="flex flex-col">
      <TopBr />
      <NavBar />
      <div className="flex  flex-col-reverse gap-6 md:gap-0 md:flex-row w-[90%] bg-grey mx-auto justify-between items-center rtl p-3 rounded-lg shadow-xl">
        <div className="flex w-[100%] md:w-[50%]  items-center gap-3">
          <div className="flex gap-1">
            <span
              className={`p-2 rounded-lg cursor-pointer transition duration-300 ${
                mode.selected === "x" ? "bg-customfive" : "bg-greydarko"
              }`}
              onClick={() => handleToggle("x")}
            >
              <TbAxisX className="text-myWhite" />
            </span>
            <span
              className={`p-2 rounded-lg cursor-pointer transition duration-300 ${
                mode.selected === "y" ? "bg-customfive" : "bg-greydarko"
              }`}
              onClick={() => handleToggle("y")}
            >
              <TbAxisY className="text-myWhite" />
            </span>
          </div>
          <div className="w-[80%] md:w-[60%] h-50px">
            <select
              className="block cursor-pointer appearance-none w-full font-iransans font-bold text-myWhite bg-customsix  py-3 px-4 pr-8 rounded-lg  leading-tight focus:outline-none focus:ring-2 focus:ring-customseven z-20"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option className="cursor-pointer" value="default">
                مرتب سازی پیشفرض
              </option>
              <option className="cursor-pointer" value="cheapest">
                مرتب سازی بر اساس ارزان ترین
              </option>
              <option className="cursor-pointer" value="free">
                مرتب سازی بر اساس رایگان بودن
              </option>
              <option className="cursor-pointer" value="expensive">
                مرتب سازی بر اساس گرانترین بودن
              </option>
              <option className="cursor-pointer" value="first">
                مرتب سازی بر اساس اولین{" "}
              </option>
              <option value="last">مرتب سازی بر اساس آخرین</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                <path d="M10 12l-5-5h10l-5 5z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-grey w-[100%] md:w-[40%] flex items-center justify-end">
          <input
            className="outline-none border-none p-2 pr-3 rounded-lg w-[90%] md:w-[70%]"
            type="text"
            placeholder="سرچ کن "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span
            onClick={() => handleSearch(searchTerm)}
            className="bg-greydarko p-2 rounded-lg cursor-pointer"
          >
            <CiSearch className="text-myWhite" />
          </span>
        </div>
      </div>
      <div>
        {isUserInfosEmpty ? (
          <p className="text-center mx-auto text-error font-bold text-xl border border-error rounded-md p-3 mt-10 w-[90%]">
            شما به دیدن دسته بندی ها دسترسی ندارید لطفا لاگین کنید
          </p>
        ) : filteredData.length === 0 ? (
          <p className="text-center text-customeeleven border border-customeeleven rounded-md mt-10 mx-auto w-[90%] font-bold text-xl p-3">
            فعلا هیچ دوره ای نداریم
          </p>
        ) : mode.selected === "x" ? ( // اگر محور x بود
          <ActiveSwiperEfect dataSwiper={filteredData} />
        ) : (
       
          <VerticalMouseControl dataSwiper={filteredData} />
        )}
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
