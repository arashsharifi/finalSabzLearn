import React, { useContext, useEffect, useState } from "react";

import Accordian from "./Accordian";

import AuthContext from "../context/authContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FAQAcoordian({ sessions }) {
  const authContext = useContext(AuthContext);
  const isUserInfosEmpty = Object.keys(authContext.userInfos).length === 0;
  console.log("info", authContext);
  const errorData = "شما به دیدن جلسات دسترسی ندارید لطفا لاگین کنید"; 
  useEffect(() => {
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
  }, [isUserInfosEmpty,sessions]);

  console.log(authContext.userInfos);
  return (
    <div className="p-4 bg-gray-200 rounded-lg w-full flex flex-col gap-2 bg-grey">
 
      {isUserInfosEmpty ? (
        <p className="text-center text-error font-bold text-xl">
          شما به دیدن جلسات دسترسی ندارید لطفا لاگین کنید
        </p>
      ) : sessions.length === 0 ? (
        <p className="text-center text-error font-bold text-xl">
          جلسه‌ای برای این دوره در نظر گرفته نشده است.
        </p>
      ) : (
        sessions.map((data, index) => (
          <Accordian
            key={data._id}
            title={data.title}
            time={data.time}
            index={index}
          />
        ))
      )}
      <ToastContainer />
    </div>
  );
}
