import React, { useContext, useEffect, useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { Tooltip } from "flowbite-react";
import { FaRegBuilding } from "react-icons/fa";
import { BsFilePost } from "react-icons/bs";
import { UserAuthContext } from "../../Contexts/AuthContext";
import { IoAddSharp } from "react-icons/io5";
import { FaArrowLeftLong } from "react-icons/fa6";
const Side = ({ isOpen, onClose }) => {
  let location = useLocation();
  const [active, setActive] = useState("dashboard");
  let { callLogOut, user } = useContext(UserAuthContext);
  let userType = user.userType;
  useEffect(() => {
    if (location.pathname.includes("dashboard")) {
      setActive("dashboard");
    } else if (location.pathname.includes("messages")) {
      setActive("messages");
    } else if (location.pathname.includes("f-job")) {
      setActive("f-job");
    } else if (location.pathname.includes("my-profile")) {
      setActive("my-profile");
    } else if (location.pathname.includes("company-profile")) {
      setActive("company-profile");
    } else if (location.pathname.includes("post-job")) {
      setActive("post-job");
    } else if (location.pathname.includes("all-jobs")) {
      setActive("all-jobs");
    }
    console.log("object");
  }, [location]);
  return (
    <>
      {isOpen && (
        <div
          className="fixed  inset-0 bg-black opacity-30 z-10 lg:hidden"
          onClick={onClose}
        >
          <FaArrowLeftLong className="text-black" />
        </div>
      )}

      <section
        // className={` transition-all duration-500 max-w-[80px] lg:max-w-[250px] w-full  h-screen   lg:p-5 py-5 px-3 s fixed  z-20 bg-white left-0 top-0
        //   min-[600px]:static min-[600px]:translate-x-0 min-[600px]:block ${
        //     isOpen ? "translate-x-0" : "-translate-x-full"
        //   }`}


        className={`transition-all duration-500 max-w-[80px] lg:max-w-[250px] w-full h-screen 
          lg:p-5 py-5 px-3 fixed z-30 bg-white left-0 top-0 
           min-[600px]:translate-x-0  
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          // style={{
          //   overflowY: "auto", // Enables scrolling inside the sidebar
          // }}
      >
        <Link to={"/"} className="hidden lg:block">
          <h3 className="brand font-semibold text-[25px] hidden lg:block">
            <img src="" alt="" className="logo" />
            HireHunar
          </h3>
        </Link>
        <div className="lg:flex hidden flex-col justify-between  h-[96%]">
          <ul className="mt-10 flex flex-col justify-center  gap-2">
            <li
              className={`${
                active == "dashboard"
                  ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                  : "inset-box-shadow"
              } rounded-xl border-[1px] border-gray-100 `}
            >
              <Link
                to={"/dashboard"}
                className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
              >
                <MdOutlineDashboard className="text-[20px]" />
                <span className="">Dashboard</span>
              </Link>
            </li>
            <li
              className={`${
                active == "messages"
                  ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                  : "inset-box-shadow"
              } rounded-xl border-[1px] border-gray-100 `}
            >
              <Link
                to={"/messages"}
                className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
              >
                <MdOutlineMessage className="text-[18px]" />

                <span className="">Messages</span>
              </Link>
            </li>
            {userType == "company" && (
              <li
                className={`${
                  active == "post-job"
                    ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                    : "inset-box-shadow"
                } rounded-xl border-[1px] border-gray-100 `}
              >
                <Link
                  to={"/post-job"}
                  className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
                >
                  <IoAddSharp className="text-[20px]" />

                  <span className="">Post a Job</span>
                </Link>
              </li>
            )}
            {userType == "jobseeker" ? (
              <li
                className={`${
                  active == "f-job"
                    ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                    : "inset-box-shadow"
                } rounded-xl border-[1px] border-gray-100 `}
              >
                <Link
                  to={"/f-job"}
                  className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
                >
                  <CiSearch className="text-[20px]" />

                  <span className="">Find Jobs</span>
                </Link>
              </li>
            ) : (
              <li
                className={`${
                  active == "all-jobs"
                    ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                    : "inset-box-shadow"
                } rounded-xl border-[1px] border-gray-100 `}
              >
                <Link
                  to={"/all-jobs"}
                  className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
                >
                  <BsFilePost className="text-[20px]" />

                  <span className="">All Jobs</span>
                </Link>
              </li>
            )}
            {userType == "jobseeker" ? (
              <li
                className={`${
                  active == "my-profile"
                    ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                    : "inset-box-shadow"
                } rounded-xl border-[1px] border-gray-100 `}
              >
                <Link
                  to={"/my-profile"}
                  className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
                >
                  <FaRegUser className="text-[18px]" />
                  <span className="">My Public Profile</span>
                </Link>
              </li>
            ) : (
              <li
                className={`${
                  active == "company-profile"
                    ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                    : "inset-box-shadow"
                } rounded-xl border-[1px] border-gray-100 `}
              >
                <Link
                  to={"/company-profile"}
                  className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
                >
                  <FaRegBuilding className="text-[18px]" />
                  <span className="">Company Profile</span>
                </Link>
              </li>
            )}
          </ul>
          <ul className="mt-auto flex gap-2 flex-col">
            <li
              className={`${
                active == "logout"
                  ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg  transition-transform transform   text-white text-lg font-medium"
                  : "inset-box-shadow"
              } rounded-xl dash-log-out border-[1px] border-gray-100 `}
            >
              <button
                className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
                onClick={callLogOut}
              >
                <IoIosLogOut className="text-[18px]" />
                <span className="">Log Out</span>
              </button>
            </li>
            <li
              className={`${
                active == "p"
                  ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                  : "inset-box-shadow"
              } rounded-xl border-[1px] border-gray-100 bg-gray-200`}
            >
              <Link className="flex  py-4 items-center  px-5 gap-2.5   cursor-pointer  text-[16px]">
                <div className="h-[50px] w-[50px] rounded-full overflow-hidden flex items-center justify-center">
                  <img src={user.profilePicture} alt="" className="" />
                </div>
                <div className="">
                  <h4 className="font-medium text-[14px] ">{user.name}</h4>
                  <p className="text-gray-600 text-[12px]">{user.email}</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* For Smaller than large screen with tooltip component */}
        <div className="flex lg:hidden flex-col h-[94%] mt-3">
          <ul className="mt-10 flex flex-col justify-center gap-2">
            <li
              className={`${
                active == "dashboard"
                  ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                  : "inset-box-shadow"
              } rounded-full lg:rounded-xl border-[1px] border-gray-100 `}
            >
              <Tooltip content="Dashboard" placement="right">
                <Link
                  to={"/dashboard"}
                  className="flex  py-4.5 items-center  px-4.5 gap-2.5  cursor-pointer  text-[16px]"
                >
                  <MdOutlineDashboard className="text-[20px]" />
                  <span className="hidden lg:block">Dashboard</span>
                </Link>
              </Tooltip>
            </li>
            <li
              className={`${
                active == "messages"
                  ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                  : "inset-box-shadow"
              } rounded-full lg:rounded-xl border-[1px] border-gray-100 `}
            >
              <Tooltip content="Messages" placement="right">
                <Link
                  to={"/messages"}
                  className="flex  py-4.5 items-center  px-4.5 gap-2.5  cursor-pointer  text-[16px]"
                >
                  <MdOutlineMessage className="text-[20px]" />

                  <span className="hidden lg:block">Messages</span>
                </Link>
              </Tooltip>
            </li>
            {userType == "company" && (
              <li
                className={`${
                  active == "post-job"
                    ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                    : "inset-box-shadow"
                } rounded-full border-[1px] border-gray-100 `}
              >
                <Tooltip content="Post Job" placement="right">
                  <Link
                    to={"/post-job"}
                    className="flex  py-4.5 items-center  px-4.5 gap-2.5  cursor-pointer  text-[16px]"
                  >
                    <IoAddSharp className="text-[20px]" />

                    {/* <span className="">Post a Job</span> */}
                  </Link>
                </Tooltip>
              </li>
            )}
            {userType == "jobseeker" ? (
              <li
                className={`${
                  active == "f-job"
                    ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                    : "inset-box-shadow"
                } rounded-full lg:rounded-xl border-[1px] border-gray-100 `}
              >
                <Tooltip content="Jobs" placement="right">
                  <Link
                    to={"/f-job"}
                    className="flex  py-4.5 items-center  px-4.5 gap-2.5  cursor-pointer  text-[16px]"
                  >
                    <CiSearch className="text-[20px]" />

                    <span className="hidden lg:block">Find Jobs</span>
                  </Link>
                </Tooltip>
              </li>
            ) : (
              <li
                className={`${
                  active == "all-jobs"
                    ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                    : "inset-box-shadow"
                } rounded-full lg:rounded-xl border-[1px] border-gray-100 `}
              >
                <Tooltip content="All Jobs" placement="right">
                  <Link
                    to={"/all-jobs"}
                    className="flex  py-4.5 items-center  px-4.5 gap-2.5  cursor-pointer  text-[16px]"
                  >
                    <BsFilePost className="text-[20px]" />

                    {/* <span className="hidden lg:block">Find Jobs</span> */}
                  </Link>
                </Tooltip>
              </li>
            )}
            {userType == "jobseeker" ? (
              <li
                className={`${
                  active == "my-profile"
                    ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                    : "inset-box-shadow"
                } rounded-full lg:rounded-xl border-[1px] border-gray-100 `}
              >
                <Tooltip content="Profile" placement="right">
                  <Link
                    to={"/my-profile"}
                    className="flex  py-4.5 items-center  px-4.5 gap-2.5  cursor-pointer  text-[16px]"
                  >
                    <FaRegUser className="text-[20px]" />
                    <span className="hidden lg:block">My Public Profile</span>
                  </Link>
                </Tooltip>
              </li>
            ) : (
              <li
                className={`${
                  active == "company-profile"
                    ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                    : "inset-box-shadow"
                } rounded-full lg:rounded-xl border-[1px] border-gray-100 `}
              >
                <Tooltip content="Company Profile" placement="right">
                  <Link
                    to={"/company-profile"}
                    className="flex  py-4.5 items-center  px-4.5 gap-2.5  cursor-pointer  text-[16px]"
                  >
                    <FaRegBuilding className="text-[20px]" />
                    {/* <span className="hidden lg:block">My Public Profile</span> */}
                  </Link>
                </Tooltip>
              </li>
            )}
          </ul>
          <ul className="mt-auto flex gap-2 flex-col">
            <li
              className={`${
                active == "logout"
                  ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform    text-white text-lg font-medium"
                  : "inset-box-shadow"
              } rounded-full dash-log-out lg:rounded-xl border-[1px] border-gray-100 `}
            >
              <Tooltip content="Logout" placement="right">
                <button
                  className="flex  py-4.5 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]"
                  onClick={callLogOut}
                >
                  <IoIosLogOut className="text-[18px]" />
                  <span className="hidden lg:block">Log Out</span>
                </button>
              </Tooltip>
            </li>
            <li
              className={`${
                active == "p"
                  ? " custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white text-lg font-medium"
                  : "inset-box-shadow"
              } rounded-full lg:rounded-xl border-[1px] border-gray-100 `}
            >
              <Tooltip content={user.name} placement="right">
                <Link className="flex  py-0.5 items-center  px-0.5 gap-2.5  cursor-pointer  text-[16px]">
                  <div className="h-[50px] flex items-center justify-center w-[50px] rounded-full overflow-hidden">
                    <img src={user.profilePicture} alt="" className="" />
                  </div>
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
