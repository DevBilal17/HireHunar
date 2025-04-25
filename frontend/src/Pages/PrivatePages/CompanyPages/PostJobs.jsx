import React from "react";
import Side from "../../../PrivateComponents/Side/Side";
import DashNav from "../../../PrivateComponents/DashNav/DashNav";
import AddJobForm from "../AddJobPageComponents/AddJobForm";

const PostJobs = () => {
  return (
    <div className="flex w-full">
      <Side />
      <div className="w-full  flex flex-col flex-1 md:ml-[80px] lg:ml-[250px] ">
        <DashNav title={"Post Job"} />
        <div className="h-full  w-full mx-auto  bg-gray-100  py-5">
          <AddJobForm />
        </div>
      </div>
    </div>
  );
};

export default PostJobs;
