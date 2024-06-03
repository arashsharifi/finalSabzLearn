import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
export default function BreadCrumb({ links }) {
  return (
    <div className="bg-greydark rounded-lg shadow-xl flex gap-1 items-center p-3 w-[90%] mx-auto rtl font-iransans">
      <span className="bg-greydarko rounded-lg p-3 flex items-center justify-center self-start ">
        <FaHome className="text-myWhite" />
      </span>
      <ul className="flex flex-col md:flex-row items-center gap-2 p-2 ">
        {links.map((link) => (
          <li
            key={link.id}
            className="flex self-start items-center underline md:no-underline whitespace-nowrap"
          >
            <Link to={link.to}>{link.title}</Link>
            {link.id !== links.length ? <IoIosArrowBack /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
