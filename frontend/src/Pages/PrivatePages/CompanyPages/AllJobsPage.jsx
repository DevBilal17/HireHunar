import React from "react";

const AllJobsPage = () => {
  // Static data representing jobs
  const jobs = [
    {
      id: "1",
      title: "Frontend Developer",
      description: "We are looking for a skilled React developer.",
      postedAt: "2025-04-01T10:00:00Z",
      status: "Open",
    },
    {
      id: "2",
      title: "Backend Developer",
      description: "Experience with Node.js is required.",
      postedAt: "2025-03-20T12:00:00Z",
      status: "Closed",
    },
    {
      id: "3",
      title: "UI/UX Designer",
      description: "Creative designer with a strong portfolio.",
      postedAt: "2025-03-15T08:30:00Z",
      status: "Open",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Posted Jobs</h1>
      {jobs.length === 0 ? (
        <div>No jobs found.</div>
      ) : (
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Job Title</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Posted On</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{job.title}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.description}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(job.postedAt).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {job.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllJobsPage;
