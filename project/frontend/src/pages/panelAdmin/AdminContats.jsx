import React, { useEffect, useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { SiAnswer } from "react-icons/si";

import MaterialTable from "../../components/UI/MaterialTable";
import Modal from "../../components/UI/Modal";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  answer: Yup.string()
    .min(5, "    ۵ کاراکتر باشد")
    .max(30, "  نباید بیشتر از ۲۰ کاراکتر باشد")
    .required("لطفا همه موارد را پر کنید"),
});

export default function AdminContats() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [findEmail, setFindEmail] = useState("");
  const [getId, setGetId] = useState("");
  const [findObj, setFindObj] = useState("");
  const name = "arash";
  const localStorageData = JSON.parse(localStorage.getItem("user"));

  const getInputClass = (name) => {
    return `flex items-center gap-2 w-full p-2 border rounded-md shadow-md shadow-greydark ${
      errors[name]
        ? "border-error "
        : touchedFields[name]
        ? "border-success "
        : "border-black"
    }`;
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid, touchedFields },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const getAllUsers = async () => {
    const response = await fetch("http://localhost:4000/v1/contact", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    });

    const result = await response.json();
    console.log("result",result)
    const filteredContacts = result.map((contact) => ({
      id: contact?._id,
      name: contact?.name,
      body: contact?.body,
      email: contact?.email,
      phone: contact?.phone,
    }));

    setContacts(filteredContacts);
  };

  const AnswerEmailHandler = async (data) => {
    console.log("data", data);

    const answerUser = {
      email: findEmail,
      answer: data.answer,
    };
    try {
      const response = await fetch("http://localhost:4000/v1/contact/answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorageData.token}`,
        },
        body: JSON.stringify(answerUser),
      });

      if (response.ok) {
        reset();
        await swal("پاسخ به ایمیل ارسال شد ", {
          icon: "success",
        });
      } else {
        const errorData = await response.json();
        console.log("errorData", errorData);
        await swal(`خطا: ${errorData.message}`, {
          icon: "error",
        });
      }
    } catch (error) {
      console.error("خطا در اتصال به سرور", error);
      await swal("خطا در اتصال  پاسخ گویی به ایمیل", {
        icon: "error",
      });
    }
  };

  const handleDeleteClick = async (contactId) => {
  

    const result = await swal({
      title: "آیا مطمئن به حذف اطلاعات هستید",
      text: "اطلاعات را با آره حذف کنید",
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
          `http://localhost:4000/v1/contact/${contactId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorageData.token}`,
            },
          }
        );
        getAllUsers();
        if (!response.ok) throw new Error("خطا در حذف ارتباط");
        await swal("شما اطلاعات را حذف کردید", {
          icon: "success",
        });
      } catch (error) {
        console.error("Error:", error);
        await swal("خطایی رخ داد، اطلاعات حذف نشد", {
          icon: "error",
        });
      }
    } else {
      await swal("عملیات لغو شد", {
        icon: "info",
      });
    }
  };

  const actionEmailHandler = (contactEmail) => {
    setFindEmail(contactEmail);
    setIsModalOpen(true);
    setFindObj("");
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const showDescContact = (contactId) => {
    const contactFind = contacts.find((contact) => contact.id === contactId);
    setFindObj(contactFind);
    setIsModalOpen(true);
    setFindEmail("");
  };

  console.log("findObj", findObj);

  const tableHead = [
    { title: "id", label: "شناسه " },
    { title: "name", label: "نام و نام خانوادگی" },
    { title: "email", label: "ایمیل" },
    { title: "phone", label: "شماره" },
  ];

  const actions = [
    {
      label: "مشاهده پیام ",
      icon: null,
      onClick: (contactData) => showDescContact(contactData.id),
      // disabledCondition: (userData) => bannedUsers.includes(userData.id),
      bgColor: "bg-customseven",
    },
    {
      label: "پاسخ",
      icon: SiAnswer,
      onClick: (contactData) => actionEmailHandler(contactData.email),
      bgColor: "bg-customfive",
    },

    {
      label: "حذف",
      icon: TrashIcon,
      onClick: (contactData) => handleDeleteClick(contactData.id),
      bgColor: "bg-error",
    },
  ];
  return (
    <div className="flex flex-col gap-1 rtl font-iransans rtl">
      <p className="text-2xl font-bold   bg-clip-text pb-2 border-b-2 border-customfour mr-10 mt-4 mb-6  w-[90%] mx-auto text-customfour  ">
        لیست ارتباطات
      </p>
      <MaterialTable
        tableHead={tableHead}
        tableBody={contacts}
        actions={actions}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col gap-3 ">
          {findObj && (
            <div className="flex flex-col gap-3">
              <p className="text-2xl font-bold bg-clip-text pb-2 border-b-2 border-customfour mr-10 mt-4 mb-6 w-[90%] mx-auto text-customfour">
                پیامی از: {findObj.name || "ناشناس"}
              </p>
              <p className="mr-6">{findObj.body || "بدون پیام"}</p>
            </div>
          )}
          {findEmail && (
            <div className="flex flex-col gap-3">
              <p className="text-lg font-medium text-customfive">
                ایمیل انتخاب شده برای پاسخ: {findEmail}
              </p>
              <form
                className="flex flex-col gap-2 w-full"
                onSubmit={handleSubmit(AnswerEmailHandler)}
              >
                <div className="flex flex-col items-start gap-2">
                  <label className="font-semibold">جواب:</label>
                  <textarea
                    placeholder="جواب"
                    {...register("answer")}
                    className={getInputClass("answer")}
                  />
                  {errors.description && (
                    <p className="text-error">{errors.answer.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`w-[40%] p-2 rounded-md shadow-md ${
                    isValid
                      ? "bg-success text-myWhite"
                      : "bg-greydarko text-myWhite"
                  }`}
                >
                  پاسخ
                </button>
              </form>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
