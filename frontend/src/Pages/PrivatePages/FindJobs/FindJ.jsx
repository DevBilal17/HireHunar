import React from "react";
import Side from "../../../PrivateComponents/Side/Side";
import DashNav from "../../../PrivateComponents/DashNav/DashNav";
import FindJobs from "../../FindJobs/FindJobs";

const FindJ = () => {
  return (
    <div className="flex max-w-[1550px] mx-auto">
      <Side />
      <div className="w-full flex flex-col">
        <DashNav title={"Find Jobs"} />
        <div className=" h-full max-w-[1500px] w-full mx-auto   px-6 py-7">
          <FindJobs />
        </div>
      </div>
    </div>
  );
};

export default FindJ;
