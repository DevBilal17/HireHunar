import React from 'react'
import { Link } from 'react-router-dom'
import { FaFire, FaReact } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";
import { LiaIndustrySolid } from "react-icons/lia";
import LinkButton from '../../../../AnimatedComponents/LinkButton';
const InfoSection = ({profile}) => {
  let {name,profilePicture,websiteLink,aboutCompany,industry} = profile
  return (
    <div className='flex md:flex-row flex-col gap-4 items-center  min-h-fit relative w-full md:p-6 p-4   dash-boxes'>
      <div className='flex  md:h-[100px] w-[60px] h-[60px]  md:w-[100px] items-center   rounded-full overflow-hidden  justify-center border border-gray-300 '>
        <img src={profilePicture} alt="Logo" className=' w-full' />
      </div>
      <div className='md:mt-0   flex  flex-col  md:items-start  items-center '>
        <h2 className='text-3xl font-semibold text-center md:text-left'>{name}</h2>
        <Link className='text-blue-800 cursor-pointer'>
        {websiteLink}
        </Link>
        <div className='flex mt-2 gap-6 flex-wrap  justify-start md:justify-evenly'>
            <div className='flex items-center gap-2'>
                <div className='icon h-[30px] rounded-full border px-1 py-1  flex items-center justify-center border-blue-900 w-[30px]'>
                     <FaFire className='text-cyan-500'/>
                </div>
                <div className='content flex flex-col'>
                    <span className='text-sm text-gray-600'>Founded</span>
                    <span className='text-sm text-gray-950'>{aboutCompany.yearFounded}</span>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='icon h-[30px] rounded-full border px-1 py-1  flex items-center justify-center border-blue-900 w-[30px]'>
                     <LiaIndustrySolid className='text-cyan-500'/>
                </div>
                <div className='content flex flex-col'>
                    <span className='text-sm text-gray-600'>Industry</span>
                    <span className='text-sm text-gray-950'>{industry}</span>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='icon h-[30px] rounded-full border px-1 py-1  flex items-center justify-center border-blue-900 w-[30px]'>
                     <FaHospitalUser className='text-cyan-500'/>
                </div>
                <div className='content flex flex-col'>
                    <span className='text-sm text-gray-600'>No. of Employees</span>
                    <span className='text-sm text-gray-950'>{aboutCompany.companySize}</span>
                </div>
            </div>
        </div>
      </div>
      <LinkButton link={`/company-profile/edit-profile/123`} className="ml-[40px]">Edit Profile</LinkButton>
    </div>
  )
}

export default React.memo(InfoSection)
