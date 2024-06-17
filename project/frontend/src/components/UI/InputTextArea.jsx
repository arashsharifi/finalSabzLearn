import React, { useReducer } from "react";
import { FaLockOpen } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import validator from "../../validators/validator";
const inpuTexReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validations),
      };
    }
    default: {
      return state;
    }
  }
};

export default function InputTextArea(props) {
  // console.log(props.validations);
  const success = "border-success border-2";
  const error = "border-error border-2";

  const [mainInputTextarea, dispatch] = useReducer(inpuTexReducer, {
    value: "",
    isValid: false,
  });

  function onchangeHander(event) {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validations: props.validations,
      isValid: true,
    });
  }
  const element =
    props.element === "input" ? (
      <div
        className={`${props.className} ${
          mainInputTextarea.isValid ? success : error
        }`}
      >
        <input
          className="outline-none border-none   text-lg p-2 w-[95%] placeholder:text-sm bg-myWhite"
          type={props.type}
          placeholder={props.placeholder}
          value={mainInputTextarea.value}
          onChange={onchangeHander}
        />
        {props.icons === "person" ? (
          <IoMdPerson className="text-3xl text-greydark" />
        ) : props.icons === "lock" ? (
          <FaLockOpen className="text-3xl text-greydark" />
        ) : (
          <MdEmail className="text-3xl text-greydark" />
        )}
      </div>
    ) : (
      <div
        className={`${props.className} ${
          mainInputTextarea.isValid ? success : error
        }`}
      >
        <textarea
          rows="4"
          className={props.className}
          placeholder={props.placeholder}
          value={mainInputTextarea.value}
          onChange={onchangeHander}
          required
        ></textarea>
        {props.icons === "person" ? (
          <IoMdPerson className="text-3xl text-greydark" />
        ) : props.icons === "lock" ? (
          <FaLockOpen className="text-3xl text-greydark" />
        ) : (
          <MdEmail className="text-3xl text-greydark" />
        )}
      </div>
    );
  return <div className="w-full ">{element}</div>;
}

{
  /* <div className="flex items-center gap-2 w-[95%] mx-auto p-2 border bg-myWhite border-greydark rounded-md shadow-md shadow-greydark">
  <InputTextArea
    className="outline-none border-none   text-lg p-2 w-[95%] placeholder:text-sm bg-myWhite "
    element="input"
    type="text"
    placeholder="  ایمیل یا کلمه عبور  "
  />
  <IoMdPerson className="text-3xl text-greydark" />
</div>; */
}
