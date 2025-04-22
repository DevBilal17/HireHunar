import React from 'react'
import ProfileImageSection from './ProfileImageSection'

const ProfilePageContentContainer = () => {
  return (
    <div className='flex w-full h-full gap-10 lg:flex-row flex-col'>
      <div className='left flex flex-col h-full gap-10 lg:w-[70%] w-full '>
        <ProfileImageSection/>
      </div>
      <div className='right bg-red-500 lg:w-[30%] w-full  h-full flex flex-col gap-10' ></div>
    </div>
  )
}

export default ProfilePageContentContainer
