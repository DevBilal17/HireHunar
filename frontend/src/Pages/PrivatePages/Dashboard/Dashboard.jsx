import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineMessage } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import Side from "../../../PrivateComponents/Side/Side";
import DashNav from "../../../PrivateComponents/DashNav/DashNav";
const Dashboard = () => {
  return (
    <div className="flex">
     <Side/>
     <div className='w-full flex flex-col'>
        <DashNav title={'Dashboard'} />
     </div>
</div>
  );
};

export default Dashboard;
