import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
const JobAppliedTable = () => {
    const applications = [
        {
          photo: "https://via.placeholder.com/50",
          title: "Frontend Developer",
          appliedDate: "2025-04-20",
          status: "Pending",
        },
        {
          photo: "https://via.placeholder.com/50",
          title: "Backend Developer",
          appliedDate: "2025-04-18",
          status: "Accepted",
        },
        {
          photo: "https://via.placeholder.com/50",
          title: "UI/UX Designer",
          appliedDate: "2025-04-15",
          status: "Rejected",
        },
      ];
  return (
    // <div className="overflow-x-auto">
    //   <Table striped>
    //     <TableHead>
    //       <TableHeadCell>Product name</TableHeadCell>
    //       <TableHeadCell>Color</TableHeadCell>
    //       <TableHeadCell>Category</TableHeadCell>
    //       <TableHeadCell>Price</TableHeadCell>
    //       <TableHeadCell>
    //         <span className="sr-only">Edit</span>
    //       </TableHeadCell>
    //     </TableHead>
    //     <TableBody className="divide-y">
    //       <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
    //         <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
    //           Apple MacBook Pro 17"
    //         </TableCell>
    //         <TableCell>Sliver</TableCell>
    //         <TableCell>Laptop</TableCell>
    //         <TableCell>$2999</TableCell>
    //         <TableCell>
    //           <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
    //             Edit
    //           </a>
    //         </TableCell>
    //       </TableRow>
    //       <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
    //         <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
    //           Microsoft Surface Pro
    //         </TableCell>
    //         <TableCell>White</TableCell>
    //         <TableCell>Laptop PC</TableCell>
    //         <TableCell>$1999</TableCell>
    //         <TableCell>
    //           <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
    //             Edit
    //           </a>
    //         </TableCell>
    //       </TableRow>
    //       <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
    //         <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
    //         <TableCell>Black</TableCell>
    //         <TableCell>Accessories</TableCell>
    //         <TableCell>$99</TableCell>
    //         <TableCell>
    //           <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
    //             Edit
    //           </a>
    //         </TableCell>
    //       </TableRow>
    //       <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
    //         <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
    //           Google Pixel Phone
    //         </TableCell>
    //         <TableCell>Gray</TableCell>
    //         <TableCell>Phone</TableCell>
    //         <TableCell>$799</TableCell>
    //         <TableCell>
    //           <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
    //             Edit
    //           </a>
    //         </TableCell>
    //       </TableRow>
    //       <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
    //         <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple Watch 5</TableCell>
    //         <TableCell>Red</TableCell>
    //         <TableCell>Wearables</TableCell>
    //         <TableCell>$999</TableCell>
    //         <TableCell>
    //           <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
    //             Edit
    //           </a>
    //         </TableCell>
    //       </TableRow>
    //     </TableBody>
    //   </Table>
    // </div>

    <div className="max-w-full overflow-x-auto">
      <table className="min-w-[150px] w-full table-auto border border-collapse border-gray-200 rounded-lg overflow-x-scroll">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Photo</th>
            <th className="px-4 py-2 text-left">Job Title</th>
            <th className="px-4 py-2 text-left">Applied Date</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="px-4 py-2">
                <img
                  src={application.photo}
                  alt="Applicant"
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="px-4 py-2">{application.title}</td>
              <td className="px-4 py-2">{application.appliedDate}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded ${
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
  )
}

export default JobAppliedTable
