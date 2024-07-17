import React, { useState } from "react";

import Accordian from "./Accordian";
import { AccordionData } from "../data";

export default function FAQAcoordian() {
  const [datas, setDatas] = useState(AccordionData);

  return (
    <div className=" p-4 bg-gray-200 rounded-lg w-full flex flex-col gap-2 bg-grey">
      {datas.map((data) => (
        <Accordian
          key={data.id}
          title={data.title}
          desc={data.desc}
          time={data.time}
        />
      ))}
    </div>
  );
}
