import React, { useEffect, useState } from "react";

export default function LandingCounter({ count }) {
  const [courseCunter, setCourseCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCourseCounter((prevCount) => prevCount + 1);
    }, 0.5);

    if (courseCunter === count) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [courseCunter]);
  return (
    <p className="text-myWhite text-xl">
      {courseCunter.toLocaleString("fa-IR")}
    </p>
  );
}
