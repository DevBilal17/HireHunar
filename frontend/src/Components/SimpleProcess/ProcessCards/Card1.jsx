import React from "react";
import CardContent from "./CardContent";
import { ImFilesEmpty } from "react-icons/im";
import { FaFileAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { PiFolderSimpleUserBold } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa6";
import { PiFilesFill } from "react-icons/pi";

const Card1 = () => {
  return (
    <div className="flex items-center w-full h-[350px] md:h-[500px] relative gap-4">
      <div className="w-[50%] bg-[#F8FAFB] h-[95%] rounded-2xl md:flex hidden items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-5 max-w-[400px] w-full">
          <h3 className="text-xl font-semibold">Profile</h3>
          <ul className="flex flex-col gap-7 mt-4.5">
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="icon">
                  <FaFileAlt color="#3A85F5" className="text-[19px]" />
                </div>
                <span className="font-semibold text-[14px]">
                  Curriculum Vitae
                </span>
              </div>
              <div className="tickIcon bg-green-500 rounded-full p-[1px]">
                <TiTick color="white" />
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="icon">
                  <PiFolderSimpleUserBold
                    color="#dcd34c"
                    className="text-[20px]"
                  />
                </div>
                <span className="font-semibold text-[14px]">Personal Data</span>
              </div>
              <div className="tickIcon bg-green-500 rounded-full p-[1px]">
                <TiTick color="white" />
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="icon">
                  <FaUserGraduate color="#FCA6B0" className="text-[19px]" />
                </div>
                <span className="font-semibold text-[14px]">
                  Academic Information
                </span>
              </div>
              <div className="tickIcon bg-green-500 rounded-full p-[1px]">
                <TiTick color="white" />
              </div>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="icon">
                  <PiFilesFill className="text-[19px] text-yellow-300" />
                </div>
                <span className="font-semibold text-[14px]">Document</span>
              </div>
              <div className="tickIcon bg-green-500 rounded-full p-[1px]">
                <TiTick color="white" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <CardContent
        icon={<ImFilesEmpty className="text-[44px] text-[#3a85f5]" />}
        head={"Complete Your Profile"}
        para={
          "Complete your profile so that recruiters can see information about you"
        }
      />
    </div>
  );
};

export default Card1;
