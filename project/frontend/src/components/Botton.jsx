import React from "react";

export default function Botton(props) {
  return (
    <button className="bg-myWhite border-2 text-black border-customfive rounded-md font-iransans p-3 hover:bg-customfive hover:text-myWhite transition-all duration-500 flex gap-1 items-center text-customfive whitespace-nowrap ">
      {props.children}
    </button>
  );
}
