import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiHumanCannonball } from "react-icons/gi";

const DashNav = ({ title, onMenuClick }) => {
  return (
    <div className=" w-[100%]  h-[70px] sticky top-0 left-0 bg-white z-10 flex py-3 px-2 md:px-5 lg:px-10  justify-between items-center n">
      <h2 className="md:text-2xl text-xl font-medium  text-black flex items-center gap-2">
        <button
          className="text-xl mr-2 min-[600px]:hidden cursor-pointer"
          onClick={onMenuClick}
        >
          <GiHamburgerMenu />
        </button>
        {title}
      </h2>
      <Link
        to={"/"}
        className=" md:py-3 py-1.5 px-2.5 md:px-4 md:mr-0 mr-5  rounded-3xl text-white font-medium bg-gradient-to-r from-cyan-500 text-[14px] to-blue-500 bg-opacity-10 backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform"
      >
        Back to home
      </Link>
    </div>
  );
};

export default React.memo(DashNav);
