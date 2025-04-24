import React from "react";

const JobAppliedStatus = () => {
  return (
    <div className="bg-white md:p-6 p-4 rounded-2xl shadow-md h-full w-full flex flex-col justify-center">
      <p className="text-gray-600 font-bold">Jobs Applied Status</p>
      <div className="mt-2 flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          60%
        </div>
        <div className="flex flex-col text-sm">
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-sm bg-blue-600 mr-2"></div>
            <div>60% unsuitable</div>
          </div>
          <div className="flex items-center">
            <div className="h-3 w-3 rounded-sm bg-gray-400 mr-2"></div>
            <div>40% Interviewed</div>
          </div>
        </div>
      </div>
      <a href="#" className="text-sm text-indigo-600 mt-4 inline-block">
        View All Applications
      </a>
    </div>
  );
};

export default JobAppliedStatus;
