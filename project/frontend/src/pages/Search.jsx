import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TopBr from "../components/TopBr";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import CourseBox from "../components/CourseBox";

export default function Search() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const params = useParams();
  const { value } = params;
  const cleanValue = value.replace(":", "");
  const [dataSearch, setDataSearch] = useState(null);
  const getHrefArticlePath = (href) => {
    if (href && !href.includes("/article-info/")) {
      return `/article-info/${href}`;
    } else {
      return href;
    }
  };
  //   console.log("valueSearch", valueSearch);
  //   console.log("value", value);
  useEffect(() => {
    const fetchPapularData = async () => {
      setIsLoading(true);
      setError(null); // reset error before fetching
      try {
        const response = await fetch(
          `http://localhost:4000/v1/search/${cleanValue} `
        );
        const result = await response.json();
        console.log(result);
        setDataSearch(result);
        // Handle result
      } catch (error) {
        setError("Failed to fetch data");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPapularData();
  }, []);

  return (
    <div className="flex flex-col">
      <TopBr />
      <NavBar />
      <div className="flex flex-col gap-2 rtl font-iransans">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="flex flex-col">
            {/* بخش هدر و توضیحات */}
            <SectionHeader
              title="بهترین جزئیات برای جستجوی شما"
              desc="دوره های مرتبط به جستجوی شما"
              btnTitle="تمامی دوره ها"
            />
            {/* لیست دوره‌ها */}
            <div className=" bg-cover bg-center rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 mx-4">
              {dataSearch &&
                dataSearch?.allResultCourses.map((courseData) => (
                  <CourseBox key={courseData._id} courseData={courseData} />
                ))}
            </div>
            <SectionHeader
              title="بهترین جزئیات برای جستجوی شما"
              desc="   مقاله های مرتب با جستجوی شما "
              btnArticl="همه مقالات"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-[90%]   mx-auto">
              {dataSearch?.allResultArticles.map((item) => (
                <div className="flex flex-col  justify-between gap-5 bg-customenine rounded-lg p-3 shadow-xl border border-customsix w-[90%] ">
                  <div className="w-[90%] h-[300px] mx-auto">
                    <Link
                      className="cursor-pointer"
                      to={getHrefArticlePath(item?.shortName)}
                    >
                      <img
                        className="w-full h-full"
                        src={item?.cover}
                        alt="noot"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-4 bg-greydarko rounded-lg p-4 shadow-2xl  w-[90%] mx-auto ">
                    <p className="max-w-[100%] font-bold text-[17px] text-center">
                      {item?.title}
                    </p>
                    <p className="max-w-[90%] text-[12px] ">{item.descTwo}</p>
                  </div>
                  <button className="border border-customTwo-3 text-customTwo px-2 py-2 rounded-lg font-bold  text-center cursor-pointer duration-300 hover:bg-customTwo hover:text-myWhite">
                    خواندن مقاله
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
