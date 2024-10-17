import React, { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { CiChat1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { IoMdAnalytics } from "react-icons/io";
import { FaFileSignature } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Outlet } from "react-router-dom";
import logo from "../../../public/images/logo/22.png";
import { Link } from "react-router-dom";
const Menus = [
  { id: 1, title: "users", icon: <MdDashboard />, link: "/p-admin/users" },
  { id: 2, title: "courses", icon: <CiUser />, gap: true, link: "/p-admin/courses" },
  { id: 3, title: "Articles", icon: <CiChat1 />, link: "/p-admin/articles" },
  { id: 4, title: "menus", icon: <SlCalender />, link: "/p-admin/menus" },
  { id: 5, title: "setting", icon: <IoMdAnalytics />, link: "" },
];

export default function IndexAdmin() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 970) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex rtl font-iransans">
      <div
        className={` h-[100vh]  ${
          open ? "w-16" : "w-72"
        } bg-customfive text-myWhite relative duration-300 flex flex-col`}
      >
        <div
          onClick={() => setOpen((preve) => !preve)}
          className="bg-myWhite absolute left-[-14px] top-9 w-11 border-2 border-customfour p-2 rounded-full flex items-center justify-center cursor-pointer"
        >
          {open ? (
            <IoIosArrowForward className="text-black text-xl" />
          ) : (
            <IoIosArrowBack className="text-black text-xl" />
          )}
        </div>
        <div
          className={`flex flex-col  ${
            open ? "h-[60px]" : "h-[150px]"
          } items-center gap-3 p-3 duration-500`}
        >
          <div
            className={`w-[130px]  duration-500 ${
              open && "rotate-[360deg] scale-0 w-0"
            }`}
          >
            <img className="w-full h-full " src={logo} alt="nooot" />
          </div>
          <p
            className={`text-white origin-left font-medium  duration-300 text-[14px] absolute ${
              open && "scale-0"
            }`}
          >
            به داشبرد ادمین خوش آمدید
          </p>
        </div>
        <div className="flex p-2">
          <ul className="flex flex-col gap-2 ml-4  w-full">
            {Menus.map((menu) => (
              <li className="w-full" key={menu.id}>
                <Link
                  className={`flex items-center gap-3 text-xl cursor-pointer duration-300 hover:bg-greydoubledarko p-2 rounded-md ${
                    menu.gap ? "mt-9" : "mt-2"
                  }`}
                  to={menu.link}
                >
                  <div className={`${open ? "text-3xl" : "text-xl"}`}>
                    {" "}
                    {menu.icon}
                  </div>
                  <span
                    className={`${open && "hidden "} origin-left duration-200`}
                  >
                    {" "}
                    {menu.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-full overflow-hidden h-[100vh] overflow-scroll  ">
        <Outlet />
      </div>
    </div>
  );
}
