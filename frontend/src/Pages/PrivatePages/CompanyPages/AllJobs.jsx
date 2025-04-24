import React from "react";
import DashNav from "../../../PrivateComponents/DashNav/DashNav";
import Side from "../../../PrivateComponents/Side/Side";
import AllJobsPage from "./AllJobsPage";
import JobsInfo from "./JobPage/JobsInfo";

const AllJobs = () => {
  return (
    <div className="flex">
      <Side />
      <div className="w-full flex flex-col flex-1 ml-[80px] lg:ml-[250px]">
        <DashNav title={"All Jobs"} />
        <div className="min-h-[calc(100vh-70px)] max-w-full w-full mx-auto bg-gray-100 px-6 py-7">
          <JobsInfo/>
          {/* <AllJobsPage/> */}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
