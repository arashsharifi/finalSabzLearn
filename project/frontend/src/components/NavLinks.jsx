import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

import { linksNavData } from "../data";
export default function NavLinks() {
  const [links, setLinks] = useState(linksNavData);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link) => (
        <div key={link.id}>
          <div className="px-3  text-left md:cursor-pointer  group font-iransans">
            <h1
              // منظور این خط ینی چی ؟؟
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
              className="flex bg-grey hover:bg-greydark md:hover:bg-myWhite duration-300 p-3 md:p-0 m-3 md:m-0 rounded-xl md:rounded-none md:bg-myWhite justify-between items-center md:pr-0 pr-5 py-7 text-customfour "
            >
              {link.name}
              <span className="text-xl  md:mt-1 md:ml-2 md:hidden inline">
                {heading === link.name ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </span>
              <span className="text-xl hidden md:block  md:mt-1 md:ml-2 ">
                <IoIosArrowDown />
              </span>
            </h1>

            {link.submenu && (
              <div>
                <div className="absolute top-28 hidden group-hover:md:block hover:md:block ">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-customfive rotate-45 shadow-lg rounded-sm"></div>
                  </div>
                  <div className="bg-greydarko p-5 grid grid-cols-2 gap-5 rounded-md z-50 ">
                    {link.sublinks.map((mysublink) => (
                      <div key={mysublink.id}>
                        <h2 className="text-lg font-iransans flex items-center text-customThree">
                          {mysublink.Head}
                        </h2>
                        {mysublink.sublink.map((slink) => (
                          <li className="text-sm text-greydark" key={slink.id}>
                            <Link
                              to={slink.link}
                              className="hover:text-customfive duration-300"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* mobile menus */}
          <div className="block md:hidden">
            <div
              className={`${heading === link.name ? "md:hidden" : "hidden"}`}
            >
              {link.submenu && (
                <div>
                  {link.sublinks.map((myslinks) => (
                    <div key={myslinks.id}>
                      <h3
                        onClick={() =>
                          subHeading !== myslinks.Head
                            ? setSubHeading(myslinks.Head)
                            : setSubHeading("")
                        }
                        className="flex justify-between items-center  md:pl-0 pl-5 py-4 md:pr-0 pr-5 bg-greydark hover:bg-grey duration-300 w-[85%] mx-auto m-2 rounded-lg"
                      >
                        {myslinks.Head}
                        <span className="text-xl  md:mt-1 md:ml-2 inline">
                          {subHeading === myslinks.Head ? (
                            <IoIosArrowDown />
                          ) : (
                            <IoIosArrowUp />
                          )}
                        </span>
                      </h3>
                      <div
                        className={`${
                          subHeading === myslinks.Head ? "md:hidden" : "hidden"
                        }`}
                      >
                        {myslinks.sublink.map((slink) => (
                          <li
                            className="text-sm  text-greydark py-3 pl-14 w-[80%] mx-auto  flex "
                            key={slink.id}
                          >
                            <p className="hover:text-customfive duration-300 border w-full rounded-lg   p-3 border-myWhite hover:border-customfive mx-auto">
                              <Link to={slink.link} className="w-full">
                                {slink.name}
                              </Link>
                            </p>
                          </li>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
