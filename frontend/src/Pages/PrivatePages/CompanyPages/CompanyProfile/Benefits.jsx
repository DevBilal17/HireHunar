
import React from "react";
import BenefitCard from "./BenefitCard";

const Benefits = () => {
  return (
    <div className="min-h-fit relative w-full p-5 border border-gray-300 ">
      <h2 className="text-xl font-semibold">Benefits</h2>
      <div className="flex flex-wrap">
        <BenefitCard/>
        <BenefitCard/>
        <BenefitCard/>
        <BenefitCard/>
      </div>
    </div>
  );
};

export default Benefits;
