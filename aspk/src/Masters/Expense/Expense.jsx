import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaEdit } from "react-icons/fa";
import { authorsTableData } from "@/data";
import { IoMdAddCircle } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";


function Expense() {
  const [Expense, setExpense] = useState("")
  const [TempArray, setTempArray] = useState([])
  const [Modal, setModal] = useState(false)



  const onSubmit = ()=>{
    setTempArray((prev)=>[...prev,Expense])

   
 
    

  }
  useEffect(() => {
    console.log("TempArray",TempArray);
  }, [TempArray])
  return (
    <div className="mt-10  md:flex relative md:static " >

<div className='md:hidden absolute -top-16 right-6 z-50' onClick={()=>{setModal(true)}}>
<IoMdAddCircle style={{fontSize:"1.3rem"}}/>  
</div>

      {/* Render as table on large screens (lg and above) */}
      <div className="hidden md:flex-1 md:mt-8  sm:block">
        <Card >
          <CardHeader variant="gradient" color="gray" className="p-6">
            <Typography variant="h6" color="white">
              Expense List
            </Typography>
          </CardHeader>
          <CardBody className='h-[500px] overflow-x-scroll '>
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
            {
  TempArray.map((item, index) => (
    <tr className="p-4" key={index}>
      <td className="ml-3 py-2">{item}</td>
      <td className="py-2">{item}</td>
      <td className="py-2">{item}</td>
      <td className="py-2">{item}</td>
    </tr>
  ))
}

     
    </tbody>
          </table>
          </CardBody>
        </Card>
      </div>

      {/* Render as cards on small screens (sm and below) */}
      <div className="sm:hidden">
        {TempArray.map((item, index) => (
          <Card key={index} className="mb-4">
            <CardHeader variant="gradient" color="gray" className="p-6">
              <Typography variant="h6" color="white">
                {item}
              </Typography>
            </CardHeader>
            <CardBody>
              <Typography variant="body">{item}</Typography>
              <Typography variant="body">{item}</Typography>
              
              <Typography variant="body">{item}</Typography>
              <Button color="blue" size="sm" className="mt-2">
                <FaEdit className="mr-1" /> Edit
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Add Expense Card */}

      {
        Modal?(  <div className='md:hidden'>
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
      <Card className="md:flex-1">
        <CardHeader variant="gradient" color="gray" className="p-6">
          <Typography variant="h6" color="white">
            Add Expense <span className='justify-end flex'><IoCloseOutline onClick={()=>{setModal(fal)}}/></span>
          </Typography>
        </CardHeader>
        <CardBody>
          <div className="mb-4">
            {/* Input field for adding expense */}
            <div className="relative w-full h-10">
              <input
                className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline-none focus:outline-none placeholder-blue-gray-400 border border-blue-gray-200 rounded-md px-3 py-2"
                placeholder="Expense"
                value={Expense}
                onChange={(e) => setExpense(e.target.value)}
              />
             
            </div>
          </div>
          <Button onClick={onSubmit} color="blue" className="w-full">
            Add
          </Button>
        </CardBody>
      </Card>
    </div>
  </div>
  
        </div>):""
      }

    



      <Card className="mt-8 hidden md:block  md:flex-1">
        <CardHeader variant="gradient" color="gray" className="p-6">
          <Typography variant="h6" color="white">
            Add Expense
          </Typography>
        </CardHeader>
        <CardBody>
          <div className="mb-4">
            {/* Input field for adding expense */}
            <div class="">
  <div class="relative w-full min-w-[200px] h-10 ">
    <input
    
      class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" "
      value={Expense}
      onChange={(e)=>{setExpense(e.target.value)}} />
      <label
      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Username
    </label>
  </div>
</div>  
          </div>
          <Button onClick={()=>{onSubmit()}} color="blue" className="w-full">
            Add
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Expense;
