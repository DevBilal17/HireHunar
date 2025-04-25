import React from "react";
import { LuMapPin } from "react-icons/lu";
const CompanyLocations = ({ profile }) => {
  let { location } = profile;
  return (
    <div className="min-h-fit relative w-full md:p-6 p-4 dash-boxes">
      <h2 className="text-xl font-semibold">Office Location</h2>
      <ul className="ml-5 mt-3">
        {location ? <li className="text-[15px] text-gray-700 flex gap-2"
        
        
        > 
        <LuMapPin className="text-[22px]" />  
          {location.address}-{location.city}-{location.country}</li> : "No data"}

      </ul>
    </div>
  );
};

export default React.memo(CompanyLocations);
