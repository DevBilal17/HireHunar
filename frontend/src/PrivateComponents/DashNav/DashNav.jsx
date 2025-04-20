import React from 'react'
import { Link } from 'react-router-dom'

const DashNav = ({title}) => {
  return (
    <div className='w-full shadow h-[70px] flex py-3 px-10 justify-between items-center'>
      <h2 className='text-2xl font-medium  text-black'>{title}</h2>
      <Link to={'/'} className='bgLinearDark py-3 px-4 rounded-3xl text-white font-medium'>Back to homepage</Link>
    </div>
  )
}

export default DashNav
