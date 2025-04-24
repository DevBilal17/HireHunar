import React from "react";
import JobsApplied from "../../UserDashboardComponents/JobsApplied";
import Interviewed from "../../UserDashboardComponents/Interviewed";
import JobAppliedStatus from "../../UserDashboardComponents/JobAppliedStatus";
import JobsPosted from "./JobsPosted";
import OpenJobs from "./OpenJobs";
import AddJob from "./AddJob";

const JobsInfo = () => {
  return (
    <div>
      <div>
        <div className="flex md:flex-row flex-col gap-4">
          
            <JobsPosted />
            <OpenJobs />
            <AddJob />
       
        </div>
      </div>
    </div>
  );
};

export default JobsInfo;
