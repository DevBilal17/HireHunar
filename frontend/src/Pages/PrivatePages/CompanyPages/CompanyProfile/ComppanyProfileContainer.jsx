import React, { useContext } from "react";
import InfoSection from "./InfoSection";
import CompanyAbout from "./CompanyAbout";
import Team from "./Team";
import Contact from "./Contact";
import Benefits from "./Benefits";
import TechStack from "./TechStack";
import CompanyLocations from "./CompanyLocations";
import { ApiUserData } from "../../../../Contexts/ApiContext";

const ComppanyProfileContainer = () => {
  let {profile} = useContext(ApiUserData)
  return (
    <div className=" w-full h-full ">
      <InfoSection profile={profile} />
      <div className="flex gap-10 lg:flex-row flex-col w-full h-fit mt-8">
        <div className="left flex flex-col h-full gap-6 lg:w-[70%] w-full ">
          <CompanyAbout profile={profile} />
          <Contact profile={profile} />
          <Team profile={profile}/>
          {/* <Benefits profile={profile}/> */}
        </div>
        <div className="right  lg:w-[30%] w-full  h-full flex flex-col gap-10">
          <TechStack profile={profile}/>
          <CompanyLocations profile={profile}/>
        </div>
      </div>
    </div>
  );
};

export default ComppanyProfileContainer;
