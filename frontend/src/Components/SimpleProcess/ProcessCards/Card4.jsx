import React from 'react'
import { RiUserFollowLine } from "react-icons/ri";
import CardContent from './CardContent';
const Card4 = () => {
  return (
    <div className='flex items-center h-[500px]  relative'>
         <div className='w-[50%] bg-amber-400 h-full'>
   
         </div>
         <CardContent icon={<RiUserFollowLine className='text-[44px] text-pink-500'/>} c={'before'}  head={'Selected Candidate'} para={'Selected candidate can entry the company for interview with recruiter'}/>
       </div>
  )
}

export default Card4
