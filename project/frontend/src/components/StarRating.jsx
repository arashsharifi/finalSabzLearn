import React from "react";
import { PiStarThin } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
const StarRating = ({ rate }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rate) {
      stars.push(<FaStar className="text-customOne text-sm" key={i} />);
    } else {
      stars.push(<PiStarThin key={i} />);
    }
  }

  return <div className="flex gap-1 rtl">{stars}</div>;
};

export default StarRating;
