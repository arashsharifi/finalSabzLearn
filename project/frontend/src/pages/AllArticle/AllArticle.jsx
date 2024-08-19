import React, { useEffect, useState } from "react";

import TopBr from "../../components/TopBr";
import NavBar from "../../components/NavBar";
import BreadCrumb from "../../components/BreadCrumb";

import { IoSearchOutline } from "react-icons/io5";
import Footer from "../../components/Footer";
import { BreadCrumbData2, paginationAllcourseData } from "../../data";
import ReactPaginate from "react-paginate";
import ArticleCart from "../../components/ArticleCart";

export default function AllArticle() {
  const [serachTrem, setSearchTrem] = useState("");
  const [dataAllCourse, setDataAllCourse] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("user")).token;
        const response = await fetch(`http://localhost:4000/v1/articles`, {
          headers: {
            Authorization: `Bearer ${token === null ? null : token}`,
          },
        });
        const result = await response.json();
        console.log(result);
        if (result) {
          setDataAllCourse(result);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCourseData();
  }, []);
  console.log(typeof dataAllCourse);

  // const searchdeProduct = paginationAllcourseData.filter((item) => {
  //   if (serachTrem.value === "") return item;
  //   if (item.nameC.toLowerCase().includes(serachTrem.toLowerCase()))
  //     return item;
  // });

  // const productPerPage = 8;
  // const visitedPage = pageNumber * productPerPage;
  // const displayPage = searchdeProduct.slice(
  //   visitedPage,
  //   visitedPage + productPerPage
  // );
  // const pageCount = Math.ceil(searchdeProduct.length / productPerPage);
  // console.log(pageCount);
  // const changePage = ({ selected }) => {
  //   setPageNumber(selected);
  // };

  const searchdeProduct = dataAllCourse.filter((item) => {
    if (serachTrem.value === "") return item;
    if (item.title.toLowerCase().includes(serachTrem.toLowerCase()))
      return item;
  });

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchdeProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(searchdeProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
 
    <div className="font-iransans ">
      <TopBr />
      <NavBar />
      <BreadCrumb links={BreadCrumbData2} />
      <div className="flex justify-center p-2 w-[100%] rtl mt-8">
        <div className="flex items-center p-2 gap-1 border  rounded-md w-[50%] md:w-[50%]">
          <input
            className="outline-none border-none w-[95%]"
            type="text"
            placeholder="  مقاله مورد نظر را وارد کنید   "
            value={serachTrem}
            onChange={(event) => setSearchTrem(event.target.value)}
          />
          <IoSearchOutline />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-7 w-[100%] p-8 bg-myWhite  mt-6 ">
          {displayPage.map((item) => (
            <ArticleCart key={item.id} data={item} />
          ))}
        </div>
      </div>
      <div className="w-[50%] mx-auto  p-3 flex justify-center ">
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          previousLabel="قبلی"
          nextLabel="بعدی"
          className="flex gap-3 p-3  rounded-xl text-black paginatinBttns"
        />
      </div>
      <Footer />
    </div>
  );
}
