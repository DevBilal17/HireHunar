import React from "react";
import InfoSection from "./InfoSection";
import CompanyAbout from "./CompanyAbout";
import Team from "./Team";
import Contact from "./Contact";
import Benefits from "./Benefits";
import TechStack from "./TechStack";
import CompanyLocations from "./CompanyLocations";

const ComppanyProfileContainer = () => {
  return (
    <div className=" w-full h-full ">
      <InfoSection />
      <div className="flex gap-10 lg:flex-row flex-col w-full h-fit mt-8">
        <div className="left flex flex-col h-full gap-6 lg:w-[70%] w-full ">
          <CompanyAbout />
          <Contact />
          <Team />
          <Benefits />
        </div>
        <div className="right  lg:w-[30%] w-full  h-full flex flex-col gap-10">
          <TechStack />
          <CompanyLocations />
        </div>
      </div>
    </div>
  );
};

export default ComppanyProfileContainer;
