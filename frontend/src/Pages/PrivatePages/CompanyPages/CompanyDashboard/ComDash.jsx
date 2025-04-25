
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { GiPaperClip } from 'react-icons/gi';
import AllJobsTable from './AllJobsTable';

const ComDash = ({data}) => {
  let {companyStatistics,services,team} = data
  return (
    <div className="flex bg-gray-100">
      
    {/* Main Content Area */}
    <div className="flex-1 flex flex-col w-full overflow-auto">
      <main className="p-4 space-y-6">
        {/* Total Jobs Applied and Interviewed Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className='grid grid-rows-2 gap-3'>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-600">Total Jobs Posted</p>
              <h2 className="text-3xl font-bold">{companyStatistics.totalJobsPosted}</h2>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-600">{team.length>1?'Total Team Members':'Total Team Member'}</p>
              <h2 className="text-3xl font-bold">{team.length}</h2>
            </div>

          </div>

          <div>
          <div className='grid grid-rows-2 gap-3'>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-600">Total Hirings</p>
              <h2 className="text-3xl font-bold">{companyStatistics.totalHires}</h2>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-600">Total Services</p>
              <h2 className="text-3xl font-bold">{services.length}</h2>
            </div>

          </div>

          </div>

        </div>

        {/* Total Job Posted */}
        <div className="bg-white p-6 rounded-2xl relative  shadow-md sm:rounded-lg">
          <h3 className="text-lg font-semibold mb-4">All Jobs</h3>
          {/* <div className="overflow-x-auto">
            <Table>

              <TableBody className="divide-y">
                {[
                  {
                    Title: 'Social Media Assistant',
                    company: 'Nomad',
                    location: 'Paris, France',
                    date: '24 July 2021',
                    Applicants:"23",
                    status: 'In Review',
                    statusColor: 'text-yellow-600 border-yellow-400'
                  },
                  {
                    Title: 'Social Media Assistant',
                    company: 'Udacity',
                    location: 'New York, USA',
                    date: '23 July 2021',
                    Applicants:"20",
                    status: 'Shortlisted',
                    statusColor: 'text-indigo-600 border-indigo-400'
                  },
                  {
                    Title: 'Social Media Assistant',
                    company: 'Packer',
                    location: 'Madrid, Spain',
                    date: '22 July 2021',
                    Applicants:"21",
                    status: 'Declined',
                    statusColor: 'text-red-600 border-red-400'
                  }
                ].map((user, index) => (
                  <TableRow className="bg-white">
                    <TableCell className="whitespace-nowrap text-black">
                      <div className='flex'>
                        <div className='ml-3'>
                          <p className='font-bold text-md'>{user.Title}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className='font-bold text-md text-black'>Date Posted</p>
                      <p className='text-[12px]'>{user.date}</p>
                    </TableCell>
                    <TableCell>
                      <p className='font-bold text-md text-black'>Total Applicants</p>
                      <p className='text-[12px]'>{user.Applicants}</p>
                    </TableCell>
                    

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div> */}
          <AllJobsTable />
        </div>
      </main>
    </div>
  </div>

  )
}

export default React.memo(ComDash)
