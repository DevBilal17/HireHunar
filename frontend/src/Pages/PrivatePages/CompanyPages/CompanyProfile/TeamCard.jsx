import React from 'react'
import { Card, Dropdown, DropdownItem } from "flowbite-react";

import { Link } from 'react-router-dom';
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaReact, FaUser } from 'react-icons/fa';
const TeamCard = () => {
  return (
    <Card className="md:max-w-[220px] w-full  mt-4 custom-gradient">
      <div className="flex flex-col items-center pb-2">
        {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
        <FaUser className='h-[80px] w-[80px] mb-3 rounded-full shadow-lg text-white'/>
        <h5 className="mb-1 text-xl font-medium text-white">Bonnie Green</h5>
        <span className="text-sm text-amber-100">Visual Designer</span>
        <div className="mt-2 flex space-x-3 lg:mt-6">
          <Link
            
            className="inline-flex "
          >
            <IoLogoInstagram className='text-[25px] text-white'/>
          </Link>
          <Link
            
            className="inline-flex "
          >
            <CiLinkedin className='text-[25px] text-white'/>
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default TeamCard
