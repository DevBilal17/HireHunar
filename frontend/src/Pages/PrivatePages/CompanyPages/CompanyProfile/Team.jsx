import React from "react";
import TeamCard from "./TeamCard";

const Team = ({profile}) => {
  let {team} = profile
  return (
    <div className="min-h-fit relative w-full dash-boxes md:p-6 p-4 ">
      <h2 className="text-xl font-semibold">Team</h2>
      <div className="flex md:justify-start justify-center gap-3  ">
        {
          team?team.map((item,index)=>{
              return <TeamCard key={index} item={item}/>
          }):'No data'
        }
            
            {/* <TeamCard/>
            <TeamCard/> */}
        
      </div>
    </div>
  );
};

export default React.memo(Team);
