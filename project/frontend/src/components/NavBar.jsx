import React, { useContext, useState } from "react";
import { SlBasket } from "react-icons/sl";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { GoX } from "react-icons/go";
import Botton from "./Botton";
import ButtonCustomOne from "./ButtonCustomOne";
import NavLinks from "./NavLinks";

import logo from "../../public/images/logo/1.png";
import AuthContext from "../context/authContext";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const localStorageData = JSON.parse(localStorage.getItem("user"));
  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const deletLocalStorage = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  console.log(localStorageData);
  return (
    <nav className="bg-myWhite z-50">
      <div className="flex items-center font-medium justify-between">
        <div className="hidden md:flex gap-2 ml-4 ">
          {authContext.userInfos.name ? (
            <div className="relative">
              <button
                className="bg-myWhite border-2 text-black border-customfive rounded-md font-iransans p-3 hover:bg-customfive hover:text-myWhite transition-all duration-500 flex gap-1 items-center text-customfive whitespace-nowrap"
                onClick={toggleContent}
              >
                {authContext.userInfos.name}
              </button>
              {showContent && (
                <div className="absolute top-full left-0 bg-greydarko shadow-md p-4 mt-2 rounded-lg animate-fade-in w-[200px] flex flex-col gap-2">
                  <button
                    onClick={toggleContent}
                    className="absolute top-2 left-2"
                  >
                    <GoX />
                  </button>

                  <div className="flex flex-col gap-2 mt-4">
                    <div className="flex gap-1 items-center">
                      <p className="text-sm"> نام کاربری:</p>{" "}
                      <p>
                        {authContext?.userInfos?.username
                          ? authContext?.userInfos?.username
                          : "فلانی"}
                      </p>{" "}
                    </div>
                    <button
                      onClick={deletLocalStorage}
                      className="bg-custometen text-black p-1 rounded-md duration-200 hover:bg-customeeleven"
                    >
                      {" "}
                      خروج اکانت{" "}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Botton>
              <Link to="/register">ثبت نام / ورود</Link>
            </Botton>
          )}
          <Botton>
            <IoSearchSharp />
          </Botton>
          <div className="w-14 h-12 mt-1">
            <ButtonCustomOne>
              <SlBasket />
            </ButtonCustomOne>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-iransans w-[70%]">
          <div className="w-[80%] flex">
            <NavLinks />
          </div>
          <div className="w-[20%]">
            <li>
              <Link to="" className="py-7 px-3 inline-block">
                صفحه اصلی
              </Link>
            </li>
          </div>
        </ul>
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl mt-3 md:hidden"
          >
            {open === false ? (
              <RxHamburgerMenu className="cursor-pointer" />
            ) : (
              <ImCancelCircle className="cursor-pointer" />
            )}
          </div>
          <img src={logo} alt="logo" className="md:cursor-pointer h-20" />
        </div>
        {/* nav Mobail */}
        <ul
          className={`md:hidden bg-myWhite flex flex-col fixed top-0 bottom-0 overflow-scroll w-full to py-24 pl-4
          duration-500 ${open ? "left-0" : "left-[-100%]"}`}
        >
          <li>
            <Link to="" className="py-7 px-3 inline-block">
              صفحه اصلی
            </Link>
          </li>
          <NavLinks />
          <div className="py-5 flex flex-col gap-4 bg-myWhite">
            <div className="w-[50%]">
              {authContext.userInfos.name ? (
                <Botton>{authContext.userInfos.name}</Botton>
              ) : (
                <Link to="/register">
                  <Botton>ثبت نام / ورود</Botton>
                </Link>
              )}
            </div>
            <div className="flex gap-1">
              <span className="text-xl">
                <FaPhone className="text-customfour" />
              </span>
              <p className="text-sm"> 09123934444</p>
            </div>
            <div className="flex gap-1">
              <span className="text-xl">
                <MdEmail className="text-customfour" />
              </span>
              {authContext.userInfos.email ? (
                <p className="text-sm"> {authContext.userInfos.email}</p>
              ) : (
                <p className="text-sm"> ArashSharfi1970@gmail.com</p>
              )}
            </div>
            {localStorageData !== null ? (
              <div className="w-full">
                <button
                  onClick={deletLocalStorage}
                  className="bg-custometen text-black p-1 rounded-md duration-200 hover:bg-customeeleven w-[90%] mx-auto"
                >
                  {" "}
                  خروج اکانت{" "}
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
}
