import React, { useState } from "react";
import TopBr from "../components/TopBr";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import jspic from "../img/7.png";
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

export default function ArticleInfo() {
  const [datas, setDatas] = useState(randomData);
  const num = 4.2;
  return (
    <div className="flex flex-col ">
      <TopBr />
      <NavBar />
      <BreadCrumb links={BreadCrumbData2} />
      <div className=" mx-auto flex gap-3 w-[90%]  font-iransans mt-4 rtl">
        <div className="flex flex-col gap-4 w-[70%] bg-myWhite  shadow-md shadow-greydark p-4 rounded-md h-[87vh] xl:h-[100vh] overflow-y-scroll  rtl ">
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
          <p className="p-3 bg-customsix">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sint
            voluptate ad. Ea harum corporis nesciunt provident, nobis
            dignissimos autem vero? Aliquam eius quam beatae impedit neque
            reprehenderit placeat sapiente!
          </p>
          <p className="p-3 bg-customsix">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sint
            voluptate ad. Ea harum corporis nesciunt provident, nobis
            dignissimos autem vero? Aliquam eius quam beatae impedit neque
            reprehenderit placeat sapiente!
          </p>
          <p className="p-3 bg-customsix">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sint
            voluptate ad. Ea harum corporis nesciunt provident, nobis
            dignissimos autem vero? Aliquam eius quam beatae impedit neque
            reprehenderit placeat sapiente!
          </p>
          <p className="p-3 bg-customsix">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sint
            voluptate ad. Ea harum corporis nesciunt provident, nobis
            dignissimos autem vero? Aliquam eius quam beatae impedit neque
            reprehenderit placeat sapiente!
          </p>
          <p className="p-3 bg-customsix">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sint
            voluptate ad. Ea harum corporis nesciunt provident, nobis
            dignissimos autem vero? Aliquam eius quam beatae impedit neque
            reprehenderit placeat sapiente!
          </p>
          <p className="p-3 bg-customsix">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sint
            voluptate ad. Ea harum corporis nesciunt provident, nobis
            dignissimos autem vero? Aliquam eius quam beatae impedit neque
            reprehenderit placeat sapiente!
          </p>
          <p className="p-3 bg-customsix">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sint
            voluptate ad. Ea harum corporis nesciunt provident, nobis
            dignissimos autem vero? Aliquam eius quam beatae impedit neque
            reprehenderit placeat sapiente!
          </p>
          <p className="p-3 bg-customsix">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sint
            voluptate ad. Ea harum corporis nesciunt provident, nobis
            dignissimos autem vero? Aliquam eius quam beatae impedit neque
            reprehenderit placeat sapiente!
          </p>
          <p className="p-3 bg-customsix">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas sint
            voluptate ad. Ea harum corporis nesciunt provident, nobis
            dignissimos autem vero? Aliquam eius quam beatae impedit neque
            reprehenderit placeat sapiente!
          </p>
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
