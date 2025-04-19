import React from "react";
import Card1 from "./ProcessCards/Card1";
import './SimpleProcess.css'
import Card2 from "./ProcessCards/Card2";
import Card3 from "./ProcessCards/Card3";
import Card4 from "./ProcessCards/Card4";
const SimpleProcess = () => {
  return (
    <div className="topCompanies flex flex-col items-center py-16 px-2.5">
      <p className="p1 font-semibold">Simple Process</p>
      <h1 className="text-center md:text-6xl font-semibold sm:text-[54px] text-5xl text leading-16 pt-4 max-w-[600px]">
        Effortless Process, Optimal Results
      </h1>
      <div className="flex flex-col max-w-[1100px] w-full pt-20 ">
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
      </div>
    </div>
  );
};

export default SimpleProcess;
