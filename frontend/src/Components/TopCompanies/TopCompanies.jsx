import React from 'react'
import './TopCompanies.css'
const TopCompanies = () => {
  return (
    <div className="topCompanies flex flex-col items-center py-16 px-2.5">
      <p className="p1 font-semibold">Top Companies</p>
      <h1 className="text-center md:text-6xl font-semibold sm:text-[54px] text-5xl text leading-16 pt-4 max-w-[600px]">
        Best Companies For Employees {new Date().getFullYear()}
      </h1>
     
    </div>
  )
}

export default TopCompanies
