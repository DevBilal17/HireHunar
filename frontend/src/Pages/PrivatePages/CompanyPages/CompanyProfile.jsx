import React from "react";
import Side from "../../../PrivateComponents/Side/Side";
import DashNav from "../../../PrivateComponents/DashNav/DashNav";
import ComppanyProfileContainer from "./CompanyProfile/ComppanyProfileContainer";

const CompanyProfile = () => {
  return (
    <div className="flex">
      <Side />
      <div className="w-full flex flex-col flex-1 ml-[80px] lg:ml-[250px]">
        <DashNav title={"Company Profile"} />
        <div className=" h-full max-w-full w-full mx-auto  bg-gray-100  px-6 py-7">
          <ComppanyProfileContainer />
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
