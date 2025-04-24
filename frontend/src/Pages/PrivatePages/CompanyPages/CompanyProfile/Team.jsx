import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="min-h-fit relative w-full dash-boxes md:p-6 p-4 ">
      <h2 className="text-xl font-semibold">Team</h2>
      <div className="flex justify-evenly flex-wrap  ">
        
            <TeamCard/>
            <TeamCard/>
            <TeamCard/>
        
      </div>
    </div>
  );
};

export default Team;
