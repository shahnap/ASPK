import { BaseUrl } from '@/configs/config/Config'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaUncharted } from 'react-icons/fa'

function AddExpense() {
    const [ExpenseData, setExpenseData] = useState([])

    useEffect(() => {
        axios.get(BaseUrl+'master/getexpenses').then(function(response){
            console.log("response",response);
            setExpenseData(response.data)


        }).catch(function(err){
            alert(err);
        })
      
    }, [])
    
  return (
    <div>
        <div className='w-full mt-1 p-4 '>
          <h2>Add Expense</h2>  

        </div>
        <div className='h-[50vh]'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="p-4">
        <div className="font-bold text-xl mb-2 justify-center flex">TODAY</div>
      <div className='flex items-center border-b pb-4'>
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
        />
        <div className='ml-2 flex flex-col'>
          <div className='text-gray-700 text-base'>Expense</div>
          <div className='text-gray-500 text-sm'>date</div>
        </div>
        <div className='ml-auto flex flex-col items-end'>
          <div className='text-red-600 text-base'><b>50</b></div>
        </div>
      </div>

      
 
      </div>

    </div>

    

        </div>
        <div className='h-full'>

        <div class="relative h-10 mb-3 ">
    <input
      class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" "
// value={Expense}
// onChange={(e)=>setExpense(e.target.value)}
      
      /><label
      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Amount
    </label>
    
  </div>

  <div class="relative h-10 w-full min-w-[200px] mb-3">
  <select
    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
    {/* <option value="brazil">Brazil</option>
    <option value="bucharest">Bucharest</option>
    <option value="london">London</option>
    <option value="washington">Washington</option> */}
    {
        ExpenseData.map(item=>(
            <option key={item.id} value={item.id}>
            {item.expense}
          </option>
        ))
    }
  </select>
  <label
    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Select Expense
  </label>
</div>


  <div class="relative h-10 w-full min-w-[200px] mb-3">
  <select
    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
    <option value="">SELECT BANK</option>
    
    <option value="HDFC">HDFC</option>
    <option value="Federal">Federal</option>
    <option value="Savings">Savings</option>
    <option value="SBI">SBI</option>
    <option value="CARD 1">CARD 1</option>
    <option value="CARD 2">CARD 2</option>

  </select>
  <label
    class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
    Select a City
  </label>
</div>


<button
  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full"
  type="button"
>
  Add Expense
</button>
  </div>   

    
    </div>
  )
}

export default AddExpense