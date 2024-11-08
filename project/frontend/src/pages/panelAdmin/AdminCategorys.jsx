import React, { useEffect, useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import MaterialTable from "../../components/UI/MaterialTable";
import AdminAddCategoryForm from "../../components/AdminAddCategoryForm";
import swal from "sweetalert";
import Modal from "../../components/UI/Modal";

import {
  emailValidator,
  maxValidator,
  minValidator,
  requiredValidator,
} from "../../validators/rules";
import InputTextArea from "../../components/UI/InputTextArea";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "../../hooks/useForm";
export default function AdminCategorys() {
  const [categoryData, setCategoryData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getId,setGetId]=useState('')
  const [formState, onInputsHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      name: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const localStorageData = JSON.parse(localStorage.getItem("user"));

  const closeModalAndResetForm = () => {
    setIsModalOpen(false);
    setGetId("");
    onInputsHandler({
      title: { value: "", isValid: false },
      name: { value: "", isValid: false },
    });
  };
  const showToastSuccess = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };
  const getAllCategorys = async () => {
    console.log("localStorageData", localStorageData);

    const response = await fetch("http://localhost:4000/v1/category", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    });

    const result = await response.json();

    const formatData = result.map((category) => ({
      id: category._id,
      title: category.title,
    }));
    setCategoryData(formatData);
  };

  const handleDeleteClick = async (categoryId) => {
    // console.log("categoryId",categoryId)

    const result = await swal({
      title: "آیا مطمئن به حذف کاربر هستید",
      text: "کاربر را با آره حذف کنید",
      icon: "warning",
      buttons: {
        cancel: "نه",
        confirm: "آره",
      },
      dangerMode: true,
    });
    if (result) {
      try {
        const response = await fetch(
          `http://localhost:4000/v1/category/${categoryId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorageData.token}`,
            },
          }
        );
        getAllCategorys();
        if (!response.ok) throw new Error("خطا در حذف کاربر");
        await swal("شما کاربر را حذف کردید", {
          icon: "success",
        });
      } catch (error) {
        console.error("Error:", error);
        await swal("خطایی رخ داد، کاربر حذف نشد", {
          icon: "error",
        });
      }
    } else {
      await swal("عملیات لغو شد", {
        icon: "info",
      });
    }
  };





  // const addEditAdminHandler = async (e) => {
  //   const newCategoryInfo = {
  //     title: formState.inputs.title.value,
  //     name: formState.inputs.name.value,
  //   };
  //   console.log("newCategoryInfo", newCategoryInfo);
  //   console.log("getId", getId);
  
  //   try {
  //     const response = await fetch(`http://localhost:4000/v1/category/${getId}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": `Bearer ${localStorageData.token}`,
  //       },
  //       body: JSON.stringify(newCategoryInfo),
  //     });
  //     if (response.ok) {
  //       closeModalAndResetForm()
  //       getAllCategorys();
  //       showToastSuccess(` 🎈✨ویرایش با موفقیت انجام شد `);
  //     } else {
  //       const errorData = await response.json();
  //       console.log("errorData", errorData);
  //       toast.error(`${errorData.message}`, {
  //         position: "top-right",
  //         autoClose: 4000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         theme: "light",
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const addEditAdminHandler = async (e) => {
    const newCategoryInfo = {
      title: formState.inputs.title.value,
      name: formState.inputs.name.value,
    };
    console.log("newCategoryInfo", newCategoryInfo);
    console.log("getId", getId);
  
    try {
      const response = await fetch(`http://localhost:4000/v1/category/${getId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorageData.token}`,
        },
        body: JSON.stringify(newCategoryInfo),
      });
  
      if (response.ok) {
        closeModalAndResetForm();
        getAllCategorys();
  
        // پیام موفقیت به‌جای toastify
        await swal("🎈✨ویرایش با موفقیت انجام شد", {
          icon: "success",
        });
      } else {
        const errorData = await response.json();
        console.log("errorData", errorData);
  
        // پیام خطا به‌جای toastify
        await swal(`خطا: ${errorData.message}`, {
          icon: "error",
        });
      }
    } catch (error) {
      console.error(error);
  
      // پیام خطای عمومی به‌جای toastify
      await swal("خطایی رخ داد. لطفاً دوباره تلاش کنید.", {
        icon: "error",
      });
    }
  };






  const updateCategory = (categoryId) => {
  
    setGetId(categoryId)
    setIsModalOpen(true);
  };

  useEffect(() => {
    getAllCategorys();
  }, []);

  const tableHead = [
    { title: "id", label: " ردیف" },
    { title: "title", label: "عنوان" },
  ];

  const actions = [
    {
      label: "ویرایش",
      icon: PencilIcon,
      onClick: (categoryData) => updateCategory(categoryData.id),
    },
    {
      label: "حذف",
      icon: TrashIcon,
      onClick: (categoryData) => handleDeleteClick(categoryData.id),
    },
  ];

  return (
    <div className="flex flex-col gap-2 rtl  font-iransans">
      <p className="text-2xl font-bold   bg-clip-text pb-2 border-b-2 border-customfour mr-10 mt-4 mb-6  w-[90%] mx-auto text-customfour">
        اضافه کردن دسته بندی
      </p>
      <AdminAddCategoryForm onUserAdded={getAllCategorys} />
      <p className="text-2xl font-bold   bg-clip-text pb-2 border-b-2 border-customfour mr-10 mt-4 mb-6  w-[90%] mx-auto text-customfour">
        لیست دوره های مجموعه
      </p>
      <MaterialTable
        tableHead={tableHead}
        tableBody={categoryData || []}
        actions={actions}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex w-full">
          <form action="#" className="w-full flex flex-col gap-4 mt-5">
            <div className="flex flex-col md:flex-row gap-2">
              <InputTextArea
                id="title"
                className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite rounded-md shadow-md shadow-greydark"
                element="input"
                type="text"
                icons=""
                validations={[
                  requiredValidator(),
                  minValidator(5),
                  maxValidator(30),
                ]}
                placeholder="  عنوان "
                onInputsHandler={onInputsHandler}
              />
              <InputTextArea
                id="name"
                className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite rounded-md shadow-md shadow-greydark"
                element="input"
                type="text"
                icons=""
                validations={[
                  requiredValidator(),
                  minValidator(3),
                  maxValidator(30),
                ]}
                placeholder="نام دسته بندی"
                onInputsHandler={onInputsHandler}
              />
            </div>
            <div className="flex w-full justify-end p-2 ">
              <button
                type="submit"
                onClick={addEditAdminHandler}
                disabled={!formState.isFormValid}
                className={`${
                  formState.isFormValid
                    ? "bg-customfour hover:bg-customfive h-[40px]"
                    : "bg-greydoubledarko cursor-not-allowed h-[40px]"
                } text-white w-[30%] text-xl m-2 rounded-md duration-200 shadow-md`}
              >
                <p
                  className={`${
                    formState.isFormValid ? "text-myWhite" : "text-black"
                  } `}
                >
                  ویرایش
                </p>
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
}
