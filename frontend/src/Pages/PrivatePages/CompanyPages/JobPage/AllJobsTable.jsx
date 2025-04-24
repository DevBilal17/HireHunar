import React from "react";

const AllJobsTable = ({jobs}) => {
  return (
    <div>
      <div className="max-w-full overflow-x-auto">
        <table className="min-w-[150px] w-full table-auto border border-collapse border-gray-200 rounded-lg overflow-x-scroll">
          <thead className="bg-gray-100">
            <tr>
              <th className="md:px-4 px-2 py-2 text-left">Photo</th>
              <th className="md:px-4 px-2 py-2 text-left">Job Title</th>
              <th className="md:px-4 px-2 py-2 text-left">Applied Date</th>
              <th className="md:px-4 px-2 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="md:px-4 px-2 py-2">
                  <img
                    src={job.photo}
                    alt="Applicant"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td className="md:px-4 px-2 py-2 text-[14px]">
                  {application.title}
                </td>
                <td className="md:px-4 px-2 py-2 text-[14px]">
                  {application.appliedDate}
                </td>
                <td className="md:px-4 px-2 py-2">
                  <span
                    className={`px-2 py-1 rounded text-[14px] ${
                      application.status === "Accepted"
                        ? "bg-green-100 text-green-700"
                        : application.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {application.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobsTable;
