import React, { useContext } from 'react'
import ProfileImageSection from './ProfileImageSection'
import AboutMe from './AboutMe'
import MyExperienceSection from './MyExperienceSection'
import { ApiUserData } from '../../../../Contexts/ApiContext'
import MyEducation from './MyEducation'
import MySkillsSection from './MySkillsSection'
import MyPortfolioSection from './MyPortfolioSection'
import AdditionalInformation from './AdditionalInformation'

const ProfilePageContentContainer = () => {
  const {profile} = useContext(ApiUserData)
  return (
    <div className='flex w-full h-full gap-10 lg:flex-row flex-col'>
      <div className='left flex flex-col h-full gap-6 lg:w-[70%] w-full '>
        <ProfileImageSection profile={profile}/>
        <AboutMe profile={profile}/>
        <MyExperienceSection profile={profile}/>
        <MyEducation profile={profile}/>
        
        <MyPortfolioSection profile={profile}/>
      </div>
      <div className='right  lg:w-[30%] w-full  h-full flex flex-col gap-10' >
      <MySkillsSection profile={profile} />
        <AdditionalInformation profile={profile}/>
      </div>
    </div>
  )
}

export default ProfilePageContentContainer
