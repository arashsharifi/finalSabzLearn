import React from "react";
import TopBr from "../components/TopBr";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import InputTextArea from "../components/UI/InputTextArea";
import { Link } from "react-router-dom";

import { PiMaskHappyDuotone } from "react-icons/pi";
import ButtonViget from "../components/UI/ButtonViget";
//constomhook
import { useForm } from "../hooks/useForm";
import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../validators/rules";

export default function Login() {
  const [formState, onInputsHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  console.log(formState);
  const submitLoginHandler = (e) => {
    e.preventDefault();
    console.log("login");
  };
  return (
    <div className="flex flex-col">
      <TopBr />
      <NavBar />
      <div className="rtl  font-iransans LoginRegisterContainer">
        <div className=" w-[32rem] my-10 mx-10 md:mx-0 bg-myWhite border-customfour border-b-4 flex flex-col   gap-5 p-3 rounded-md shadow-md shadow-black">
          <div className="flex flex-col gap-1 p-1">
            <h1 className="font-bold text-2xl p-2 text-center">
              ورود به حساب کاربری
            </h1>
            <div className="flex gap-1 p-1 items-center self-center m-2">
              <p>خوشحالیم دوباره میبینمت دوست عزیز </p>
              <PiMaskHappyDuotone className="text-xl text-customfive" />
            </div>
            <div className="flex justify-center p-3 rounded-mg bg-greydark w-[90%] mx-auto rounded-md ">
              <div className="flex gap-2 p-1">
                <h3 className=" text-lg">کابر جدید هستید؟</h3>
                <p className="text-sm bg-greydoubledarko p-1 rounded-md whitespace-nowrap">
                  {" "}
                  <Link to="/register">ثبت نام </Link>
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <form action="#" className="w-full flex flex-col gap-4 mt-5">
                <InputTextArea
                  id="username"
                  className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite  rounded-md shadow-md shadow-greydark"
                  element="input"
                  type="text"
                  icons="person"
                  placeholder="  ایمیل یا کلمه عبور"
                  validations={[requiredValidator(), emailValidator()]}
                  onInputsHandler={onInputsHandler}
                />
                <InputTextArea
                  id="password"
                  className="flex items-center bg-myWhite gap-2 w-[95%] mx-auto p-2 border  rounded-md shadow-md shadow-greydark"
                  element="input"
                  type="password"
                  icons="lock"
                  placeholder="رمز عبور"
                  validations={[
                    requiredValidator(),
                    minValidator(8),
                    maxValidator(18),
                  ]}
                  onInputsHandler={onInputsHandler}
                />
                <ButtonViget
                  className={`${
                    formState.isFormValid
                      ? "bg-customfour"
                      : "bg-greydoubledarko"
                  } bg-customfour duration-200 rounded-md w-[95%] py-3  ${
                    formState.isFormValid
                      ? "hover:bg-customfive"
                      : "hover:bg-greydoubledarko"
                  }  mx-auto  text-myWhite  shadow-md`}
                  type="submit"
                  onclick={submitLoginHandler}
                  disabled={!formState.isFormValid}
                >
                  <p>ورود</p>
                </ButtonViget>
                <div className="flex w-[95%]  mx-auto justify-between p-2 items-center">
                  <div className="flex items-center ">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-5 h-5 text-blue-600 bg-customenine border-greydoubledarko rounded focus:ring-customfive   focus:ring-2 focus:rounded-md"
                    />
                    <label
                      for="default-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      من را به خاطر داشته باش
                    </label>
                  </div>
                  <a
                    className="duration-200 hover:text-customfour hover:underline"
                    href="#"
                  >
                    رمز عبور را فراموش کرده اید ؟
                  </a>
                </div>
              </form>
            </div>
            <ul className="flex flex-col gap-3  list-disc p-2 mt-2">
              <li className="text-black mr-4  list-none">سلام کابر محترم</li>
              <li className="text-greydoubledarko mr-2 text-sm">
                {" "}
                لطفا از مرورگر های مطمئن وبروز مانند گوگل کروم و فایر فکس
                استفاده کنید{" "}
              </li>
              <li className="text-greydoubledarko mr-2 text-sm">
                ما هرگز اطلاعات شمارا از طریق ایمیل درخوایت نمی کنیم
              </li>
              <li className="text-greydoubledarko text-sm mr-2">
                لطفا کلمه عبور خود را در فواصل زمانی کوتاه تغییر دهید
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

("w-full px-0 text-sm text-gray-900 bg-white border-0");
