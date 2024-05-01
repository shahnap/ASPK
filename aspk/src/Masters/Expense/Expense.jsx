import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
  } from "@material-tailwind/react";
  import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
  import { authorsTableData, projectsTableData } from "@/data";

  
function Expense() {
  return (
    <div>
        <div className='flex  '>
            <div className='w-1/2 bg-black  mt-10 '>
            <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Authors Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {/* {["SlNo","Date","Expence","Action"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))} */}
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">Slno</th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">Date</th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">Expense</th>
                <th className="border-b border-blue-gray-50 py-3 px-5 text-left">Action</th>

               



              </tr>
            </thead>
            <tbody>
              {authorsTableData.map(
                ({ img, name, email, job, online, date }, key) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                        
                     
                      <td className={className}>
                      <div className='text-xs font-semibold text-blue-gray-600'>amal</div> 
                      </td>

                      <td className={className}>
                      <div className='text-xs font-semibold text-blue-gray-600'>amal</div> 
                      </td>
                      <td className={className}>
                      <div className='text-xs font-semibold text-blue-gray-600'>amal</div> 
                      </td>
                 
                    
                      <td className={className}>
                       
                        <button   className={className}>Edit</button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
            </div>
            <div>
                amal
            </div>

        </div>

    </div>
  )
}

export default Expense