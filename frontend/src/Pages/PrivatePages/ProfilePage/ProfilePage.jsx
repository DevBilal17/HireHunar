import React from 'react'
import Side from '../../../PrivateComponents/Side/Side'
import DashNav from '../../../PrivateComponents/DashNav/DashNav'
import ProfilePageContentContainer from './ProfilePageComponents/ProfilePageContentContainer';

const ProfilePage = () => {
  return (
    <div className='flex'>
        <Side/>
        <div className='w-full flex flex-col'>
        <DashNav title={'My Profile'} />
        <div className=" h-full max-w-full w-full mx-auto flex-1 ml-[80px] lg:ml-[250px]   px-6 py-7">
          <ProfilePageContentContainer/>
        </div>
     </div>
    </div>
  )
}

export default ProfilePage
