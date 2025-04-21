import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { Tooltip } from "flowbite-react";
const Side = () => {
  return (
    <>
    <section className=" transition-all duration-500 max-w-[80px] lg:max-w-[250px] w-full  h-[100vh] lg:p-5 py-5 px-3 s sticky z-20 bg-white left-0 top-0 ">
      <Link to={"/"}>
        <h3 className="brand font-semibold text-[25px] hidden lg:block">
          <img src="" alt="" className="logo" />
          HireHunar
        </h3>
      </Link>
      <div className="lg:flex hidden flex-col h-[94%]">
        <ul className="mt-10 flex flex-col justify-center gap-2">
          <li className="bg-amber-600 rounded-xl  ">
            
            <Link
              to={"/dashboard"}
              className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
            >
              <MdOutlineDashboard className="text-[20px]" />
              <span className="">Dashboard</span>
            </Link>
          </li>
          <li className="bg-amber-600  rounded-xl  ">
            <Link
              to={"/messages"}
              className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
            >
              <MdOutlineMessage className="text-[18px]" />
              
              <span className="">Messages</span>
            </Link>
          </li>
          <li className="bg-amber-600  rounded-xl  ">
            <Link
              to={"/f-job"}
              className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
            >
              <CiSearch className="text-[20px]" />
              
              <span className="">Find Jobs</span>
            </Link>
          </li>
          <li className="bg-amber-600  rounded-xl   ">
            <Link
              to={"/my-profile"}
              className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
            >
              <FaRegUser className="text-[18px]" />
              <span className="">My Public Profile</span>
              
            </Link>
          </li>
        </ul>
        <ul className="mt-auto flex gap-2 flex-col">
          <li className="bg-amber-600 rounded-xl  ">
            <Link className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]">
              <IoIosLogOut className="text-[18px]" />
              <span className="">Log Out</span>
              
            </Link>
          </li>
          <li className="bg-amber-600  rounded-xl ">
            <Link className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]">
              <IoIosLogOut className="text-[18px]" />
              <div className="">
                <h4 className="font-medium text-[15px]">UserName</h4>
                <p className="text-gray-600 text-[12px]">Email</p>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      {/* For Smaller than large screen with tooltip component */}
      <div className="flex lg:hidden flex-col h-[94%] mt-3">
        <ul className="mt-10 flex flex-col justify-center gap-2">
          <li className="bg-amber-600  lg:rounded-xl rounded-full ">
            <Tooltip content="Dashboard" placement="right">
            <Link
              to={"/dashboard"}
              className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
            >
              <MdOutlineDashboard className="text-[20px]" />
              <span className="hidden lg:block">Dashboard</span>
            </Link></Tooltip>
          </li>
          <li className="bg-amber-600  lg:rounded-xl rounded-full ">
          <Tooltip content="Messages" placement="right">
            <Link
              to={"/messages"}
              className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
            >
              <MdOutlineMessage className="text-[18px]" />
              
              <span className="hidden lg:block">Messages</span>
            </Link>
            </Tooltip>
          </li>
          <li className="bg-amber-600  lg:rounded-xl rounded-full  ">
          <Tooltip content="Jobs" placement="right">
            <Link
              to={"/f-job"}
              className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
            >
              <CiSearch className="text-[20px]" />
              
              <span className="hidden lg:block">Find Jobs</span>
            </Link>
            </Tooltip>
          </li>
          <li className="bg-amber-600  lg:rounded-xl rounded-full  ">
          <Tooltip content="Profile" placement="right">
            <Link
              to={"/my-profile"}
              className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
            >
              <FaRegUser className="text-[18px]" />
              <span className="hidden lg:block">My Public Profile</span>
              
            </Link>
            </Tooltip>
          </li>
        </ul>
        <ul className="mt-auto flex gap-2 flex-col">
          <li className="bg-amber-600 lg:rounded-xl rounded-full ">
          <Tooltip content="Logout" placement="right">
            <Link className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]">
              <IoIosLogOut className="text-[18px]" />
              <span className="hidden lg:block">Log Out</span>
              
            </Link>
            </Tooltip>
          </li>
          <li className="bg-amber-600  lg:rounded-xl rounded-full  ">
            <Tooltip content={`Username`} placement="right">
            <Link className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]">
              <IoIosLogOut className="text-[18px]" />
              <div className="hidden lg:block">
                <h4 className="font-medium text-[15px]">UserName</h4>
                <p className="text-gray-600 text-[12px]">Email</p>
              </div>
            </Link>
            </Tooltip>
          </li>
        </ul>
      </div>
    </section>
    </>
  );
};

export default Side;
