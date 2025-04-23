import { Card } from "flowbite-react";
import React from "react";

const BenefitCard = () => {
  return (
    <Card className="max-w-sm border-none shadow-none">
      <div className="flex flex-col items-start pb-10">
        <h4 className="mb-1 text-xl font-medium ">Unlimited Lollipop</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Corrupti!
        </p>
      </div>
    </Card>
  );
};

export default BenefitCard;
