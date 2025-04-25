import React from 'react'

const JobsPosted = ({data}) => {
  let {jobsPosted} = data;
  return (
    <div className="bg-white md:p-6 p-4 flex-1 rounded-2xl shadow-md">
      <p className="text-gray-600">Total Jobs Posted</p>
      <h2 className="text-3xl font-bold">{jobsPosted.length}</h2>
    </div>
  )
}

export default JobsPosted
