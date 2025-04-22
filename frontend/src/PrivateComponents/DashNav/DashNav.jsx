import React from 'react'
import { Link } from 'react-router-dom'

const DashNav = ({title}) => {
  return (
    <div className=' w-[100%]  h-[70px] sticky top-0 left-0 bg-white z-10 flex py-3 px-10 justify-between items-center n'>
      <h2 className='text-2xl font-medium  text-black'>{title}</h2>
      <Link to={'/'} className=' py-3 px-4 rounded-3xl text-white font-medium bg-gradient-to-r from-cyan-500 to-blue-500 bg-opacity-10 backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform'>Back to homepage</Link>
    </div>
  )
}

export default DashNav
