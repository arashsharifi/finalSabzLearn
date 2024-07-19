import React, { useEffect, useState } from "react";

import Accordian from "./Accordian";
import { AccordionData } from "../data";

export default function FAQAcoordian({ sessions }) {
  useEffect(() => {
    console.log("sessions", sessions);
  }, [sessions]);

  console.log(sessions.length);

  return (
    <div className=" p-4 bg-gray-200 rounded-lg w-full flex flex-col gap-2 bg-grey">
      {sessions.length === 0 ? (
        <p className="text-center text-error font-bold text-xl">
          جلسه‌ای برای این دوره در نظر گرفته نشده است.
        </p>
      ) : (
        sessions.map((data, index) => (
          <Accordian
            key={data._id}
            title={data.title}
            time={data.time}
            index={index}
          />
        ))
      )}
    </div>
  );
}
