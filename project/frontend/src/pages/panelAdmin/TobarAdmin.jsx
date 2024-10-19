import React, { useContext, useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import avatar from "../../../public/images/info/boosOne.jpg";
import AuthContext from "../../context/authContext";

export default function TobarAdmin() {
  const authContext = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch("http://localhost:4000/v1/auth/me", {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    }
  }, []);

  const notifications = [
    "پیام اول",
    "پیام دوم",
    "پیام سوم",
    "پیام چهارم",
  ];

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };

  // console.log("authContext", authContext);
  // console.log("data", data);

  return (
    <div className="flex justify-between p-3 px-8 font-iransans rtl">
      <div className="flex gap-3 items-center">
        <div className="flex p-2 items-center justify-center rounded-md bg-customseven">
          <input
            className="outline-none border-none bg-customseven text-myWhite placeholder:text-myWhite"
            type="text"
            placeholder="سرچ کن"
            required
          />
        </div>
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaBell className="text-2xl text-customfive cursor-pointer" />
          {notifications.length > 0 && (
            <span className="absolute -top-4 -right-1 bg-error text-myWhite text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {notifications.length}
            </span>
          )}
          <div
            className={`absolute z-10 bg-myWhite shadow-lg rounded-md mt-2 p-3 w-64 transition-all duration-300 ease-in-out transform origin-top ${
              isModalOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <h3 className="font-bold">پیام‌ها</h3>
            {notifications.length > 0 ? (
              <ul className="mt-2">
                {notifications.map((notification, index) => (
                  <li
                    key={index}
                    className="py-1 border-b last:border-b-0 w-full flex justify-between px-4"
                  >
                    <p>{notification}</p>
                    <button className="bg-error p-1 rounded-md px-3 py-1 text-myWhite shadow-md hover:shadow-none duration-200">
                      دیدم
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-greydoubledarko mt-2">هیچ پیامی موجود نیست</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-1 items-center">
        <p className="font-bold italic duration-200 hover:text-customfive cursor-pointer">
          {authContext?.userInfos?.name ? authContext.userInfos.name : "فلانی"}
        </p>
        <div className="flex justify-center items-center p-1 w-[80px] h-[80px] rounded-full scale-100 duration-200 hover:scale-110 hover:cursor-pointer">
          <img
            src={avatar}
            alt="nooob"
            className="h-full w-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
