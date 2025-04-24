import React from "react";

const Company = ({ toggleModal, userType }) => {
  return (
    <div className="flex md:flex-row flex-col gap-4 md:items-center items-start justify-between min-h-fit relative w-full md:p-6 p-4   dash-boxes">
      <div className="flex items-center gap-4">
        <div className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center text-lg font-bold rounded">
          S
        </div>
        <div>
          <h2 className="font-bold text-xl max-[470px]:text-[15px]">
            Social Media Assistant
          </h2>
          <p className="text-gray-600 text-sm max-[470px]:text-[11px]">
            Stripe • Paris, France • Full-Time
          </p>
        </div>
      </div>
      {userType == "jobseeker" && (
        <button
          className="mt-4 md:mt-0 bg-violet-600 text-white px-4 py-2 rounded shadow hover:bg-violet-700"
          onClick={toggleModal}
        >
          Apply
        </button>
      )}
    </div>
  );
};

export default React.memo(Company);
