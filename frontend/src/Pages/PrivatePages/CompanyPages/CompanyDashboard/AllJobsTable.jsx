import React, { useContext } from 'react'
import { Button } from "flowbite-react";
import { JobApiData } from '../../../../Contexts/JobApiContext';
import { useNavigate } from 'react-router-dom';
import JobStatus from '../../../../Components/LogicalComponents/JobStatus';
const AllJobsTable = () => {
  // allJobs = {data.jobsPosted}
  
  let {userAllData,deleteJobofCompanyById} = useContext(JobApiData)
  let jobs = userAllData.jobsPosted
  

  const navigate = useNavigate();
  const CurrentPage = (id) => {

    const jobData = jobs.find((job) => job.jobId === id); // Example data
    console.log(jobData)

      navigate("/update-job", { state: jobData });
    ;}
  return (
    <div className="max-w-full overflow-x-auto">
    <table className="min-w-[150px] w-full table-auto border border-collapse border-gray-200 rounded-lg overflow-x-scroll">
      <thead className="bg-gray-100">
        <tr>
          <th className="md:px-4 px-2 py-2 text-left">Job Title</th>
          <th className="md:px-4 px-2 py-2 text-left">Upload Date</th>
          <th className="md:px-4 px-2 py-2 text-left">Job Type</th>
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
           
            <td className="md:px-4 px-2 py-2 text-[14px]">{job.jobTitle}</td>
            <td className="md:px-4 px-2 py-2 text-[14px]">{job.datePosted}</td>
            <td className="md:px-4 px-2 py-2 text-[14px]">{job.jobType}</td>
            <td className="md:px-4 px-2 py-2">
              <JobStatus date={job.applyBefore} />
            </td>
            <td className="md:px-4 px-2 py-2 text-[14px] flex items-center gap-3">
            <Button color="green" className='cursor-pointer' onClick={()=>CurrentPage(job.jobId)} >Update</Button>
            <Button color="red" className='cursor-pointer' onClick={()=>deleteJobofCompanyById(job.jobId)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default AllJobsTable
