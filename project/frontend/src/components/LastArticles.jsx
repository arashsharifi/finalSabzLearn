import React, { useEffect, useState } from "react";

import SectionHeader from "./SectionHeader";
import { infoData } from "../data";
import { Link } from "react-router-dom";
export default function LastArticles() {
  const [data, setData] = useState(infoData);
  const [dataArticle, setDataArticle] = useState([]);

  const getHrefArticlePath = (href) => {
    if (href && !href.includes("/article-info/")) {
      return `/article-info/${href}`;
    } else {
      return href;
    }
  };

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user")).token;
        const response = await fetch(`http://localhost:4000/v1/articles`, {
          headers: {
            Authorization: `Bearer ${token === null ? null : token}`,
          },
        });
        const result = await response.json();
        const filteredArticle = result.filter((course) =>
          course.shortName.endsWith("-v2")
        );
        if (filteredArticle) {
          setDataArticle(filteredArticle);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticleData();
  }, []);

  const limitedArticles = dataArticle.slice(0, 3);
  // console.log("limitedArticles",limitedArticles)

  return (
    <div className="flex flex-col rtl">
      <SectionHeader
        title="جدید ترین مقالات"
        desc="مقالات آموزشی بهترین راه حل ها "
        btnArticl="همه مقالات"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-[90%]   mx-auto">
        {limitedArticles.length > 0 ? (
          limitedArticles.map((item) => (
            <div className="flex flex-col  justify-between gap-5 bg-customenine rounded-lg p-3 shadow-xl border border-customsix w-[90%] ">
              <div className="w-[90%] h-[300px] mx-auto">
                <Link
                  className="cursor-pointer"
                  to={getHrefArticlePath(item?.shortName)}
                >
                  <img
                    className="w-full h-full"
                    src={`http://localhost:4000/courses/covers/${item.cover}`}
                    alt="noot"
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-4 bg-greydarko rounded-lg p-4 shadow-2xl  w-[90%] mx-auto ">
                <p className="max-w-[100%] font-bold text-[17px] text-center">
                  {item?.title}
                </p>
                <p className="max-w-[90%] text-[12px] ">{item.title}</p>
              </div>

              <Link to={getHrefArticlePath(item?.shortName)}>
                <button
                  type="button"
                  className="border border-customTwo-3 text-customTwo px-2 py-2 rounded-lg font-bold  text-center cursor-pointer duration-300 hover:bg-customTwo hover:text-myWhite"
                >
                  خواندن مقاله
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-customeeleven border border-customeeleven rounded-md mt-10 mx-auto w-[90%] font-bold text-xl p-3">
            موردی یافت نشد
          </p>
        )}
      </div>
    </div>
  );
}
