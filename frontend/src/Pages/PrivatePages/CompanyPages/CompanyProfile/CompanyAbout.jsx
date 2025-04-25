import React from 'react'

const CompanyAbout = ({profile}) => {
  let aboutCompany = profile.aboutCompany.companyDescription
  return (
    <div className="min-h-fit relative w-full md:p-6 p-4  dash-boxes">
      <h2 className="text-xl font-semibold">About</h2>
       <p className='text-gray-700 mt-1'>{
        aboutCompany?aboutCompany:'No Data'
        }</p>
    </div>
  )
}

export default React.memo(CompanyAbout)
