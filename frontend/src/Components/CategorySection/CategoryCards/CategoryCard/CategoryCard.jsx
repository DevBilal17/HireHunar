import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import { CiTimer } from "react-icons/ci";
import { LuBuilding2 } from "react-icons/lu";
import { TbPigMoney } from "react-icons/tb";
const CategoryCard = ({
  companyicon,
  company,
  job,
  location,
  tag,
  jobtime,
  salary,
  posttime,
}) => {
  return (
    <div className=" max-w-[440px] w-full border-[1px] border-gray-200 rounded-2xl flex flex-col items-center py-3 bg-[#F8FAFB] hover:bg-[#d9edff] cursor-pointer mt-4 card">
      <div className="max-w-[420px] w-full border-[1px] card-inside border-gray-200 transition-all duration-200 p-2 rounded-2xl bg-white">
        <div className="flex items-center justify-between ">
          <div className=" ]">
            {companyicon}
            <span className="font-normal text-[15px">{company}</span>
          </div>
          <div>
            <CiBookmark />
          </div>
        </div>
        <div className="w-full bg-gray-300 h-[1px] my-3" ></div>
        <h3 className="font-semibold text-xl">{job}</h3>
        <div className="flex items-center justify-between mt-3 mb-2">
          <div className="flex items-center gap-2 text-[14px]">
            <FiMapPin />
            {location}
          </div>
          <div className="flex items-center gap-2 text-[14px]">
            <CiTimer />
            {jobtime}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[14px]">
            <LuBuilding2 />
            {tag}
          </div>
          <div className="flex items-center gap-2 text-[14px]">
            <TbPigMoney />
            {salary}
          </div>
        </div>
        <button className="cursor-pointer bg-black text-white w-full py-3 rounded-3xl mt-4">Apply</button>
      </div>
      <div className=" mt-2 text-gray-600">
      {posttime}
      </div>
    </div>
  );
};

export default CategoryCard;
