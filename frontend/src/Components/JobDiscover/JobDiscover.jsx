import React from "react";
import "./JobDiscover.css";
import { CiSearch } from "react-icons/ci";
import { FiMapPin } from "react-icons/fi";
import CategorySection from "../CategorySection/CategorySection";
const JobDiscover = () => {
  return (
    <div className="job-discover flex flex-col items-center py-16 px-2.5" id="jobDiscover">
      <p className="p1 font-semibold">Realize your Career Dreams</p>
      <h1 className="text-center md:text-6xl font-semibold sm:text-[54px] text-5xl text leading-16 pt-4 max-w-[600px]">
        Search and Discover Your Jobs Here
      </h1>
      <form className="max-w-[800px] w-full mt-8">
        <div className="flex bg-white rounded-4xl w-full relative overflow-hidden border-[1px] border-solid border-gray-400">
          <div className="w-full flex items-center px-2.5">
            <CiSearch className="text-[22px] text-[#666666] ml-1.5" />
            <input
              type="text"
              placeholder="Job title"
              className="w-full md:px-5 px-1.5 text-[14px] border-none outline-0 py-3 focus:outline-none bg-white"
            />
          </div>
          <div className="w-[2px] h-[47px] bg-gray-300"></div>
          <div className="w-full flex items-center md:px-2.5 px-0.5">
            <FiMapPin className="text-[22px] text-[#666666] ml-1.5" />
            <input
              type="text"
              placeholder="City"
              className="w-full md:px-5 px-1.5 text-[14px] border-none outline-0 py-3 focus:outline-none focus:bg-transparent"
              list="browsers"
              id="city"
            />
            <datalist id="browsers" className="bg-white">
              <option value="Lahore" />
              <option value="Faisalabad" />
              <option value="Islamabad" />
              <option value="Karachi" />
              <option value="Multan" />
              <option value="Peshawar" />
            </datalist>
          </div>
          <button className="px-8 py-3  bg-black text-white cursor-pointer rounded-4xl">
            Search
          </button>
        </div>
      </form>
      <CategorySection />
    </div>
  );
};

export default JobDiscover;
