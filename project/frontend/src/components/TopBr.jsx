import React, { useEffect, useState } from "react";

import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { dataAboutCategory } from "../data";
import { Link } from "react-router-dom";

export default function TopBr() {
  const [category, setCategory] = useState(dataAboutCategory);
  let [open, setOpen] = useState(false);
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("http://localhost:4000/v1/menus/topbar");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!menuData) {
    return <div>No data available</div>;
  }

  const getHrefPath = (href) => {
    if (href && !href.includes("/course-info/")) {
      return `/course-info/${href}`;
    } else {
      return href;
    }
  };

  console.log("menuData", menuData);

  const getRandomItems = (data, count) => {
    const shuffled = data.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomMenuItems = getRandomItems(menuData, 6);

  return (
    <div className="hidden lg:block shadow-md w-full  font-iransans bg-grey">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold  flex gap-4 text-2xl cursor-pointer items-center ">
          <div className="flex gap-1">
            <span className="text-xl">
              <FaPhone className="text-customfour" />
            </span>
            <p className="text-sm"> 09365305248</p>
          </div>
          <div className="flex gap-1">
            <span className="text-xl">
              <MdEmail className="text-customfour" />
            </span>
            <p className="text-sm"> ArashSharfi1970@gmail.com</p>
          </div>
        </div>

        <ul
          className={`hidden lg:flex pb-12 md:pb-0 text-[12px] gap-5   md:items-center absolute md:static shadow-lg md:shadow-none md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px]"
          } `}
        >
          {randomMenuItems.map((item) => (
            <li className="font-iransans" key={item._id}>
              {/* <a href={item.href}>{item.title}</a> */}
              <Link to={getHrefPath(item.href)}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
