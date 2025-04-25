
import React from "react";
import BenefitCard from "./BenefitCard";

const Benefits = ({profile}) => {
  return (
    <div className="min-h-fit relative w-full md:p-6 p-4 dash-boxes ">
      <h2 className="text-xl font-semibold">Benefits</h2>
      <div className="flex flex-wrap lg:justify-start justify-center gap-3 mt-3">
        <BenefitCard/>
        <BenefitCard/>
        <BenefitCard/>
        <BenefitCard/>
      </div>
    </div>
  );
};

export default Benefits;
