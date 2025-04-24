import React from 'react'
import { Button } from "flowbite-react";
const AllJobsTable = () => {
    const jobs = [
        {
          title: "UI/UX Designer",
          uploadDate: "2025-04-01",
          category: "Design",
          status: "Close",
        },
        {
          title: "Frontend Developer",
          uploadDate: "2025-04-10",
          category: "Development",
          status: "Open",
        },
        {
          title: "Backend Developer",
          uploadDate: "2025-04-05",
          category: "Development",
          status: "Close",
        },
        {
          title: "Data Scientist",
          uploadDate: "2025-03-28",
          category: "Data Analysis",
          status: "Open",
        },
        {
          title: "Marketing Specialist",
          uploadDate: "2025-03-20",
          category: "Marketing",
          status: "Close",
        },
      ];
      
      
  return (
    <div className="max-w-full overflow-x-auto">
    <table className="min-w-[150px] w-full table-auto border border-collapse border-gray-200 rounded-lg overflow-x-scroll">
      <thead className="bg-gray-100">
        <tr>
          <th className="md:px-4 px-2 py-2 text-left">Job Title</th>
          <th className="md:px-4 px-2 py-2 text-left">Upload Date</th>
          <th className="md:px-4 px-2 py-2 text-left">Category</th>
          <th className="md:px-4 px-2 py-2 text-left">Status</th>
          <th className="md:px-4 px-2 py-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
          <tr
            key={index}
            className="border-b border-gray-200 hover:bg-gray-50"
          >
           
            <td className="md:px-4 px-2 py-2 text-[14px]">{job.title}</td>
            <td className="md:px-4 px-2 py-2 text-[14px]">{job.uploadDate}</td>
            <td className="md:px-4 px-2 py-2 text-[14px]">{job.category}</td>
            <td className="md:px-4 px-2 py-2">
              <span
                className={`px-2 py-1 rounded text-[14px] ${
                  job.status === "Open"
                    ? "bg-green-100 text-green-700"
                    : job.status === "Close"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {job.status}
              </span>
            </td>
            <td className="md:px-4 px-2 py-2 text-[14px] flex items-center gap-3">
            <Button color="green" className='cursor-pointer'>Update</Button>
            <Button color="red" className='cursor-pointer'>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default AllJobsTable
