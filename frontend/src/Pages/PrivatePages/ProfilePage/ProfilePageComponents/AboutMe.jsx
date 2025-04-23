import React, { useContext } from 'react'
import { ApiUserData } from '../../../../Contexts/ApiContext'

const AboutMe = ({profile}) => {
  // let {profile} = useContext(ApiUserData)
  return (
   <div className="min-h-fit relative w-full p-5 border border-gray-300 profileImageSection ">
         <h2 className='text-xl font-semibold'>
            About Me
         </h2>
         <p className='mt-3 text-gray-500 pl-5'>
          {profile.aboutMe ? profile.aboutMe :'Empty'}
         </p>
         
    </div>
  )
}

export default AboutMe
