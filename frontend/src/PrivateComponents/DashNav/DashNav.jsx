import React from 'react'
import { Link } from 'react-router-dom'

const DashNav = ({title}) => {
  return (
    <div className=' w-[100%]  h-[70px] sticky top-0 left-0 bg-white z-10 flex py-3 px-10 justify-between items-center n'>
      <h2 className='text-2xl font-medium  text-black'>{title}</h2>
      <Link to={'/'} className='bgLinearDark py-3 px-4 rounded-3xl text-white font-medium'>Back to homepage</Link>
    </div>
  )
}

export default DashNav
