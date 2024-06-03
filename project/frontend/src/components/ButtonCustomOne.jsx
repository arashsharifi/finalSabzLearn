import React from "react";

export default function ButtonCustomOne(props) {
  return (
    <button
      type="button"
      className="text-white bg-customfour hover:bg-customfive focus:ring-4 focus:bg-customfive font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none w-full h-full hover:text-myWhite duration-300"
    >
      {props.children}
    </button>
  );
}
