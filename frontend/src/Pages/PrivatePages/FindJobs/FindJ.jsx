import React from "react";
import Side from "../../../PrivateComponents/Side/Side";
import DashNav from "../../../PrivateComponents/DashNav/DashNav";
import FindJobs from "../../FindJobs/FindJobs";

const FindJ = () => {
  return (
    <div className="flex max-w-full mx-auto">
      <Side />
      <div className="w-full flex flex-col flex-1 ml-[80px] lg:ml-[250px]">
        <DashNav title={"Find Jobs"} />
        <div className=" h-full max-w-full w-full mx-auto   px-6 py-7">
          <FindJobs />
        </div>
      </div>
    </div>
  );
};

export default FindJ;
