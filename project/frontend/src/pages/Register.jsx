import React, { useContext } from "react";
import TopBr from "../components/TopBr";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { PiMaskHappyDuotone } from "react-icons/pi";

import { Link, useNavigate } from "react-router-dom";
import InputTextArea from "../components/UI/InputTextArea";
import ButtonViget from "../components/UI/ButtonViget";
import { useForm } from "../hooks/useForm";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  emailValidator,
  maxValidator,
  minValidator,
  requiredValidator,
} from "../validators/rules";
import AuthContext from "../context/authContext";

export default function Register() {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const [formState, onInputsHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      name: {
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
      phoneNumber: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const registaerSubmitHandler = async (e) => {
    e.preventDefault();
    const newUserInfos = {
      name: formState.inputs.name.value,
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.password.value,
      phone: formState.inputs.phoneNumber.value,

    };

    try {
      const response = await fetch("http://localhost:4000/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserInfos),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("result",result);
        authContext.login(result.user, result.accessToken);
        toast.success(`${result.user.name} 🎈✨ خوش آمدی `, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error(errorData);
        toast.error(`${errorData.message[0].message}`, {
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
    } catch (error) {
      console.error(error);
    }
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
                  id="name"
                  className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite  rounded-md shadow-md shadow-greydark"
                  element="input"
                  type="text"
                  icons="family"
                  validations={[
                    requiredValidator(),
                    minValidator(10),
                    maxValidator(20),
                  ]}
                  placeholder="نام نام خانوادگی "
                  onInputsHandler={onInputsHandler}
                />
                <InputTextArea
                  id="username"
                  className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite  rounded-md shadow-md shadow-greydark"
                  element="input"
                  type="text"
                  icons="person"
                  validations={[
                    requiredValidator(),
                    minValidator(6),
                    maxValidator(20),
                  ]}
                  placeholder="نام کاربری"
                  onInputsHandler={onInputsHandler}
                />
                <InputTextArea
                  id="phoneNumber"
                  className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite  rounded-md shadow-md shadow-greydark"
                  element="input"
                  type="text"
                  icons="phone"
                  validations={[
                    requiredValidator(),
                    minValidator(10),
                    maxValidator(12),
                  ]}
                  placeholder=" شماره تماس"
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
                  icons="email"
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
                    minValidator(6),
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
      <ToastContainer />
    </div>
  );
}
