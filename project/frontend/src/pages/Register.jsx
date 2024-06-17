import React from "react";
import TopBr from "../components/TopBr";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { PiMaskHappyDuotone } from "react-icons/pi";

import { Link } from "react-router-dom";
import InputTextArea from "../components/UI/InputTextArea";
import ButtonViget from "../components/UI/ButtonViget";
import { useForm } from "../hooks/useForm";
import {
  emailValidator,
  maxValidator,
  minValidator,
  requiredValidator,
} from "../validators/rules";

export default function Register() {
  const [formState, onInputsHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      email: {
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
  const registaerSubmitHandler = (e) => {
    e.preventDefault();
    console.log("register");
  };
  return (
    <div className="flex flex-col">
      <TopBr />
      <NavBar />
      <div className="rtl  font-iransans LoginRegisterContainer">
        <div className=" w-[32rem] my-10 mx-10 md:mx-0  bg-myWhite border-customfour border-b-4 flex flex-col   gap-5 p-3 rounded-md shadow-md shadow-black">
          <div className="flex flex-col gap-1 p-1">
            <h1 className="font-bold text-2xl p-2 text-center">
              ساخت حساب کابری
            </h1>
            <div className="flex gap-1 p-1 items-center self-center m-2">
              <p>خوشحالیم که به جمع ما می پیوندی </p>
              <PiMaskHappyDuotone className="text-xl text-customfive" />
            </div>
            <div className="flex justify-center p-3 rounded-mg bg-greydark w-[90%] mx-auto rounded-md ">
              <div className="flex gap-2 p-1">
                <h3 className=" text-lg">قبلا ثبت نام کردید</h3>
                <p className="text-sm bg-greydoubledarko p-1 rounded-md whitespace-nowrap cursor-pointer">
                  {" "}
                  <Link to="/login">وارد شوید </Link>
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
                  validations={[
                    requiredValidator(),
                    minValidator(8),
                    maxValidator(20),
                  ]}
                  placeholder="نام کاربری"
                  onInputsHandler={onInputsHandler}
                />

                <InputTextArea
                  id="email"
                  className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite  rounded-md shadow-md shadow-greydark"
                  element="input"
                  type="email"
                  validations={[
                    requiredValidator(),
                    minValidator(4),
                    emailValidator(),
                  ]}
                  placeholder="ایمیل را وارد نمایید"
                  onInputsHandler={onInputsHandler}
                />

                <InputTextArea
                  id="password"
                  className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite  rounded-md shadow-md shadow-greydark"
                  element="input"
                  type="password"
                  icons="lock"
                  placeholder=" رمز عبور"
                  validations={[
                    requiredValidator(),
                    minValidator(4),
                    maxValidator(11),
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
                  onclick={registaerSubmitHandler}
                  disabled={!formState.isFormValid}
                >
                  <p>ورود</p>
                </ButtonViget>
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
