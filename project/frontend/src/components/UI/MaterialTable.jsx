// MaterialTable component
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Card, Typography, IconButton } from "@material-tailwind/react";

export default function MaterialTable({ tableHead, tableBody }) {
  return (
    <Card className="h-full w-[95%] mx-auto p-2 shadow-xl overflow-y-scroll no-sc">
      <div className="overflow-y-scroll scrollbar-none" style={{ maxHeight: '400px' }}>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {tableHead.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="leading-none opacity-70 font-iransans font-bold"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableBody.map(({ name, email, username }, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50 font-iransans">
                <td className="p-4 w-[20%] bg-customfour">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal font-iransans "
                  >
                    {name}
                  </Typography>
                </td>
                <td className="p-4 w-[20%] bg-customThree">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal font-iransans"
                  >
                    {email}
                  </Typography>
                </td>
                <td className="p-4 w-[20%] bg-customThree">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal font-iransans"
                  >
                    {username}
                  </Typography>
                </td>
                <td className="p-4 w-[15%]">
                  <div className="flex gap-2 items-center justify-between">
                    <IconButton
                      className="duration-200 bg-customseven shadow-none hover:shadow-lg flex items-center justify-center"
                      variant="text"
                      color="blue-gray"
                    >
                      <PencilIcon className="h-4 w-4 text-myWhite" />
                    </IconButton>
                    <IconButton
                      className="duration-200 bg-error shadow-none hover:shadow-lg flex items-center justify-center"
                      variant="text"
                      color="blue-gray"
                    >
                      <TrashIcon className="h-4 w-4 text-myWhite" />
                    </IconButton>
                    <IconButton
                      className="duration-200 bg-error shadow-none hover:shadow-lg flex items-center justify-center"
                      variant="text"
                      color="blue-gray"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal font-iransans text-myWhite"
                      >
                        بن
                      </Typography>
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
