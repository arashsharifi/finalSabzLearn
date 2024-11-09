

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Card, Typography } from "@material-tailwind/react";

export default function MaterialTable({
  tableHead,
  tableBody,
  actions = [],
}) {
  return (
    <Card className="h-full w-[95%] mx-auto p-2 shadow-xl overflow-x-scroll overflow-y-scroll font-iransans">
      <div className="overflow-y-scroll scrollbar-none" style={{ maxHeight: "400px" }}>
        <table className="w-full min-w-max table-fixed text-left">
          <thead>
            <tr>
              {tableHead.map((head) => (
                <th
                  key={head.title}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 w-1/6"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="leading-none opacity-70 font-iransans font-bold"
                  >
                    {head.label}
                  </Typography>
                </th>
              ))}
              {actions.length > 0 && <th className="p-4 w-[15%]">اکشن‌ها</th>}
            </tr>
          </thead>
          <tbody>
            {tableBody && tableBody.map((rowData, rowIndex) => (
              <tr key={rowIndex} className="even:bg-blue-gray-50/50 font-iransans">
                {tableHead.map((head) => (
                  <td key={head.title} className="p-4 w-1/6">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal font-iransans"
                    >
                      {rowData[head.title] || ""}
                    </Typography>
                  </td>
                ))}
                {actions.length > 0 && (
                  <td className="p-4 w-[15%]">
                    <div className="flex gap-2 items-center justify-between">
                      {actions.map((action, actionIndex) => (
                    
                        <div
                        key={actionIndex}
                        className={`duration-200 flex flex-col items-center justify-center p-2 rounded-md shadow-md cursor-pointer ${
                          action.disabledCondition && action.disabledCondition(rowData)
                            ? "cursor-not-allowed bg-gray-300"
                            : `${action.bgColor} hover:shadow-lg`
                        }`}
                        onClick={() => action.onClick(rowData)}
                      >
                        {action.icon && <action.icon className="h-4 w-4 text-myWhite" />}
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal font-iransans text-myWhite"
                        >
                          {action.label}
                        </Typography>
                      </div>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

{/* <div
key={actionIndex}
className={`duration-200 flex flex-col items-center justify-center p-2 rounded-md shadow-md cursor-pointer ${
  action.disabledCondition && action.disabledCondition(rowData)
    ? "cursor-not-allowed bg-greydarko"
    : "bg-error hover:shadow-lg"
}`}
onClick={() => action.onClick(rowData)}
>
{action.icon && <action.icon className="h-4 w-4 text-myWhite" />}
<Typography
  variant="small"
  color="blue-gray"
  className="font-normal font-iransans text-myWhite"
>
  {action.label}
</Typography>
</div> */}
