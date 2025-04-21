import React, { useState } from "react";
import NestedList from "./NestedList";
import { jobCategories, jobTypes, jobLevels, salaryRanges } from "./data";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Badge } from "flowbite-react";
const Jobs = () => {
  return (
    <section
      id="jobs"
      className="pt-28 flex justify-center gap-10 w-full h-auto"
    >
      <div className="left w-[250px] flex flex-col gap-4 ">
        <NestedList listName={"Type of Employment"} nestedItems={jobTypes} />
        <NestedList listName={"Categories"} nestedItems={jobCategories} />
        <NestedList listName={"Job Level"} nestedItems={jobLevels} />
        <NestedList listName={"Salary Range"} nestedItems={salaryRanges} />
      </div>
      <div className="right w-[910px]">
        <div>
          <h3 className="font-semibold text-2xl">All Jobs</h3>
          <span>Showing 73 results</span>
        </div>
        <div className="w-full   grid flex-wrap grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 pt-10">
        <div className="w-full border  border-gray-400 min-h-[150px] flex lg:flex-row flex-col items-center justify-between p-5 lg:p-8">
            <div className="flex items-center lg:flex-row flex-col gap-2">
              <div className="icon flex justify-center">
                <FaReact className="text-blue-700  text-6xl" />
              </div>
              <div className="info ml-4">
                <div className="font-medium lg:text-left text-center">Job Post</div>
                <div className="flex items-center py-2 flex-wrap lg:justify-start justify-center">
                  <span className="text-[13px]">Company</span>
                  <span className="ml-2 h-1 w-1 rounded-full bg-gray-800"></span>
                  <span className="text-[13px] ml-3">Location</span>
                </div>
                <div className="flex  gap-2 mt-1 flex-wrap lg:justify-start justify-center">
                  <Badge color="success" className="rounded-2xl text-[10px]" size="sm">
                  Full-Time
                  </Badge>
                 <Badge color="warning" size="sm" className="rounded-2xl text-[10px]">Technology</Badge>
                  
                  <Badge color="indigo" size="sm" className="rounded-2xl text-[10px]">Design</Badge>
                </div>
              </div>
            </div>
            <div className="lg:mt-0 mt-8 lg:w-fit w-full flex items-center justify-center ">
              <Link className=" text-white px-3 py-2 bgLinearDark lg:w-fit w-[150px] text-center ">Apply</Link>
            </div>
          </div>
          <div className="w-full border  border-gray-400 min-h-[150px] flex lg:flex-row flex-col items-center justify-between p-5 lg:p-8">
            <div className="flex items-center lg:flex-row flex-col gap-2">
              <div className="icon flex justify-center">
                <FaReact className="text-blue-700  text-6xl" />
              </div>
              <div className="info ml-4">
                <div className="font-medium lg:text-left text-center">Job Post</div>
                <div className="flex items-center py-2 flex-wrap lg:justify-start justify-center">
                  <span className="text-[13px]">Company</span>
                  <span className="ml-2 h-1 w-1 rounded-full bg-gray-800"></span>
                  <span className="text-[13px] ml-3">Location</span>
                </div>
                <div className="flex  gap-2 mt-1 flex-wrap lg:justify-start justify-center">
                  <Badge color="success" className="rounded-2xl text-[10px]" size="sm">
                  Full-Time
                  </Badge>
                 <Badge color="warning" size="sm" className="rounded-2xl text-[10px]">Technology</Badge>
                  
                  <Badge color="indigo" size="sm" className="rounded-2xl text-[10px]">Design</Badge>
                </div>
              </div>
            </div>
            <div className="lg:mt-0 mt-8 lg:w-fit w-full flex items-center justify-center ">
              <Link className=" text-white px-3 py-2 bgLinearDark lg:w-fit w-[150px] text-center ">Apply</Link>
            </div>
          </div>
          {/* <div className="w-full border border-gray-400 min-h-[150px] flex items-center justify-between p-8">
            <div className="flex items-center">
              <div className="icon">
                <FaReact className="text-blue-700 text-4xl" />
              </div>
              <div className="info ml-4">
                <div className="font-medium">Job Post</div>
                <div>
                  <span className="text-[13px]">Company</span>
                  <span className="ml-2 h-1 w-1 rounded-full bg-gray-800"></span>
                  <span className="text-[13px] ml-3">Location</span>
                </div>
                <div className="flex  gap-2 mt-1">
                  <Badge color="success" className="rounded-2xl text-[10px]" size="sm">
                  Full-Time
                  </Badge>
                 <Badge color="warning" size="sm" className="rounded-2xl text-[10px]">Technology</Badge>
                  
                  <Badge color="indigo" size="sm" className="rounded-2xl text-[10px]">Design</Badge>
                </div>
              </div>
            </div>
            <div>
              <Link className=" text-white px-3 py-2 bgLinearDark">Apply</Link>
            </div>
          </div> */}
          
        </div>
      </div>
    </section>
  );
};

export default Jobs;
