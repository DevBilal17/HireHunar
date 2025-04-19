import React from "react";

import { CiSearch } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import userImg from "../../assets/Images/HeroSection/user.png";
import { BsFillLightningChargeFill } from "react-icons/bs";
import whiteWaves from "../../assets/Images/whiteWaves.png"
import "./HeroSection.css";
const HeroSection = () => {
  return (
    <div className="heroSection flex items-center justify-center p-5 relative max-w-[1500px] mx-auto overflow-hidden">
      {/* <img src={whiteWaves} alt="" className="absolute bottom-0 left-0 w-full   rotate-22" /> */}
      <div className="middle max-w-[600px] flex flex-col items-center">
        <h1 className="text-center md:text-6xl sm:text-[54px] text-5xl text leading-16">
          Modernizing The Job Search Experinece
        </h1>
        <p className="pt-3 text-center max-w-[500px] font-normal">
          Search and find your dream job now eaiser than ever, you can simply
          browse and findd a job if you need it
        </p>
        <form className="md:w-full w-[90%] flex items-center max-w-[520px]  pt-4 gap-2">
          <div className="search bg-white rounded-4xl w-full relative overflow-hidden">
            <input
              type="text"
              placeholder="Search for a job..."
              className="w-full px-5 text-[14px] border-none outline-0 py-3"
            />
            <CiSearch className="absolute right-2 top-[25%] text-[22px] text-[#666666]" />
          </div>
          <button className="px-8 py-3  bg-black text-white cursor-pointer rounded-4xl">
            Search
          </button>
        </form>
      </div>
      <div className="floating1 c-success flex items-center bg-white p-5 rounded-2xl">
        <div className="icon h-[40px] w-[40px] rounded-full flex overflow-hidden items-center justify-center">
          <img src={userImg} alt="" className="w-[32px]" />
        </div>
        <div className="flex flex-col justify-center ml-2">
          <div className="text-gray-600 text-[12px]">Customer Success</div>
          <div className="font-semibold relative flex items-center">
            7.89%{" "}
            <span className="badge text-white text-[9px] px-1.5 py-0.5 rounded-2xl ml-2 flex items-center">
              50% <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
      <div className="floating2 j absolute  left-[8%] bg-white max-w-[280px] h-[140px] w-full p-5 rounded-2xl">
        <div className="flex items-center gap-2 w-full">
          <div className="icon h-[40px] w-[40px] rounded-full flex items-center justify-center">
            <FaReact className="i text-2xl text-white" />
          </div>
          <div className="pl-1  w-[80%]">
            <div className="j-post font-semibold flex items-center relative w-full">
              React Developer
              <span className="save-logo absolute right-0">
                <FaBookmark className="text-pink-500" />
              </span>
            </div>
            <div className="company font-normal text-gray-500 text-[13px]">
              Logico
            </div>
          </div>
        </div>
        <div className="mt-2">
          <span className="border-[1px] border-gray-300 px-2 py-1 text-[10px] rounded-3xl text-gray-500">
            Full Time
          </span>
          <span className="border-[1px] border-gray-300 px-2 py-1 text-[10px] rounded-3xl text-gray-500 ml-2">
            Remote
          </span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="location flex items-center gap-1.5">
            <FiMapPin className="text-gray-500 text-[15px]" />
            <span className="text-gray-500 text-[12px]">
              Pakistan, Faisalabad
            </span>
          </span>
          <sapn className="salary text-[12px] text-gray-500">
            <span className="text-gray-900 text-[14px]">RS:80K</span>
            /month
          </sapn>
        </div>
      </div>
      <div className="floating3 max-w-[300px] w-full top-j-categories bg-white p-5 rounded-2xl">
        <h3 className="font-semibold">The Top Categories</h3>
        <div className="h-[130px] flex  items-end justify-between">
          <div>
            <div className="flex justify-center items-end text-[11px]  upper h-[80px] rounded-t-xl bg-[#fdded8] w-[40px]">
              70%
            </div>
            <div className="bottom text-[10px] text-center pt-2 text-gray-600">AI</div>
          </div>
          <div>
            <div className="flex justify-center items-end text-[11px]  upper h-[60px] rounded-t-xl  bg-[#ffdbea] w-[40px]">
              60%
            </div>
            <div className="bottom text-[10px] text-center pt-2 text-gray-600">UI/UX</div>
          </div>
          <div>
            <div className="flex justify-center items-end text-[11px]  upper h-[100px] rounded-t-xl g  w-[40px]">
              90%
            </div>
            <div className="bottom text-[10px] text-center pt-2 text-gray-600">React</div>
          </div>
          <div>
            <div className="flex justify-center items-end text-[11px]  upper h-[90px] rounded-t-xl bg-[#fbdfff]  w-[40px]">
              80%
            </div>
            <div className="bottom text-[10px] text-center pt-2 text-gray-600">SQL</div>
          </div>
          <div>
            <div className="flex justify-center items-end text-[11px]  upper h-[80px] rounded-t-xl bg-[#F3A6E2] w-[40px]">
              70%
            </div>
            <div className="bottom text-[10px] text-center pt-2 text-gray-600">Node</div>
          </div>
        </div>
      </div>
      <div className="floating4 efficient flex bg-white p-5 items-center rounded-2xl absolute  ">
        <div className="icon h-[40px] w-[40px] rounded-full flex items-center justify-center">
          <BsFillLightningChargeFill className="text-white text-[21px]" />
        </div>
        <div className="flex flex-col ml-3 text-[24px]">
          80%
          <span className="text-gray-500 text-[12px]">More Efficient</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
