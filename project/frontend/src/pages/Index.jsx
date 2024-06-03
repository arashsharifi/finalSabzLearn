import React from "react";
import Header from "../components/Header";
import LastCourses from "../components/LastCourses";
import AboutUs from "../components/AboutUs";
import PopularCourses from "../components/PopularCourses";
import PresellCourses from "../components/PresellCourses";
import LastArticles from "../components/LastArticles";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <div className=" flex flex-col font-iransans ">
      <Header />
      <LastCourses />
      <AboutUs />
      <PopularCourses />
      <PresellCourses />
      <LastArticles />
      <Footer />
    </div>
  );
}
