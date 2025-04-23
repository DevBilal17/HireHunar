import React from 'react'
import { Card, Dropdown, DropdownItem } from "flowbite-react";

import { Link } from 'react-router-dom';
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
const TeamCard = () => {
  return (
    <Card className="md:max-w-sm  mt-4">
      <div className="flex flex-col items-center pb-10">
        {/* <Image
          alt="Bonnie image"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
          className="mb-3 rounded-full shadow-lg"
        /> */}
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <Link
            
            className="inline-flex "
          >
            <IoLogoInstagram/>
          </Link>
          <Link
            
            className="inline-flex "
          >
            <CiLinkedin/>
          </Link>
        </div>
      </div>
    </Card>
  )
}

export default TeamCard
