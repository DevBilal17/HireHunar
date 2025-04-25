import React, { useContext } from "react";
import JobsApplied from "../../UserDashboardComponents/JobsApplied";
import Interviewed from "../../UserDashboardComponents/Interviewed";
import JobAppliedStatus from "../../UserDashboardComponents/JobAppliedStatus";
import JobsPosted from "./JobsPosted";
import OpenJobs from "./OpenJobs";
import AddJob from "./AddJob";
import AllJobsTable from "../CompanyDashboard/AllJobsTable";
import { JobApiData } from "../../../../Contexts/JobApiContext";

const JobsInfo = () => {
   let {userAllData} = useContext(JobApiData)
  return (
    <div>
      <div>
        <div className="flex md:flex-row flex-col gap-4">
          
            <JobsPosted data={userAllData} />
            <OpenJobs data={userAllData} />
            <AddJob />
       
        </div>
        <div className="bg-white p-6 rounded-2xl relative  shadow-md sm:rounded-lg mt-6">
          <h3 className="text-lg font-semibold mb-4">All Jobs</h3>
          <AllJobsTable/>
        </div>
      </div>
    </div>
  );
};

export default JobsInfo;
