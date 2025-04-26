import React from "react";

const JobStatus = ({ date }) => {
  const checkStatus = () => {
    const currentDate = new Date();
    const deadline = new Date(date);
    return currentDate <= deadline ? "Open" : "Close";
  };

  const status = checkStatus(); // Determine status dynamically

  return (
    <span
      className={`px-2 py-1 rounded text-[14px] ${
        status === "Open"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {status}
    </span>
  );
};

export default JobStatus;
