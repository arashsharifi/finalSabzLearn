import React from "react";
import TopBr from "../components/TopBr";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { PiMaskHappyDuotone } from "react-icons/pi";
import { FaLockOpen } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="flex flex-col">
      <TopBr />
      <NavBar />
      <div className="rtl  font-iransans LoginRegisterContainer">
        <div className=" w-[32rem] my-10 mx-10 md:mx-0 bg-myWhite border-customfour border-b-4 flex flex-col   gap-5 p-3 rounded-md shadow-md shadow-black">
          <div className="flex flex-col gap-1 p-1">
            <h1 className="font-bold text-2xl p-2 text-center">
              ورود به حساب کاربری
            </h1>
            <div className="flex gap-1 p-1 items-center self-center m-2">
              <p>خوشحالیم دوباره میبینمت دوست عزیز </p>
              <PiMaskHappyDuotone className="text-xl text-customfive" />
            </div>
            <div className="flex justify-center p-3 rounded-mg bg-greydark w-[90%] mx-auto rounded-md ">
              <div className="flex gap-2 p-1">
                <h3 className=" text-lg">کابر جدید هستید؟</h3>
                <p className="text-sm bg-greydoubledarko p-1 rounded-md whitespace-nowrap">
                  {" "}
                  <Link to="/register">ثبت نام </Link>
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <form action="#" className="w-full flex flex-col gap-4 mt-5">
                <div className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite border-greydark rounded-md shadow-md shadow-greydark">
                  <input
                    className="outline-none border-none  text-lg p-2 w-[95%] bg-myWhite placeholder:text-sm"
                    type="text"
                    placeholder="نام کاربری یا آدرس ایمیل"
                  />
                  <IoMdPerson className="text-3xl text-greydark" />
                </div>
                <div className="flex items-center bg-myWhite gap-2 w-[95%] mx-auto p-2 border border-greydark rounded-md shadow-md shadow-greydark">
                  <input
                    className="outline-none border-none  text-lg p-2 w-[95%] placeholder:text-sm bg-myWhite"
                    type="password"
                    placeholder="رمز عبور "
                  />
                  <FaLockOpen className="text-3xl text-greydark" />
                </div>
                <button className="bg-customfour duration-200 rounded-md w-[95%] py-3 hover:bg-customfive mx-auto  text-myWhite  shadow-md">
                  ورود
                </button>
                <div className="flex w-[95%]  mx-auto justify-between p-2 items-center">
                  <div class="flex items-center ">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      class="w-5 h-5 text-blue-600 bg-customenine border-greydoubledarko rounded focus:ring-customfive   focus:ring-2 focus:rounded-md"
                    />
                    <label
                      for="default-checkbox"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      من را به خاطر داشته باش
                    </label>
                  </div>
                  <a
                    className="duration-200 hover:text-customfour hover:underline"
                    href="#"
                  >
                    رمز عبور را فراموش کرده اید ؟
                  </a>
                </div>
              </form>
            </div>
            <ul className="flex flex-col gap-3  list-disc p-2 mt-2">
              <li className="text-black mr-4  list-none">سلام کابر محترم</li>
              <li className="text-greydoubledarko mr-2 text-sm">
                {" "}
                لطفا از مرورگر های مطمئن وبروز مانند گوگل کروم و فایر فکس
                استفاده کنید{" "}
              </li>
              <li className="text-greydoubledarko mr-2 text-sm">
                ما هرگز اطلاعات شمارا از طریق ایمیل درخوایت نمی کنیم
              </li>
              <li className="text-greydoubledarko text-sm mr-2">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
