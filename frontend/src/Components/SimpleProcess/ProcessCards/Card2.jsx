import React from "react";
import CardContent from "./CardContent";
import { GoFileSymlinkFile } from "react-icons/go";
import { FaDownload } from "react-icons/fa6";
import { BiSolidFilePdf } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import userImg from "../../../assets/Images/HeroSection/user.png";
const Card2 = () => {
  return (
    <div className="flex w-full items-center md:h-[500px] h-[300px] gap-4 relative">
      <div className="w-[50%]  bg-blue-100 h-[95%]  rounded-2xl p-4 md:flex hidden items-center justify-center">
        <div className="relative max-w-[400px]  flex items-center justify-center w-full h-[400px] rounded-full border-[1px] border-gray-300">
          <div className="max-w-[260px]  flex items-center justify-center w-full h-[260px] rounded-full border-[1px] border-gray-300">
            <div className="max-w-[100px]   w-full h-[100px] rounded-full border-[1px] p-3 border-gray-300 flex items-center justify-center">
              <div className="text-white custom-gradient w-full h-full rounded-full flex items-center justify-center">
                <FaDownload className="text-2xl" />
                <BiSolidFilePdf
                  color="#7ebcd0"
                  className="absolute top-13  text-[50px]"
                />
                <BiSolidFilePdf
                  color="#388BF5"
                  className="absolute text-[50px] left-17 top-25"
                />
                <BiSolidFilePdf
                  color="#23CDEE"
                  className="text-[50px] absolute right-17 top-25"
                />
                <div className="card flex items-center p-2 absolute bottom-14 shadow-2xl max-w-[220px] justify-between w-full bg-white h-[60px] border-[1px] rounded-2xl border-gray-200">
                  <div className="custom-gradient u h-[40px] w-[40px] rounded-full flex overflow-hidden items-center justify-center">
                    <img src={userImg} alt="" className="w-[32px]" />
                  </div>
                  <span className="text-gray-900  text-[12px]">
                    Portfolio is complete
                  </span>
                  <div className="tickIcon bg-green-500 rounded-full p-[1px]">
                    <TiTick color="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardContent
        icon={<GoFileSymlinkFile className="text-[44px] text-[#3a85f5]" />}
        c={"before"}
        head={"Directly Portfolio Upload"}
        para={"You can upload your resume or CV, and recruiters will reviewed"}
      />
    </div>
  );
};

export default Card2;
