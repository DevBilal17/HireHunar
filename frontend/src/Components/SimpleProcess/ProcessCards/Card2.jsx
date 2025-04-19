import React from 'react'
import CardContent from './CardContent'
import { GoFileSymlinkFile } from "react-icons/go";
const Card2 = () => {
  return (
    <div className='flex items-center h-[500px]  relative'>
      <div className='w-[50%] bg-amber-400 h-full'>

      </div>
      <CardContent icon={<GoFileSymlinkFile className='text-[44px] text-pink-500'/>} c={'before'} head={'Directly Portfolio Upload'} para={'You can upload your resume or CV, and recruiters will reviewed'}/>
    </div>
  )
}

export default Card2
