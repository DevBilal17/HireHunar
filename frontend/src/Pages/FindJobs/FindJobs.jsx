import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import Jobs from "./Jobs";
import JobDiscover from "../../Components/JobDiscover/JobDiscover";
import CategorySection from "../../Components/CategorySection/CategorySection";

const FindJobs = () => {
   
  return (
    <div>
      <div className="flex justify-center flex-col w-full bg-pink-200  px-4 sm:px-10 py-28 rounded-[20px] bgLinear">
        <h2 className="text-center text-5xl font-semibold">Find Your <span className="textLinear font-bold stroke-2 stroke-black">Dream Job</span></h2>
        <p className="text-center mt-3 text-gray-700">Find your next career at top companies.</p>
        <form className="max-w-[800px] w-full mx-auto mt-8 flex justify-center shadow-2xl rounded-3xl">
          <div className="flex bg-white rounded-4xl w-full relative overflow-hidden border-[1px] border-solid border-gray-400">
            <div className="w-full flex items-center sm:px-2.5 px-0.5">
              <CiSearch className="text-[22px] text-[#666666] ml-1.5" />
              <input
                type="text"
                placeholder="Job title, keyword or company"
                className="w-full px-5 text-[14px] border-none outline-0 py-3"
              />
            </div>
            <div className="w-[2px] h-[47px] bg-gray-300"></div>
            <div className="w-full flex items-center md:px-2.5 px-0.5">
              <FiMapPin className="text-[22px] text-[#666666] ml-1.5" />
              <input
                type="text"
                placeholder="City, state, zip or remote"
                className="w-full px-5 text-[14px] border-none outline-0 py-3"
              />
            </div>
            <button className="sm:px-8 px-6 py-3  bg-black text-white cursor-pointer rounded-4xl">
              Search
            </button>
          </div>
        </form>
      </div>
      {/* <Jobs/> */}
      <CategorySection/>
    </div>
  );
};

export default FindJobs;
