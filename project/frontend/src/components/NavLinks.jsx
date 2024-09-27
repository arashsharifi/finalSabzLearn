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

  // useEffect(() => {
  //   const fetchMenuData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:4000/v1/menus/topbar");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = await response.json();
  //       setMenuData(data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMenuData();
  // }, []);
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("http://localhost:4000/v1/menus");
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



  const linksNavDataaaa = menuData.map((item, index) => ({
    id: item._id,
    name: item.title,
    href: item.href,
    submenu: item.submenus && item.submenus.length > 0,
    sublinks:
      item.submenus && item.submenus.length > 0
        ? item.submenus.map((subItem, subIndex) => ({
            id: subItem._id,
            name: subItem.title,
            href: subItem.href,
          }))
        : [],
  }));

  const getHrefPath = (href) => {
    if (href && !href.includes("/course-info/")) {
      return `/course-info/${href}`;
    } else {
      return href;
    }
  };
  const getHrefPathCategory = (href) => {
    if (href && !href.includes("/category-info/")) {
      return `/category-info/${href}`;
    } else {
      return href;
    }
  };
  return (
    <div className="w-full flex flex-col md:flex-row justify-between text-sm">
      {linksNavDataaaa.map((link) => (
        <div key={link.id}>
          <Link to={getHrefPathCategory(link?.href)}>
          <div className="px-3 text-left md:cursor-pointer   group font-iransans">
              <h1
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                  setSubHeading("");
                }}
                className="flex bg-grey hover:bg-greydark  md:hover:bg-myWhite duration-300 p-3 md:p-0 m-3 md:m-0 rounded-xl md:rounded-none md:bg-myWhite justify-between items-center md:pr-0 pr-5 py-7 text-customfour"
              >
                {link.name}
                <span className="text-xl md:mt-1 md:ml-2 md:hidden inline">
                  {heading === link.name ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowUp />
                  )}
                </span>
                <span className="text-xl hidden md:block md:mt-1 md:ml-2">
                  <IoIosArrowDown />
                </span>
              </h1>

            {link.submenu && link.sublinks.length > 0 && (
              <div>
                <div className="absolute top-28 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-customfive rotate-45 shadow-lg rounded-sm"></div>
                  </div>
                  <div className="bg-greydarko p-5 grid grid-cols-2 gap-5 rounded-md z-50 text-sm">
                    {link.sublinks.map((mysublink, sublinkIndex) => (
                      <div key={sublinkIndex}>
                        <Link
                          to={getHrefPath(mysublink.href)}
                          className="text-lg font-iransans flex items-center text-customThree duration-200 hover:text-customseven"
                        >
                          {mysublink.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          </Link>
          {/* mobile menus */}
          <div className="flex flex-col md:hidden ">
            <div
              className={`${heading === link.name ? "md:hidden" : "hidden"}`}
            >
              {link.submenu && (
                <div>
                  {link.sublinks.map((mysublink, sublinkIndex) => (
                    <div key={sublinkIndex}>
                      <Link
                        to={getHrefPath(mysublink.href)}
                        className="flex justify-between items-center md:pl-0 pl-5 py-4 md:pr-0 pr-5 bg-greydark hover:bg-grey duration-300 w-[85%] mx-auto m-2 rounded-lg duration-200 hover:text-customseven"
                      >
                        {mysublink.name}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
