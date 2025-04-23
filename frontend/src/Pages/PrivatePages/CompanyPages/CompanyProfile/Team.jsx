import React from "react";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="min-h-fit relative w-full p-5 border border-gray-300  ">
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
