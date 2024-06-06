import React, { useState } from "react";
import TopBr from "../components/TopBr";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";

import jspic from "../img/7.png";
import jspic1 from "../img/4.png";
import jspic2 from "../img/3.jpg";
import StarRating from "../components/StarRating";
import { BreadCrumbData2, randomData } from "../data";
import { IoIosArrowBack } from "react-icons/io";
//eye
import { FaRegEye } from "react-icons/fa6";
//watch
import { BsStopwatch } from "react-icons/bs";
//person
import { IoPerson } from "react-icons/io5";
//folder
import { MdOutlineFolderOpen } from "react-icons/md";
import Botton from "../components/Botton";

export default function ArticleInfo() {
  const [datas, setDatas] = useState(randomData);
  const num = 4.2;
  return (
    <div className="flex flex-col ">
      <TopBr />
      <NavBar />
      <BreadCrumb links={BreadCrumbData2} />
      <div className=" mx-auto flex gap-3 w-[90%]  font-iransans mt-4 rtl">
        <div className="flex flex-col gap-4 w-[70%] bg-myWhite  shadow-md shadow-greydark p-4 rounded-md h-[87vh] xl:h-[120vh] overflow-y-scroll  rtl ">
          <h1 className="p-2 border-b border-greydark font-bold text-lg">
            معرفی بهترین سایت های آموزش جوا اسکریپت [تجربه محور ] آموزش رایگان
          </h1>
          <div className="flex flex-col gap-4 p-2 md:p-0 border border-greydark md:border-none shadow-md shadow-greydark md:shadow-none">
            <div className="flex gap-4 p-1 items-center">
              <div className="flex gap-2 text-greydarko items-center p-1">
                <MdOutlineFolderOpen className="text-xl" />
                <p className="text-sm">جاوا اسکریپت</p>
              </div>
              <div className="flex gap-2 text-greydarko items-center p-1">
                <IoPerson className="text-xl" />
                <p className="text-sm"> ارسال شده توسط آرش </p>
              </div>
              <div className="flex gap-2 text-greydarko items-center p-1">
                <BsStopwatch className="text-xl" />
                <p className="text-sm">ارسالی آرش </p>
              </div>
              <div className="flex gap-2 text-greydarko items-center p-1">
                <FaRegEye className="text-xl" />
                <p className=" flex text-sm">
                  {" "}
                  <span className="font-bold">k</span> <span>223</span>
                </p>
              </div>
            </div>
            <div className=" mx-auto w-[80%] h-[350px]">
              <img className="h-full w-full" src={jspic} alt="jspic" />
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2">
                <StarRating rate={4} />
                <p>{num.toLocaleString("fa-IR")}</p>
                <p>امتیاز</p>
              </div>
              <p className="p-3">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-2 md:p-0 border border-greydark md:border-none shadow-md shadow-greydark md:shadow-none">
            <div className="flex flex-col gap-3 bg-grey rounded-lg w-[95%] mx-auto p-4">
              <p className="font-bold text-lg">
                رای طراحان رایانه ای علی الخصوص طراحان خلاقی،
              </p>
              <p className="text-customseven cursor-pointer duration-150 hover:underline ">
                رای طراحان رایانه ای علی الخصوص طراحان خلاقی،
              </p>
              <p className="text-customseven  cursor-pointer duration-150 hover:underline ">
                رای طراحان رایانه ای علی الخصوص طراحان خلاقی،
              </p>
              <p className="text-customseven  cursor-pointer duration-150 hover:underline ">
                رای طراحان رایانه ای علی الخصوص طراحان خلاقی،
              </p>
              <p className="text-customseven  cursor-pointer duration-150 hover:underline ">
                رای طراحان رایانه ای علی الخصوص طراحان خلاقی،
              </p>
            </div>
            <div className="w-[90%] h-[360px] mx-auto">
              <img className="h-full w-full" src={jspic1} alt="nopic" />
            </div>
            <div className="flex flex-col gap-3 p-2">
              <h2 className="font-bold text-xl ml-3">
                بهترین دوره های سایت های آموزشی{" "}
              </h2>
              <p className="p-3">
                دی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. م و دشواری
                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-2 md:p-0 border border-greydark md:border-none shadow-md shadow-greydark md:shadow-none">
            <div className="flex flex-col gap-3 p-2">
              <h2 className="font-bold text-xl ml-3">
                بهترین دوره های سایت های آموزشی{" "}
              </h2>
              <p className="p-3">
                دی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. م و دشواری
                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-2">
              <h2 className="font-bold text-xl ml-3">
                بهترین دوره های سایت های آموزشی{" "}
              </h2>
              <p className="p-3">
                دی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. م و دشواری
                موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
                اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
            </div>
            <div className="w-[90%] h-[360px] mx-auto">
              <img className="h-full w-full" src={jspic2} alt="nopic" />
            </div>
          </div>
          <div className="flex flex-col gap-4 p-2 md:p-0 border border-greydark md:border-none shadow-md shadow-greydark md:shadow-none">
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                <label for="comment" className="sr-only">
                  به عنوان user
                </label>
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                  placeholder="ی توضیحی بنویس "
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <Botton>فرستادن دیدگاه</Botton>
                <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                  <button
                    type="button"
                    className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 12 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                      />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    <span className="sr-only">Set location</span>
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                    <span className="sr-only">Upload image</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[30%]  ">
          <div className="flex flex-col bg-myWhite  gap-2 items-center justify-center p-2 rounded-md shadow-md shadow-greydark relative overflow-hidden">
            <p className="font-bold self-start mr-8">پر امتیاز ترین دوره ها </p>
            {datas.map((randomData) => (
              <div key={randomData.id} className="flex gap-1">
                <div className="w-20 h-12 overflow-hidden rounded-md">
                  <img className="h-full w-full " src={randomData.img} />
                </div>
                <p>{randomData.title}</p>
              </div>
            ))}
            <div className="absolute w-10 h-10 bg-customfive top-0 right-[-20px] rounded-md rotate-45"></div>
          </div>
          <div className="flex flex-col bg-myWhite  gap-2 items-center justify-center rounded-md shadow-md shadow-greydark relative overflow-hidden p-4">
            <p className="font-bold self-start mr-8">دسترسی سریع </p>

            <div className="flex gap-3 border-b border-greydark w-full cursor-pointer">
              <IoIosArrowBack />
              <p>صفحه اصلی </p>
            </div>
            <div className="flex gap-3 border-b border-greydark w-full cursor-pointer">
              <IoIosArrowBack />
              <p> فرانت اند </p>
            </div>
            <div className="flex gap-3 border-b border-greydark w-full cursor-pointer">
              <IoIosArrowBack />
              <p> امنیت </p>
            </div>
            <div className="flex gap-3 border-b border-greydark w-full cursor-pointer">
              <IoIosArrowBack />
              <p> پایتون </p>
            </div>
            <div className="flex gap-3 border-b border-greydark w-full cursor-pointer">
              <IoIosArrowBack />
              <p> مهارت های نرم </p>
            </div>
            <div className="absolute w-10 h-10 bg-customfive top-0 right-[-20px] rounded-md rotate-45"></div>
          </div>
          <div className="flex flex-col gap-5 bg-myWhite   items-center justify-center p-4 rounded-md shadow-md shadow-greydark relative overflow-hidden">
            <p className="font-bold self-start mr-8"> مقاله های جدید </p>

            <div className="flex gap-3 border-b border-greydark w-full">
              <IoIosArrowBack />
              <a
                className="duration-200 hover:underline hover:text-customfour text-[15px]"
                href="#"
              >
                {" "}
                نحوه نصب کتاب خونه پایتون آموزش نصب{" "}
              </a>
            </div>
            <div className="flex gap-3 border-b border-greydark w-full">
              <IoIosArrowBack />
              <a
                className="duration-200 hover:underline hover:text-customfour text-[15px]"
                href="#"
              >
                {" "}
                نحوه نصب کتاب خونه پایتون آموزش نصب{" "}
              </a>
            </div>
            <div className="flex gap-3 border-b border-greydark w-full">
              <IoIosArrowBack />
              <a
                className="duration-200 hover:underline hover:text-customfour text-[15px]"
                href="#"
              >
                {" "}
                نحوه نصب کتاب خونه پایتون آموزش نصب{" "}
              </a>
            </div>
            <div className="flex gap-3 border-b border-greydark w-full">
              <IoIosArrowBack />
              <a
                className="duration-200 hover:underline hover:text-customfour text-[15px]"
                href="#"
              >
                {" "}
                نحوه نصب کتاب خونه پایتون آموزش نصب{" "}
              </a>
            </div>
            <div className="flex gap-3 border-b border-greydark w-full">
              <IoIosArrowBack />
              <a
                className="duration-200 hover:underline hover:text-customfour text-[15px]"
                href="#"
              >
                {" "}
                نحوه نصب کتاب خونه پایتون آموزش نصب{" "}
              </a>
            </div>
            <div className="absolute w-10 h-10 bg-customfive top-0 right-[-20px] rounded-md rotate-45"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
