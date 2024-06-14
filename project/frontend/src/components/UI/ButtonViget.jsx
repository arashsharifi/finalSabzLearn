import React from "react";
import { Link } from "react-router-dom";
export default function ButtonViget(props) {
  if (props.to) {
    return (
      <Link className={props.className} to={props.to}>
        {props.children}
      </Link>
    );
  } else if (props.herf) {
    return (
      <a className={props.className} href={props.href}>
        {props.children}
      </a>
    );
  } else {
    return (
      <button
        className={props.className}
        type={props.type}
        onClick={props.onclick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  }
}
