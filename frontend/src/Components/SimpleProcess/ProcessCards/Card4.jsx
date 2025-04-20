import React from "react";
import { RiUserFollowLine } from "react-icons/ri";
import CardContent from "./CardContent";
import userImg from "../../../assets/Images/HeroSection/user.png";
const Card4 = () => {
  return (
    <div className="flex items-center h-[500px] gap-4 relative">
      <div className="w-[50%]  bg-[#F8FAFB] rounded-2xl h-[95%]  p-4 flex items-center justify-center">
        <div className="relative max-w-[400px]  flex items-center justify-center w-full h-[400px] rounded-full border-[1px] border-gray-300">
          <div className="max-w-[260px]  flex items-center justify-center w-full h-[260px] rounded-full border-[1px] border-gray-300">
            <div className="max-w-[100px]   w-full h-[100px] rounded-full border-[1px] p-3 border-gray-300 flex items-center justify-center">
              <div className="users absolute bg-gray-300 h-[110px] grayscale-75  w-[110px] flex overflow-hidden items-center justify-center rounded-full -left-10 border-[1px] border-white">
                <img src={userImg} alt="" className="w-[80px]" />
              </div>
              <div className="users absolute bg-gray-300 h-[130px] grayscale-75  w-[130px] flex overflow-hidden items-center justify-center rounded-full z-10 left-8  border-[1px] border-white">
                <img src={userImg} alt="" className="w-[80px]" />
              </div>
              <div className="users linear absolute bg-gray-300 h-[150px]  w-[150px] flex overflow-hidden items-center justify-center rounded-full  border-[1px] border-white z-20">
                <img src={userImg} alt="" className="w-[80px]" />
              </div>
              <div className="users absolute bg-gray-300 h-[130px] grayscale-75  w-[130px] flex overflow-hidden items-center justify-center rounded-full z-10 right-8">
                <img src={userImg} alt="" className="w-[80px]" />
              </div>
              <div className="users absolute bg-gray-300 h-[110px] grayscale-75  w-[110px] flex overflow-hidden items-center justify-center rounded-full -right-10">
                <img src={userImg} alt="" className="w-[80px]" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <CardContent
        icon={<RiUserFollowLine className="text-[44px] text-pink-500" />}
        c={"before"}
        head={"Selected Candidate"}
        para={
          "Selected candidate can entry the company for interview with recruiter"
        }
      />
    </div>
  );
};

export default Card4;
