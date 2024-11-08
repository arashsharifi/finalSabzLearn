import React, { useContext, useState } from "react";
import {
  emailValidator,
  maxValidator,
  minValidator,
  requiredValidator,
} from "../validators/rules";
import AuthContext from "../context/authContext";
import InputTextArea from "./UI/InputTextArea";
import { useForm } from "../hooks/useForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminRegistration({onUserAdded }) {
  const [gender, setGender] = useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const authContext = useContext(AuthContext);

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

  const registaerAdmimSubmitHandler = async (e) => {
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
        onUserAdded()
        toast.success(`${result.user.name} 🎈✨ کاربر با موفقیت ثبت شد`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      } else {
        const errorData = await response.json();
        // console.log("errorData", errorData.message);
        console.error(errorData);

        if (errorData.message === "this phone number banned!") {
          toast.error("این کاربر بند شده است", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        } else {
          toast.error(`${errorData.message[0].message}`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center p-2 rounded-sm shadow-xl m-4 font-iransans max-w-[100%] md:max-w-[70%] border border-grey">
      <div className="flex w-full">
        <form action="#" className="w-full flex flex-col gap-4 mt-5">
          <div className="flex flex-col md:flex-row gap-2">
            <InputTextArea
              id="name"
              className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite rounded-md shadow-md shadow-greydark"
              element="input"
              type="text"
              icons="family"
              validations={[
                requiredValidator(),
                minValidator(10),
                maxValidator(20),
              ]}
              placeholder="نام نام خانوادگی"
              onInputsHandler={onInputsHandler}
            />
            <InputTextArea
              id="username"
              className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite rounded-md shadow-md shadow-greydark"
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
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <InputTextArea
              id="phoneNumber"
              className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite rounded-md shadow-md shadow-greydark"
              element="input"
              type="text"
              icons="phone"
              validations={[
                requiredValidator(),
                minValidator(10),
                maxValidator(12),
              ]}
              placeholder="شماره تماس"
              onInputsHandler={onInputsHandler}
            />
            <InputTextArea
              id="email"
              className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite rounded-md shadow-md shadow-greydark"
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
          </div>
          <div className="flex justify-start mr-3">
            <InputTextArea
              id="password"
              className="flex items-center gap-2 w-[97%] md:w-[48%] p-2 border bg-myWhite rounded-md shadow-md shadow-greydark self-end"
              element="input"
              type="password"
              icons="lock"
              placeholder="رمز عبور"
              validations={[
                requiredValidator(),
                minValidator(6),
                maxValidator(11),
              ]}
              onInputsHandler={onInputsHandler}
            />
          </div>
          <div className="flex w-full justify-end p-2 ">
            <button
              type="submit"
              onClick={registaerAdmimSubmitHandler}
              disabled={!formState.isFormValid}
              className={`${
                formState.isFormValid
                  ? "bg-success hover:bg-greentoond h-[40px]"
                  : "bg-greydoubledarko cursor-not-allowed h-[40px]"
              } text-white w-[30%] text-xl m-2 rounded-md duration-200 shadow-md`}
            >
              ثبت نام
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}




