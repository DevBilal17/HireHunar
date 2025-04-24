import React from 'react'
import { Link } from 'react-router-dom'
import { FaFire, FaReact } from "react-icons/fa";
const InfoSection = () => {
  return (
    <div className='flex md:flex-row flex-col gap-4 items-center  min-h-fit relative w-full md:p-6 p-4   dash-boxes'>
      <div className='flex  md:h-[100px]  w-[60px] pt-1 justify-center'>
        {/* <img src="" alt="" /> */}
        <FaReact className='text-[60px] text-blue-900'/>
      </div>
      <div className='md:mt-0   flex  flex-col  md:items-start  items-center '>
        <h2 className='text-3xl font-semibold'>Nomad</h2>
        <Link className='text-blue-800 cursor-pointer'>
        https://nomad.com
        </Link>
        <div className='flex mt-2 gap-6 flex-wrap justify-evenly'>
            <div className='flex items-center gap-2'>
                <div className='icon h-[30px] rounded-full border px-1 py-1  flex items-center justify-center border-blue-900 w-[30px]'>
                     <FaFire className='text-cyan-500'/>
                </div>
                <div className='content flex flex-col'>
                    <span className='text-sm text-gray-600'>Founded</span>
                    <span className='text-sm text-gray-950'>July 31,2011</span>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='icon h-[30px] rounded-full border px-1 py-1  flex items-center justify-center border-blue-900 w-[30px]'>
                     <FaFire className='text-cyan-500'/>
                </div>
                <div className='content flex flex-col'>
                    <span className='text-sm text-gray-600'>Founded</span>
                    <span className='text-sm text-gray-950'>July 31,2011</span>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='icon h-[30px] rounded-full border px-1 py-1  flex items-center justify-center border-blue-900 w-[30px]'>
                     <FaFire className='text-cyan-500'/>
                </div>
                <div className='content flex flex-col'>
                    <span className='text-sm text-gray-600'>Founded</span>
                    <span className='text-sm text-gray-950'>July 31,2011</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InfoSection
