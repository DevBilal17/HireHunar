import React, { useEffect } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import Side from "../../../PrivateComponents/Side/Side";
import DashNav from "../../../PrivateComponents/DashNav/DashNav";
import DashComp from "../UserDashboardComponents/DashComp";
const Dashboard = () => {
  return (
    <div className="flex w-full">
      <Side />
      <div className="w-full  flex flex-col flex-1  md:ml-[80px] lg:ml-[250px] ">
        <DashNav title={"Dashboard"} />
        <div className="h-full  w-full mx-auto  bg-gray-100  py-7">
          <DashComp/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
