import React from 'react'
import Side from '../../../PrivateComponents/Side/Side'
import DashNav from '../../../PrivateComponents/DashNav/DashNav'

const ProfilePage = () => {
  return (
    <div className='flex'>
        <Side/>
        <div className='w-full flex flex-col'>
        <DashNav title={'My Profile'} />
     </div>
    </div>
  )
}

export default ProfilePage
