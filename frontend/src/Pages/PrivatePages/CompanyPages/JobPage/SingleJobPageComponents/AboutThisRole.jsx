import { Badge } from 'flowbite-react'
import React from 'react'

const AboutThisRole = () => {
  return (
    <div className="space-y-6">
    <div className="min-h-fit relative w-full md:p-6 p-4  dash-boxes">
      <h4 className="font-semibold mb-2">About this role</h4>

      <div className="text-sm text-gray-700 space-y-1">
        <p>
          <strong>Apply Before:</strong> July 31, 2021
        </p>
        <p>
          <strong>Job Posted On:</strong> July 1, 2021
        </p>
        <p>
          <strong>Job Type:</strong> Full-Time
        </p>
        <p>
          <strong>Salary:</strong> $75k–85k USD
        </p>
      </div>
    </div>

    <div className='min-h-fit relative w-full md:p-6 p-4  dash-boxes'>
      <h4 className="font-semibold mb-2">Categories</h4>
      <div className="flex gap-2 flex-wrap">
        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 text-xs rounded">
          Marketing
        </span>
        <span className="bg-green-100 text-green-800 px-2 py-1 text-xs rounded">
          Design
        </span>
      </div>
    </div>

    <div className='min-h-fit relative w-full md:p-6 p-4  dash-boxes'>
      <h4 className="font-semibold mb-2">Required Skills</h4>
      <div className="flex flex-wrap gap-2">
        {[
          "Project Management",
          "Copywriting",
          "Social Media Marketing",
          "English",
          "Copy Editing",
        ].map((skill, idx) => (
          <Badge className=" rounded-full px-3 py-1 custom-gradient text-white" key={idx} > {skill} </Badge>
        ))}
      </div>
    </div>
  </div>
  )
}

export default AboutThisRole
