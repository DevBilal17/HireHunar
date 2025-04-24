import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { GiPaperClip } from "react-icons/gi";
import JobsApplied from "./JobsApplied";
import Interviewed from "./Interviewed";
import JobAppliedStatus from "./JobAppliedStatus";
import JobAppliedTable from "./JobAppliedTable";
const DashComp = () => {
    let data =  [
        {
          role: "Social Media Assistant",
          company: "Nomad",
          location: "Paris, France",
          date: "24 July 2021",
          status: "In Review",
          statusColor: "text-yellow-600 border-yellow-400",
        },
        {
          role: "Social Media Assistant",
          company: "Udacity",
          location: "New York, USA",
          date: "23 July 2021",
          status: "Shortlisted",
          statusColor: "text-indigo-600 border-indigo-400",
        },
        {
          role: "Social Media Assistant",
          company: "Packer",
          location: "Madrid, Spain",
          date: "22 July 2021",
          status: "Declined",
          statusColor: "text-red-600 border-red-400",
        },
      ]
  return (
    <div className="flex">
      {/* Main Content Area */}
      <div className=" flex flex-col w-full overflow-auto">
        <main className="md:p-4 p-3 space-y-6">
          {/* Total Jobs Applied and Interviewed Section */}
          <div className="flex md:flex-row flex-col gap-4">
            <div className="flex md:w-[50%]  w-full flex-col gap-3">
              <JobsApplied />
              <Interviewed />
            </div>

            <div className="flex md:w-[50%] w-full">
              <JobAppliedStatus />
            </div>
          </div>

          {/* Recent Applications History */}
          <div className="bg-white md:px-6 py-6 px-3 rounded-2xl relative max-w-full  shadow-md sm:rounded-lg">
            <h3 className="text-lg font-semibold mb-4">
              Recent Applications History
            </h3>
            <JobAppliedTable/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashComp;



{/* <div className="overflow-scroll">
              <Table>
                <TableBody className="divide-y">
                { data.map((user, index) => (
                    <TableRow className="bg-white">
                      <TableCell className="whitespace-nowrap text-black">
                        <div className="flex">
                          <div className="w-[50px]">
                            <img
                              src="https://randomuser.me/api/portraits/men/32.jpg"
                              alt=""
                              className="h-10 w-10 rounded-[50%]"
                            />
                          </div>
                          <div className="ml-3">
                            <p className="font-bold text-md">{user.role}</p>
                            <p className="text-[12px]">{user.location}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="font-bold text-md text-black">
                          Date Applied
                        </p>
                        <p className="text-[12px]">{user.date}</p>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`mt-1 text-xs border px-2 py-0.5 rounded-full   ${user.statusColor}`}
                        >
                          {user.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div> */}