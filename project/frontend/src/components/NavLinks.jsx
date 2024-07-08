
import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NavLinks() {
  const [links, setLinks] = useState([]);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

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

  const frontendData = menuData.slice(0, 6);
  const backendData = menuData.slice(6, 11);
  const pythonData = menuData.slice(11, 14);
  const freelancingData = menuData.length > 14 ? menuData.slice(14) : [];

  const linksNavDataaaa = [
    {
      id: 1,
      name: "آموزش فرانت اند",
      submenu: true,
      sublinks: [
        {
          Head: "آموزش فرانت اند",
          sublink: frontendData.map((item, index) => ({
            id: index + 1,
            name: item.title,
            link: item.href,
          })),
        },
      ],
    },
    {
      id: 2,
      name: "آموزش بکند",
      submenu: true,
      sublinks: [
        {
          Head: "آموزش بکند",
          sublink: backendData.map((item, index) => ({
            id: index + 1,
            name: item.title,
            link: item.href,
          })),
        },
      ],
    },
    {
      id: 3,
      name: "آموزش پایتون",
      submenu: true,
      sublinks: [
        {
          Head: "آموزش پایتون",
          sublink: pythonData.map((item, index) => ({
            id: index + 1,
            name: item.title,
            link: item.href,
          })),
        },
      ],
    },
    {
      id: 4,
      name: "آموزش فری لنسری",
      submenu: true,
      sublinks: [
        {
          Head: "آموزش فری لنسری",
          sublink: freelancingData.map((item, index) => ({
            id: index + 1,
            name: item.title,
            link: item.href,
          })),
        },
      ],
    },
  ];

  // console.log("linksNavDataaaa", linksNavDataaaa);

  return (
    <>
      {linksNavDataaaa.map((link) => (
        <div key={link.id}>
          <div className="px-3 text-left md:cursor-pointer group font-iransans">
            <h1
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
              className="flex bg-grey hover:bg-greydark md:hover:bg-myWhite duration-300 p-3 md:p-0 m-3 md:m-0 rounded-xl md:rounded-none md:bg-myWhite justify-between items-center md:pr-0 pr-5 py-7 text-customfour"
            >
              {link.name}
              <span className="text-xl md:mt-1 md:ml-2 md:hidden inline">
                {heading === link.name ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </span>
              <span className="text-xl hidden md:block md:mt-1 md:ml-2">
                <IoIosArrowDown />
              </span>
            </h1>

            {link.submenu && (
              <div>
                <div className="absolute top-28 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-customfive rotate-45 shadow-lg rounded-sm"></div>
                  </div>
                  <div className="bg-greydarko p-5 grid grid-cols-2 gap-5 rounded-md z-50">
                    {link.sublinks.map((mysublink, sublinkIndex) => (
                      <div key={sublinkIndex}>
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
                  {link.sublinks.map((mysublink, sublinkIndex) => (
                    <div key={sublinkIndex}>
                      <h3
                        onClick={() =>
                          subHeading !== mysublink.Head
                            ? setSubHeading(mysublink.Head)
                            : setSubHeading("")
                        }
                        className="flex justify-between items-center md:pl-0 pl-5 py-4 md:pr-0 pr-5 bg-greydark hover:bg-grey duration-300 w-[85%] mx-auto m-2 rounded-lg"
                      >
                        {mysublink.Head}
                        <span className="text-xl md:mt-1 md:ml-2 inline">
                          {subHeading === mysublink.Head ? (
                            <IoIosArrowDown />
                          ) : (
                            <IoIosArrowUp />
                          )}
                        </span>
                      </h3>
                      <div
                        className={`${
                          subHeading === mysublink.Head ? "md:hidden" : "hidden"
                        }`}
                      >
                        {mysublink.sublink.map((slink) => (
                          <li
                            className="text-sm text-greydark py-3 pl-14 w-[80%] mx-auto flex"
                            key={slink.id}
                          >
                            <p className="hover:text-customfive duration-300 border w-full rounded-lg p-3 border-myWhite hover:border-customfive mx-auto">
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

