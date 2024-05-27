import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

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
import { IoMdSend } from "react-icons/io";
import axios from 'axios';
import toast from 'react-hot-toast';
import { BaseUrl } from '@/configs/config/Config';


function Expense() {
  const [Expense, setExpense] = useState("")
 
  const [response, setresponse] = useState("")
  
const [ExpenseData,setExpenseData] = useState([])

  useEffect(() => {
    axios.get(BaseUrl+'master/getexpenses')
    .then(function(response){
      setExpenseData(response.data)
    }).catch((err)=>{
     console.log(err);
    })
   }, [response])

  const HandleSubmit = () => {
    const ExpenseList = {
        expense: Expense, // Ensure this matches your schema
        date: new Date() // Optionally include a date or let the backend default it
    };

    axios.post(BaseUrl + 'master/setexpense', ExpenseList)
        .then(function (response) {
            console.log(response);
            if (response.data.message === "Expense Added successfully") {
                toast.success("Expense Added successfully");
                setresponse(response)
                setExpense("")
                
            }
        })
        .catch(function (err) {
            toast.error("Expense Add failed");
            console.log(err);
        });
};

 
  return (
    <div className='block min-h-screen'>
      {/* ---------------------------------------------header----------------------------------------------------- */}
      <div className='h-[85vh] '>
      <div className='block'>
        amal
      </div>



      {/* -----------------------------------------------------body--------------------------------------------------- */}
<div className=' h-[80vh] overflow-scroll pb-1'>
      {ExpenseData?.map((item, index) => (
        <div  className="p-4 relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
          <div className='flex w-full'>
            <div className='justify-start flex mr-2 md:mr-4'>
              {index+1}
            </div>
            <div className='flex'>
              {item.expense}
            </div>
            <div className='justify-end flex w-full'>
              {item.date}
            </div>
          </div>
        </div>
      ))}
</div>

</div>


      {/* ----------------------------------------------------------------footer---------------------------------------- */}
   <div className='items-end    flex ' >


     
<div class=" w-full   flex">
  <div class="relative  w-[85%] md:w-[90%] h-10">
    <input
      class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" "
value={Expense}
onChange={(e)=>setExpense(e.target.value)}
      
      /><label
      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Add Expense
    </label>
    
  </div>
  <div className='w-[15%] md:w-[10%] items-center justify-center flex border ml-1 border-gray-500 rounded-md'>
  <IoMdSend style={{fontSize:'1.3rem'}} onClick={HandleSubmit}/>
  </div>
</div>  


   </div>
   </div>
  );
}

export default Expense;
