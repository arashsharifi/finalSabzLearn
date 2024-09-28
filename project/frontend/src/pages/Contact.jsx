import React, { useState } from "react";
import TopBr from "../components/TopBr";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import ReCAPTCHA from "react-google-recaptcha";
import InputTextArea from "../components/UI/InputTextArea";

import { PiMaskHappyDuotone } from "react-icons/pi";

import {
  requiredValidator,
  minValidator,
  maxValidator,
  emailValidator,
} from "../validators/rules";

import { useForm } from "../hooks/useForm";
import ButtonViget from "../components/UI/ButtonViget";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
export default function Contact() {
  const [isGoogleRecaptchaVerify, setIsGoogleRecaptchaVerify] = useState(true);
  const navigate = useNavigate();
  const [formState, onInputsHandler] = useForm(
    {
      username: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      phoneNumber: {
        value: "",
        isValid: false,
      },
      desc: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const onchangeHandler = () => {
    setIsGoogleRecaptchaVerify(true);
  };
  const submitContactHandler = async (e) => {
    e.preventDefault();

    const newContact = {
      name: formState.inputs.username.value,
      email: formState.inputs.address.value,
      phone: formState.inputs.phoneNumber.value,
      body: formState.inputs.desc.value,
    };

    try {
      const response = await fetch("http://localhost:4000/v1/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        toast.success(`مرسی از  🙏 ${formState?.inputs?.username?.value}  `, {
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

        if (errorData.includes("this is error for post")) {
          toast.error(` نظر شما ثبت نشد `, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
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
    <div className="flex flex-col font-iransans">
      <TopBr />
      <NavBar />
      <div className="rtl  font-iransans LoginRegisterContainer">
        <div className=" w-[32rem] my-10 mx-10 md:mx-0 bg-myWhite border-customfour border-b-4 flex flex-col   gap-5 p-3 rounded-md shadow-md shadow-black">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col items-center justify-center">
              <p>ارتباط با ما </p>
              <div className="flex gap-2">
                <p> نظر یا انتقادتو برای ما بنویس</p>
                <PiMaskHappyDuotone className="text-customfive text-xl" />
              </div>
            </div>
            <form action="#" className="w-full flex flex-col gap-4 mt-5">
              <InputTextArea
                id="username"
                className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite  rounded-md shadow-md shadow-greydark"
                element="input"
                type="text"
                icons="person"
                placeholder="نام نام خانوادگی را وارد نمایید "
                validations={[
                  requiredValidator(),
                  minValidator(6),
                  maxValidator(20),
                ]}
                onInputsHandler={onInputsHandler}
              />
              <InputTextArea
                id="address"
                className="flex items-center bg-myWhite gap-2 w-[95%] mx-auto p-2 border  rounded-md shadow-md shadow-greydark"
                element="input"
                type="text"
                icons="email"
                placeholder="آدرس ایمیل را وازد نمایید"
                validations={[
                  requiredValidator(),
                  emailValidator(),
                  //   minValidator(8),
                  //   maxValidator(18),
                ]}
                onInputsHandler={onInputsHandler}
              />
              <InputTextArea
                id="phoneNumber"
                className="flex items-center bg-myWhite gap-2 w-[95%] mx-auto p-2 border  rounded-md shadow-md shadow-greydark"
                element="input"
                type="text"
                icons="phone"
                placeholder="تلفن خود را وارد نمایید "
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(18),
                ]}
                onInputsHandler={onInputsHandler}
              />
              <InputTextArea
                id="desc"
                className="flex items-center outline-none focus:border-none bg-myWhite gap-2 w-[95%] mx-auto p-2 border  rounded-md  "
                element="textArea"
                icons="noIcon"
                placeholder="نظر خود را وارد نمایید "
                validations={[
                  requiredValidator(),
                  minValidator(8),
                  maxValidator(200),
                ]}
                onInputsHandler={onInputsHandler}
              />
              <div className="w-full  flex justify-center">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onchangeHandler}
                />
              </div>
              <ButtonViget
                className={`${
                  formState.isFormValid && isGoogleRecaptchaVerify
                    ? "bg-customfour"
                    : "bg-greydoubledarko"
                } bg-customfour duration-200 rounded-md w-[95%] py-3  ${
                  formState.isFormValid && isGoogleRecaptchaVerify
                    ? "hover:bg-customfive"
                    : "hover:bg-greydoubledarko"
                }  mx-auto  text-myWhite  shadow-md`}
                type="submit"
                onclick={submitContactHandler}
                disabled={!formState.isFormValid || !isGoogleRecaptchaVerify}
              >
                <p>ارسال</p>
              </ButtonViget>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
