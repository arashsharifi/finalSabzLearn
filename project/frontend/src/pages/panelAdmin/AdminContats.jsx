import React, { useEffect, useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import MaterialTable from "../../components/UI/MaterialTable";
import Modal from "../../components/UI/Modal";

export default function AdminContats() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getId, setGetId] = useState("");
  const [findObj, setFindObj] = useState("");
  const name = "arash";
  const getAllUsers = async () => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));

    const response = await fetch("http://localhost:4000/v1/contact", {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    });

    const result = await response.json();
    // console.log("result",result)
    const filteredContacts = result.map((contact) => ({
      id: contact?._id,
      name: contact?.name,
      body: contact?.body,
      email: contact?.email,
      phone: contact?.phone,
    }));

    setContacts(filteredContacts);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const showDescContact = (contactId) => {
    const contactFind = contacts.find((contact) => contact.id === contactId);
    setFindObj(contactFind);
    setIsModalOpen(true);
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
      label: "ویرایش",
      icon: PencilIcon,
      onClick: (userData) => console.log("Edit:", userData),
      bgColor: "bg-customfive",
    },

    {
      label: "حذف",
      icon: TrashIcon,
      onClick: (userData) => console.log("ss:", userData),
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
        </div>
      </Modal>
    </div>
  );
}
