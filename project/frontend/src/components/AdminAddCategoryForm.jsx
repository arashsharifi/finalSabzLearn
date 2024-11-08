
import React from "react";
import {
  emailValidator,
  maxValidator,
  minValidator,
  requiredValidator,
} from "../validators/rules";
import InputTextArea from "./UI/InputTextArea";
import { useForm } from "../hooks/useForm";


export default function AdminAddCategoryForm({ onUserAdded }) {
  const [formState, onInputsHandler] = useForm(
    {
      title: { value: "", isValid: false },
      name: { value: "", isValid: false },
    },
    false
  );

  const localStorageData = JSON.parse(localStorage.getItem("user"));

  const closeModalAndResetForm = () => {
    onInputsHandler({
      title: { value: "", isValid: false },
      name: { value: "", isValid: false },
    });
  };

  const showToast = (message, type = "success") => {
    const options = {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    };

    if (type === "success") {
      toast.success(message, options);
    } else {
      toast.error(message, options);
    }
  };

  // const addCategoryAdminHandler = async (e) => {
  //   e.preventDefault();

  //   const newCategoryInfo = {
  //     title: formState.inputs.title.value,
  //     name: formState.inputs.name.value,
  //   };

  //   try {
  //     const response = await fetch("http://localhost:4000/v1/category", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorageData.token}`,
  //       },
  //       body: JSON.stringify(newCategoryInfo),
  //     });

  //     if (response.ok) {
  //       closeModalAndResetForm();
  //       onUserAdded();
  //       showToast("ثبت شما با موفقیت انجام شد", "success");
  //     } else {
  //       const errorData = await response.json();
  //       showToast(errorData.message, "error");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     showToast("خطا در اتصال به سرور", "error");
  //   }
  // };

  const addCategoryAdminHandler = async (e) => {
    e.preventDefault();
  
    const newCategoryInfo = {
      title: formState.inputs.title.value,
      name: formState.inputs.name.value,
    };
  
    try {
      const response = await fetch("http://localhost:4000/v1/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorageData.token}`,
        },
        body: JSON.stringify(newCategoryInfo),
      });
  
      if (response.ok) {
        closeModalAndResetForm();
        onUserAdded();
  
        // پیام موفقیت با `swal`
        await swal("ثبت شما با موفقیت انجام شد", {
          icon: "success",
        });
      } else {
        const errorData = await response.json();
  
        // پیام خطا با `swal`
        await swal(`خطا: ${errorData.message}`, {
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
  
      // پیام خطای عمومی با `swal`
      await swal("خطا در اتصال به سرور", {
        icon: "error",
      });
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center p-2 rounded-sm shadow-xl m-4 font-iransans max-w-[100%] md:max-w-[70%] border border-grey">
      <div className="flex w-full">
        <form onSubmit={addCategoryAdminHandler} className="w-full flex flex-col gap-4 mt-5">
          <div className="flex flex-col md:flex-row gap-2">
            <InputTextArea
              id="title"
              className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite rounded-md shadow-md shadow-greydark"
              element="input"
              type="text"
              validations={[requiredValidator(), minValidator(5), maxValidator(30)]}
              placeholder="عنوان"
              onInputsHandler={onInputsHandler}
            />
            <InputTextArea
              id="name"
              className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite rounded-md shadow-md shadow-greydark"
              element="input"
              type="text"
              validations={[requiredValidator(), minValidator(3), maxValidator(30)]}
              placeholder="نام دسته بندی"
              onInputsHandler={onInputsHandler}
            />
          </div>
          <div className="flex w-full justify-end p-2 ">
            <button
              type="submit"
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
 
    </div>
  );
}

