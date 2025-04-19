import React from 'react'
import CardContent from './CardContent'
import { ImFilesEmpty } from "react-icons/im";
const Card1 = () => {
  return (
    <div className='flex items-center h-[500px]  relative'>
      <div className='w-[50%] bg-amber-400 h-full'>

      </div>
      <CardContent icon={<ImFilesEmpty className='text-[44px] text-pink-500'/>} head={'Complete Your Profile'} para={'Complete your profile so that recruiters can see information about you'}/>
    </div>
  )
}

export default Card1
