import React, { useContext, useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";

import { FaHome } from "react-icons/fa";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { ImExit } from "react-icons/im";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BiSolidCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import TobarAdmin from "./TobarAdmin";
import { GrArticle } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo from "../../../public/images/logo/22.png";
import swal from "sweetalert";
import AuthContext from "../../context/authContext";
export default function IndexAdmin() {
  const [open, setOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  
  const handleExitClick = () => {
    swal({
      title: "آیا مطمئن هستید؟",
      text: "می‌خواهید خارج شوید؟",
      icon: "warning",
      buttons: "اوکی",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        authContext.logout();
        navigate("/");
        swal("شما خارج شدید!", {
          icon: "success",
        });
      }
    });
  };
  const Menus = [
    { id: 1, title: "صفحه اصلی", icon: <FaHome />, link: "/p-admin/users" },
    {
      id: 2,
      title: "دوره ها ",
      icon: <MdOutlineCastForEducation />,
      gap: true,
      link: "/p-admin/courses",
    },
    {
      id: 3,
      title: "مقاله ها ",
      icon: <GrArticle />,
      link: "/p-admin/articles",
    },
    { id: 4, title: "کاربران", icon: <CiUser />, link: "/p-admin/users" },
    {
      id: 5,
      title: "کد های تخفیف ",
      icon: <RiDiscountPercentLine />,
      link: "",
      onClick: () => console.log("yoo"),
    },
    {
      id: 6,
      title: "دسته بندی ها",
      icon: <BiSolidCategory />,
      link: "",
      onClick: () => console.log("yoo"),
    },
    {
      id: 7,
      title: "خروج",
      icon: <ImExit />,
      link: "",
      onClick: handleExitClick,
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 970) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex rtl font-iransans">
      <div
        className={` h-[100vh]  ${
          open ? "w-16" : "w-72"
        } bg-customfive text-myWhite relative duration-300 flex flex-col`}
      >
        <div
          onClick={() => setOpen((preve) => !preve)}
          className="bg-myWhite absolute left-[-14px] top-9 w-11 border-2 border-customfour p-2 rounded-full flex items-center justify-center cursor-pointer"
        >
          {open ? (
            <IoIosArrowForward className="text-black text-xl" />
          ) : (
            <IoIosArrowBack className="text-black text-xl" />
          )}
        </div>
        <div
          className={`flex flex-col  ${
            open ? "h-[60px]" : "h-[150px]"
          } items-center gap-3 p-3 duration-500`}
        >
          <div
            className={`w-[130px]  duration-500 ${
              open && "rotate-[360deg] scale-0 w-0"
            }`}
          >
            <img className="w-full h-full " src={logo} alt="nooot" />
          </div>
          <p
            className={`text-white origin-left font-medium  duration-300 text-[14px] absolute ${
              open && "scale-0"
            }`}
          >
            به داشبرد ادمین خوش آمدید
          </p>
        </div>

        <div className="flex p-2">
          <ul className="flex flex-col gap-2 ml-4  w-full">
            {Menus.map((menu) => (
              <li className="w-full" key={menu.id}>
                <Link
                  className={`flex items-center gap-3 text-xl cursor-pointer duration-300 hover:bg-greydoubledarko p-2 rounded-md ${
                    menu.gap ? "mt-9" : "mt-2"
                  }`}
                  to={menu.link}
                  onClick={menu.onClick} // اضافه کردن onClick به Link
                >
                  <div className={`${open ? "text-3xl" : "text-xl"}`}>
                    {menu.icon}
                  </div>
                  <span
                    className={`${open && "hidden "} origin-left duration-200`}
                  >
                    {menu.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-full overflow-hidden h-[100vh] overflow-scroll  ">
        <TobarAdmin />
        <Outlet />
      </div>
    </div>
  );
}
