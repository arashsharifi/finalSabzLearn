import React, { useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";
import { MdOutlineTimer } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { SiTimescale } from "react-icons/si";
import { GiBookshelf } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import LandingCounter from "./LandingCounter";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Landing() {
  const [valueSraech,setValueSreach]=useState('')
  const time = 5320;
  const count = 45;
  const usersCount = 3160;
 const navigate=useNavigate()

 const searchHandler=()=>{
  if (valueSraech.length !== 0) {
    // وقتی که فیلد جستجو پر است
    console.log(valueSraech, "valueSraech");
    console.log('yyyy');
    toast.success(
      `در حال جستجو کلمه شما`,
      {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        progress: undefined,
        theme: "light",
      }
    );
    setTimeout(() => {
      navigate(`/search/:${valueSraech}`);
    }, 2000);
  } else {
    // وقتی که فیلد جستجو خالی است
    console.log(valueSraech, "valueSraech");
    console.log('nnnnn');
    toast.error(`لطفا کلمه‌ای برای جستجو وارد کنید`, {
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
 }
  return (
    // className="bg-[url('./img/background.png')]"
    <div className="flex flex-col justify-center items-center gap-10 bg-hero-paternTwo w-full h-[600px] bg-cover bg-center font-iransans">
      <h1 className="text-myWhite text-lg md:text-3xl">
        {/* بهترین دوره ها با کیفیت ترین دوره ها پرژه محور */}
        {/* <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(" !بهترین دوره ها با کیفیت ترین دوره ها پرژه محور ")
              .start()
              .pauseFor(2000)
              .deleteAll()
              .typeString("    آکادمی ما بهتریم هارو برای شما گلچین کرده است ")
              .start()
              .pauseFor(2000);
          }}
        /> */}
        <Typewriter
          options={{
            strings: [
              "!بهترین دوره ها با کیفیت ترین دوره ها پرژه محور ",
              "آکادمی ما بهتریم هارو برای شما گلچین کرده است ",
            ],
            autoStart: true,
            loop: true,
            delay: 200,
          }}
        />
      </h1>
      <h2 className="text-myWhite flex gap-2 text-sm md:text-xl">
        <p>با بهترین استادان </p>
        <span className="bg-gradient-to-r from-customfour via-customsix to-customsix inline-block  ">
          HUPDANESH
        </span>
        <p> سایت رسمی </p>
      </h2>
      <div className="bg-myWhite rounded-lg flex justify-between items-center w-[100&] md:w-[40%] rtl">
        <input
          className="outline-none border-none p-3  w-[80%]"
          type="text"
          placeholder=" ..پکیجی می خوای سرچ بزن "
          onChange={(e)=>setValueSreach(e.target.value)}
        />
        <span onClick={searchHandler} className="w-8 h-8 md:w-12  md:h-12 bg-customsix m-3 rounded-lg flex items-center justify-center cursor-pointer duration-200 shadow hover:shadow-custom">
          <CiSearch className="text-xl md:text-2xl text-myWhite " />
        </span>
      </div>
      <div className=" flex flex-col md:flex-row gap-4 justify-between w-[70%]">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-myWhite">زمان بندی پکیج ها دیقه</p>
          <LandingCounter count={time} />
          <SiTimescale className="text-[30px] md:text-[80px] text-myWhite" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-myWhite"> پکیج آموزشی داریم </p>
          <LandingCounter count={count} />
          <GiBookshelf className="text-[30px] md:text-[80px] text-myWhite" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-myWhite">کابردر سایت</p>
          <LandingCounter count={usersCount} />
          <PiStudent className="text-[30px] md:text-[80px] text-myWhite" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
