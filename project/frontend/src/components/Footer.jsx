import React, { useState } from "react";
import { AiFillSlackCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import InputTextArea from "../components/UI/InputTextArea";
import { useForm } from "../hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../validators/rules";
export default function Footer() {
  const [formState, onInputsHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );
const [resetInput, setResetInput] = useState(0);
  const addNewUserNewsLetter = async (e) => {
    e.preventDefault();
    const newEmail = {
      email: formState.inputs.email.value,
    };
    try {
      const response = await fetch("http://localhost:4000/v1/newsletters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmail),
      });

      if (response.ok) {
        toast.success(
          `${formState?.inputs?.username?.value} 🎈✨ تبریک شما عضو خبرنامه شدی`,
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
            progress: undefined,
            theme: "light",
          }
        );
        // setTimeout(() => {
        //   navigate("/");
        // }, 3000);
      } else {
        const errorData = await response.json();
        if (
          // errorData.includes("there is no user with this email or username")
          errorData
        ) {
          toast.error(`${errorData}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="flex flex-col justify-between gap-10  rtl   mt-10 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-grey rounded-lg shadow-md  w-[80%] mx-auto relative  ">
        <div className="flex flex-col  h-[90%] gap-5 p-4">
          <h2 className="font-bold relative ">
            با تولید سادگی نامفهو
            <div className="w-8 h-8 opacity-70 bg-customfive rounded-lg rotate-45 absolute top-0 right-6"></div>
          </h2>
          <p className="text-[13px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
          </p>
        </div>
        <div className="flex flex-col  h-[90%] gap-5 p-4">
          <h2 className="font-bold relative ">
            با تولید سادگی نامفهو
            <div className="w-8 h-8 opacity-70 bg-customfive rounded-lg rotate-45 absolute top-0 right-6"></div>
          </h2>
          <p className="text-[13px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
          </p>
          <h2 className="font-bold relative ">
            جهت اطلاع از آخرین اخبار و تخفیف های سایت مشارک شوید
            <div className="w-8 h-8 opacity-70 bg-customfive rounded-lg rotate-45 absolute top-0 right-6"></div>
          </h2>
          <div className="flex p-1">
            <div className="flex">
              <form className="flex">
                <InputTextArea
                  id="email"
                  className="flex items-center gap-2 w-[95%] overflow-hidden border-2 bg-myWhite rounded-md shadow-md text-[10px] placeholder:text-[10px]"
                  element="input"
                  type="email"
                  validations={[
                    requiredValidator(),
                    minValidator(4),
                    emailValidator(),
                  ]}
                  icons="email"
                  placeholder="ایمیل را وارد نمایید"
                  onInputsHandler={onInputsHandler}
                />
                <button
                  className="bg-greydoubledarko text-myWhite py-1 px-2 rounded-md text-sm border border-1 duration-200 hover:bg-success"
                  onClick={addNewUserNewsLetter}
                  type="submit"
                >
                  عضویت
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-[90%] gap-5 p-4">
          <h2 className="font-bold relative ">
            با تولید سادگی نامفهو
            <div className="w-8 h-8 opacity-70 bg-customfive rounded-lg rotate-45 absolute top-0 right-6"></div>
          </h2>
          <div className="flex justify-between flex-wrap max-w-[80%]">
            <p className="duration-300 hover:text-customfive my-3 cursor-pointer">
              <a href="#">آموزش پکیج nodejs</a>
            </p>

            <Link to="/contact">
              <p className="duration-300 hover:text-customfive my-3 cursor-pointer text-xl italic font-bold">
                ارتباط با ما
              </p>
            </Link>
            <p className="duration-300 hover:text-customfive my-3 cursor-pointer ">
              <a href="#">آموزش پکیج php</a>
            </p>
            <p className="duration-300 hover:text-customfive my-3 cursor-pointer">
              <a href="#">آموزش پکیج sql</a>
            </p>
            <p className="duration-300 hover:text-customfive my-3 cursor-pointer">
              <a href="#">آموزش پکیج html&css</a>
            </p>
          </div>
        </div>

        <div className=" rounded-lg w-[49%]  h-14 absolute bottom-[-36px] right-20 md:right-52 flex justify-between ">
          <AiFillSlackCircle className="text-customfive text-[50px]" />
          <AiFillSlackCircle className="text-customfive text-[50px]" />
          <AiFillSlackCircle className="text-customfive text-[50px]" />
        </div>
      </div>
      <div className="flex justify-center items-center p-4 w-[95%] bg-gradient-to-r from-customfour via-customseven to-customfour mx-auto rounded-md ">
        <p className="whitespace-nowrap text-[10px] md:text-lg text-myWhite">
          {" "}
          کلیه حقوق برای آکادمی آموزشی هاب دانش می باشد ومحفوظ می باشد
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}
