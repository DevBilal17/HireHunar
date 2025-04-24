import React from "react";
import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
const AdditionalInformation = ({profile}) => {
  let {email,phoneNo} = profile
  return (
    <div className="min-h-fit relative w-full md:p-6 p-4  dash-boxes border border-gray-300 ">
      <h2 className="text-xl font-semibold">Additional Information</h2>
      <ul className="pl-5 mt-5">
        <li className="flex items-start gap-2.5">
          <div className="mt-1">
            {" "}
            <CiMail className="text-[22px] text-gray-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] font-medium text-gray-400">Email</span>
            <span className="text-gray-800 text-[14px]">{email}</span>
          </div>
        </li>
        <li className="flex items-start gap-2.5 mt-2">
        <div className="mt-2">
            {" "}
            <IoIosPhonePortrait className="text-[22px] text-gray-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-[16px] font-medium text-gray-400">Phone</span>
            <span className="text-gray-800 text-[14px]">{phoneNo}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(AdditionalInformation);
