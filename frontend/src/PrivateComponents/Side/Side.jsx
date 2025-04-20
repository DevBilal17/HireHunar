import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
const Side = () => {
  return (
    <section className="max-w-[300px] w-full  h-[100vh] p-5 bgLinear">
    <Link to={"/"}>
      <h3 className="brand font-semibold text-[25px] ">
        <img src="" alt="" className="logo" />
        HireHunar
      </h3>
    </Link>
    <div className="flex flex-col h-[94%]">
      <ul className="mt-10 flex flex-col justify-center gap-2">
        <li className="bg-amber-600  rounded-xl ">
          <Link to={'/dashboard'} className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]" >
            <MdOutlineDashboard className="text-[20px]" />
            Dashboard
          </Link>
        </li>
        <li className="bg-amber-600  rounded-xl ">
          <Link to={'/messages'} className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]">
            <MdOutlineMessage className="text-[18px]" />
            Messages
          </Link>
        </li>
        <li className="bg-amber-600  rounded-xl ">
          <Link to={'/find-job'} className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]">
            <CiSearch className="text-[20px]" />
            Find Jobs
          </Link>
        </li>
        <li className="bg-amber-600  rounded-xl ">
          <Link to={'/my-profile'} className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]">
            <FaRegUser className="text-[18px]" />
            My Public Profile
          </Link>
        </li>
      </ul>
      <ul className="mt-auto flex gap-2 flex-col">
        <li className="bg-amber-600  rounded-xl ">
          <Link className="flex  py-4 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]">
            <IoIosLogOut className="text-[18px]" />
            Log Out
          </Link>
        </li>
        <li className="bg-amber-600  rounded-xl ">
          <Link className="flex  py-3 items-center  px-5 gap-2.5  cursor-pointer  text-[16px]">
            <IoIosLogOut className="text-[18px]" />
            <div className="">
                <h4 className="font-medium text-[15px]">UserName</h4>
                <p className="text-gray-600 text-[12px]">Email</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default Side
