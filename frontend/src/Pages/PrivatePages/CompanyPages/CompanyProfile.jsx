import React from 'react'
import Side from '../../../PrivateComponents/Side/Side'
import DashNav from '../../../PrivateComponents/DashNav/DashNav'

const CompanyProfile = () => {
  return (
    <div className='flex'>
    <Side/>
    <div className='w-full flex flex-col'>
    <DashNav title={'Company Profile'} />
    <div className=" h-full max-w-full w-full mx-auto   px-6 py-7">
      
    </div>
 </div>
</div>
  )
}

export default CompanyProfile
