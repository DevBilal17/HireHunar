import React from 'react'
import { SlCalender } from "react-icons/sl";
import CardContent from './CardContent';
const Card3 = () => {
  return (
    <div className='flex items-center h-[500px] gap-4  relative'>
      <div className='w-[50%] bg-amber-400 h-[95%]  rounded-2xl'>

      </div>
      <CardContent icon={<SlCalender className='text-[44px] text-pink-500'/>} c={'before'}  head={'Scheduling Interview'} para={'You can schedule your interview with the recruiters'}/>
    </div>
  )
}

export default Card3
