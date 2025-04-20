import React from "react";
import Side from "../../../PrivateComponents/Side/Side";
import DashNav from "../../../PrivateComponents/DashNav/DashNav";

const FindJ = () => {
  return (
    <div className="flex">
      <Side />
      <div className='w-full flex flex-col'>
        <DashNav title={'Find Jobs'} />
     </div>
    </div>
  );
};

export default FindJ;
