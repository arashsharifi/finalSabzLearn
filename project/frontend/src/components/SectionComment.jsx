import React, { useEffect, useState } from "react";
import { FaComment } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
export default function SectionComment({ comments }) {
  useEffect(() => {
    // console.log("sessions", comments);
  }, [comments]);
  console.log("comments", comments);
  const [selectedScore, setSelectedScore] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setSelectedScore(e.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };
  // console.log(selectedScore);
  // console.log(message);
  return (
    <div className="flex flex-col gap-7 bg-myWhite w-full shadow-lg shadow-greydark rtl p-4 rounded-md">
      <div className="flex p-3 justify-start">
        <div className="flex gap-3 items-center">
          <div className="bg-customfive rounded-md p-2 flex justify-center items-center">
            <FaComment className="text-myWhite text-3xl" />
          </div>
          <p className="text-xl font-bold">نظرات</p>
        </div>
      </div>
      {/* {comments.map((items) => (
        <div className="flex flex-col gap-2 bg-grey rounded-md p-3 border-greydoubledarko shadow-greydark shadow-md">
          <div className="flex w-[95%] mx-auto bg-customTwo justify-between p-2">
            <div className="flex gap-2 items-center">
              <p>{items?.creator === null ? "فلانی/" : items.creator}</p>
              <p className="bg-customfive text-myWhite rounded-md p-1">خریدار محصول</p>
              <p className="">22200022-202202-3</p>
            </div>
            <button className="bg-myWhite border rounded-md p-1 w-14 h-8">
              {" "}
              پاسخ
            </button>
          </div>
          <p className="mr-6 mt-4">{items?.body} </p>
        </div>
      ))} */}
      {comments.map((items) => {
        const dataUpdatedAt = items?.updatedAt;
        const milliseconds = dataUpdatedAt ? Date.parse(dataUpdatedAt) : null;
        const UpdatedAt = milliseconds
          ? new Date(milliseconds).toLocaleDateString("fa-IR")
          : "000-000-000";

        return (
          <div
            key={items.id}
            className="flex flex-col gap-2 bg-grey rounded-md p-3 border-greydoubledarko shadow-greydark shadow-md"
          >
            <div className="flex w-[95%] mx-auto  justify-between p-2">
              <div className="flex gap-2 items-center">
                <p>{items?.creator === null ? "فلانی/" : items.creator}</p>
                <p className="bg-customfive text-myWhite rounded-md p-1">
                  خریدار محصول
                </p>
                <p className="">{UpdatedAt}</p>
              </div>
              <button className="bg-myWhite border rounded-md p-1 w-14 h-8">
                پاسخ
              </button>
            </div>
            <p className="mr-6 mt-4">{items?.body}</p>
          </div>
        );
      })}

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-black mb-4">قوانین ثبت دیدگاه </p>
          <div className="flex items-center gap-1">
            <FaCheck className="text-customfive text-xl" />
            <p className=" text-greydoubledarko mr-2 text-[15px] ">
              {" "}
              اگر نیاز به پشتیبانی دارید از قسمت پرسش سوال در قسمت نمایش انلاین
              استفاده نمایید وسوالات مربوطه به رفع اشکال تایید نخواهد شد{" "}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FaCheck className="text-customfive text-xl" />
            <p className=" text-greydoubledarko mr-2 text-[15px] ">
              {" "}
              دیدگاه های نا مرتبط با دوره تایید نخواهد شد
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FaCheck className="text-customfive text-xl" />
            <p className=" text-greydoubledarko mr-2 text-[15px] ">
              {" "}
              سوالات مرتبط با رفع اشکال در این بخش تایید نخواهد شد
            </p>
          </div>
          <div className="flex items-center gap-1">
            <FaCheck className="text-customfive text-xl" />
            <p className=" text-greydoubledarko mr-2 text-[15px] ">
              {" "}
              از درج دید گاه های تکراری پرهیز نمایید
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <form
          action="#"
          className="flex flex-col gap-4 bg-customeigth w-full p-4 rounded-md"
        >
          <div className="relative h-12  w-full">
            <select
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              value={selectedScore}
              onChange={handleChange}
            >
              <option value="" disabled>
                امتیاز خود را وارد نمایید
              </option>
              <option value="1">عالی</option>
              <option value="2">خوب</option>
              <option value="3">متوسط</option>
              <option value="4">ضعیف</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              دیدگاه شما
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="لطفا دیدگاه خود را وارد نمایید "
              value={message}
              onChange={handleChangeMessage}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-greentoond px-4  duration-200 text-myWhite flex py-2 items-center justify-center gap-1 hover:bg-greenyavash cursor-pointer rounded-md w-[20%]"
          >
            <p>ارسال</p>
          </button>
        </form>
      </div>
    </div>
  );
}
