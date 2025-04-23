import React from 'react'
import DashNav from '../../../PrivateComponents/DashNav/DashNav'
import Side from '../../../PrivateComponents/Side/Side'

const AllJobs = () => {
  return (
    <div className='flex'>
    <Side/>
    <div className='w-full flex flex-col'>
    <DashNav title={'All Jobs'} />
    <div className=" h-full max-w-full w-full mx-auto   px-6 py-7">
      
    </div>
 </div>
</div>
  )
}

export default AllJobs
