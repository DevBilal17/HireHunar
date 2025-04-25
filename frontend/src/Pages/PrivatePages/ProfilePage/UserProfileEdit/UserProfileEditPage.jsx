import React,{useState} from 'react'
import Side from '../../../../PrivateComponents/Side/Side'
import DashNav from '../../../../PrivateComponents/DashNav/DashNav'
import { useForm } from 'react-hook-form';
import EditForm from './EditForm';


const UserProfileEditPage = () => {
  return (
    <div className="flex">
      <Side />
      <div className="w-full flex flex-col flex-1 ml-[80px] lg:ml-[250px]">
        <DashNav title={"Edit Profile"} />
        <div className=" min-h-screen max-w-full w-full mx-auto  bg-gray-100  px-6 py-4">
          <EditForm/>
        </div>
      </div>
    </div>
  )
}

export default UserProfileEditPage
