import React, { useState, useEffect } from "react";
import TopBr from "../components/TopBr";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import SkillBar from "../components/SkillBar/SkillBar";
import FAQAcoordian from "../components/FAQAcoordian";
//تقویم
import { FaCalendarAlt } from "react-icons/fa";
//ساعت
import { MdOutlineWatchLater } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { FaPlay } from "react-icons/fa";
import { PiSealWarning } from "react-icons/pi";
import { FaUserAstronaut } from "react-icons/fa";

import { PiStudentBold } from "react-icons/pi";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FaRegEye } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import CourseMainInfo from "../components/CourseMainInfo";

import pico from "../img/background.png";
import pico1 from "../img/background2.png";
import avatar from "../img/boosOne.jpg";

import { BreadCrumbData, lessonStatus, randomData } from "../data";
import { useParams } from "react-router-dom";

export default function CourseInfo() {
  const [boxDitals, setBoxDitails] = useState(lessonStatus);
  const [randomDatas, setRandomDatas] = useState(randomData);

  const milliseconds1 = Number(boxDitals[0].update);
  const date = new Date(milliseconds1).toLocaleDateString("fa-IR");
  const hour = Number(boxDitals[0].hourCourse);

  const { courseName } = useParams();
  useEffect(() => {
    console.log(courseName);
    fetch(`http://localhost:4000/v1/courses/${courseName}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user")).token
        }`,
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []);
  return (
    <div className="flex flex-col font-iransans">
      <TopBr />
      <NavBar />
      <BreadCrumb links={BreadCrumbData} />
      <CourseMainInfo />
      <div className=" p-3 flex flex-col-reverse md:flex-row w-[96%] mx-auto  mt-5 ">
        <div className="w-[100%] md:w-[30%] bg-myWhite  flex flex-col gap-3 p-3 rounded-sm rtl">
          <div className="bg-myWhite flex p-4 items-center justify-center shadow-md shadow-greydark">
            <button className="bg-greentoond px-12  duration-200 text-myWhite flex py-3 items-center justify-center gap-1 hover:bg-greenyavash cursor-pointer rounded-sm">
              <PiStudentBold className="text-lg" />
              <p className="whitespace-nowrap">شما دانشجو این دوره هستی </p>
            </button>
          </div>
          <div className="flex flex-col bg-myWhite shadow-md shadow-greydark p-1 ">
            <div className="flex flex-col gap-1  items-center justify-center p-2">
              <div className="flex gap-2 p-2 items-center text-black border border-greydarko px-12 rounded-md">
                <span className="bg-greydarko rounded-md p-3">187</span>
                <p className="whitespace-nowrap">:تعداد دانش آموزان </p>
                <PiStudentBold className="text-2xl" />
              </div>
              <div className="flex gap-4 p-3">
                <div className="flex gap-2 text-black">
                  <HiOutlineChatBubbleLeftRight className="text-lg" />
                  <p className="flex gap-1">
                    <span>67</span> <p>دیدگاه</p>
                  </p>
                </div>
                <div className="flex gap-2 text-black">
                  <FaRegEye className="text-lg" />
                  <p className="flex gap-1">
                    <span>14,230</span> <p>بازدید</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-myWhite shadow-md shadow-greydarko p-2 flex flex-col">
            <div className="flex gap-2 ">
              <p>لینک کوناه </p>
              <FaLink className="text-2xl" />
            </div>
            <div className="border p-1 border-greydark">
              <a className="duration-100 hover:underline" href="#">
                http://localhost:3000/course-info/1
              </a>
            </div>
          </div>
          <div className="bg-myWhite shadow-md shadow-greydarko p-2 flex flex-col">
            <p className="text-lg font-bold"> سر فصل های دوره </p>
            <p className="text-md ">
              برای مشاهده و یا دانلود دوره روی کلمه
              <span className="text-customseven cursor-pointer duration-150 text-2xl hover:text-customfive">
                کلید
              </span>
            </p>
          </div>
          <div className="bg-myWhite shadow-md shadow-greydarko p-2 flex flex-col gap-2">
            <p>دوره های مرتبط </p>
            <div className="flex flex-col gap-2 items-center justify-center">
              {randomDatas.map((randomData) => (
                <div key={randomData.id} className="flex gap-1">
                  <div className="w-20 h-12 rounded-md">
                    <img className="h-full w-full" src={randomData.img} />
                  </div>
                  <p>{randomData.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-myWhite shadow-md shadow-greydarko p-2 flex flex-col gap-2">
            <p>دوره های مرتبط </p>
            <div className="flex flex-col gap-2 items-center justify-center">
              {randomDatas.map((randomData) => (
                <div key={randomData.id} className="flex gap-1">
                  <div className="w-20 h-12 rounded-md">
                    <img className="h-full w-full" src={randomData.img} />
                  </div>
                  <p>{randomData.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-myWhite shadow-md shadow-greydarko p-2 flex flex-col gap-2">
            <p>دوره های مرتبط </p>
            <div className="flex flex-col gap-2 items-center justify-center">
              {randomDatas.map((randomData) => (
                <div key={randomData.id} className="flex gap-1">
                  <div className="w-20 h-12 rounded-md">
                    <img className="h-full w-full" src={randomData.img} />
                  </div>
                  <p>{randomData.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[70%] m-2 flex flex-col gap-2 ">
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full">
              <div className="shadow-md shadow-greydark bg-myWhite flex gap-2 border border-greydark rounded-md px-2 py-2 text-sm whitespace-nowrap">
                <div className="w-10 h-10 p-2">
                  <FaCalendarAlt className="w-full h-full text-customfive" />
                </div>
                <div className="flex flex-col">
                  <p>آخرین بروز رسانی </p>
                  <p>{date}</p>
                </div>
              </div>
              <div className="shadow-md shadow-greydark bg-myWhite flex gap-2 border border-greydark rounded-md px-2 py-2 text-sm whitespace-nowrap ">
                <div className="w-10 h-10 p-2">
                  <MdOutlineWatchLater className="w-full h-full text-customfive" />
                </div>
                <div className="flex flex-col">
                  <p>مدت زمان دوره </p>
                  <div className="flex gap-1">
                    {" "}
                    <p>ساعت :</p>
                    <p>{hour.toLocaleString("fa-IR")}</p>
                  </div>
                </div>
              </div>
              <div className="shadow-md shadow-greydark bg-myWhite flex gap-2 border border-greydark rounded-md px-2 py-2 text-sm whitespace-nowrap">
                <div className="w-10 h-10 p-2">
                  <PiStudentFill className="w-full h-full text-customfive" />
                </div>
                <div className="flex flex-col">
                  <p>وضعیت دوره </p>
                  <p className="font-bold text-customfive">
                    {boxDitals[0].statusCourse}
                  </p>
                </div>
              </div>
              <div className="shadow-md shadow-greydark bg-myWhite flex gap-2 border border-greydark rounded-md px-2 py-2 text-sm whitespace-nowrap">
                <div className="w-10 h-10 p-2">
                  <FaPlay className="w-full h-full text-customfive" />
                </div>
                <div className="flex flex-col">
                  <p>مشاهده</p>
                  <p className="font-bold text-customfive">
                    {boxDitals[0].watch}
                  </p>
                </div>
              </div>
              <div className="shadow-md shadow-greydark bg-myWhite flex gap-2 border border-greydark rounded-md px-2 py-2 text-sm whitespace-nowrap">
                <div className="w-10 h-10 p-2">
                  <PiSealWarning className="w-full h-full text-customfive" />
                </div>
                <div className="flex flex-col">
                  <p>پیش نیاز</p>
                  <p className="font-bold ">{boxDitals[0].prerequisite}</p>
                </div>
              </div>
              <div className="shadow-md shadow-greydark bg-myWhite flex gap-2 border border-greydark rounded-md px-2 py-2 text-sm whitespace-nowrap">
                <div className="w-10 h-10 p-2">
                  <FaUserAstronaut className="w-full h-full text-customfive" />
                </div>
                <div className="flex flex-col">
                  <p>روش پشتیبانی </p>
                  <p className="font-bold ">{boxDitals[0].SupportMethod}</p>
                </div>
              </div>
            </div>
          </div>

          <SkillBar />
          <div className=" w-full h-[80vh] flex flex-col gap-3 p-3 rtl overflow-hidden overflow-scroll">
            <h1 className="text-2xl font-bold">
              آموزش 20 کتاب خانه جاوا اسکریپت مخصوص بازار کار{" "}
            </h1>
            <div className="w-[80%] rounded-lg mx-auto">
              <img className="w-full h-full" src={pico} alt="nooot" />
            </div>

            <p className="text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و
            </p>
            <p className="text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و نیاز، و کاربردهای متنوع
              با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
              درصد گذشته حال و
            </p>
            <div className="w-[80%] rounded-lg mx-auto">
              <img className="w-full h-full" src={pico1} alt="nooot" />
            </div>
            <p className="text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و
            </p>
            <p className="text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و نیاز، و کاربردهای متنوع
              با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
              درصد گذشته حال و
            </p>
            <div className="flex flex-col md:flex-row gap-7">
              <button className="bg-myWhite text-greenyavash border border-greenyavash px-9 py-3 rounded-md duration-200  hover:bg-greenyavash hover:text-myWhite">
                دانلود همگانی ویدیوها{" "}
              </button>
              <button className="bg-myWhite text-greenyavash border border-greenyavash px-9 py-3 rounded-md duration-200  hover:bg-greenyavash hover:text-myWhite">
                دانلود همگانی ویدیوها{" "}
              </button>
            </div>
            <FAQAcoordian />
          </div>
          <div className="bg-myWhite w-full h-[200px] rounded-md border border-greydark shadow-lg mt-2 shadow-greydark flex flex-col p-2">
            <div className="flex w-full justify-between items-center p-1">
              <button className="bg-greentoond px-4  duration-200 text-myWhite flex py-2 items-center justify-center gap-1 hover:bg-greenyavash cursor-pointer rounded-md">
                <FaChalkboardTeacher />
                <p>مدرس</p>
              </button>
              <div className="flex justify-between   w-[70%] md:w-[50%] lg:w-[40%]">
                <div className="flex flex-col  items-center justify-center p-1">
                  <p className="text-sm lg:text-[17px] whitespace-nowrap">
                    آرش امیر شریفی تکمه داش{" "}
                  </p>
                  <p className="border-b-2 border-customfour">
                    Front-End developer
                  </p>
                </div>
                <div className="w-[90px] h-[120px] border-2 border-customfour overflow-hidden rounded-md">
                  <img
                    className="w-full h-full"
                    src={avatar}
                    alt="no avatar pic"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-1">
              <p className="text-end  text-[12px] md:text-sm lg:text-[16px] ">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم استد، کتابهای زیادی
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// import React from "react";
// export default function CourseInfo() {
//   return <div>CourseInfo</div>;
// }
