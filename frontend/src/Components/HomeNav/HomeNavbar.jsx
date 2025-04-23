import React, { useContext } from "react";
import { Link } from "react-router-dom";

import  { UserAuthContext } from "../../Contexts/AuthContext";


const HomeNavbar = ({className}) => {
  let {user,callLogOut} = useContext(UserAuthContext)
  return (
    <nav className={`w-full h-[70px] flex items-center justify-between ${className=='hide'&&'hidden'}`}>
      <Link to={'/'}>
        <h3 className="brand font-semibold md:text-[25px] text-[20px]">
          <img src="" alt="" className="logo" />
          HireHunar
        </h3>
      </Link>
      {/* <ul className="nav-list md:flex hidden items-center gap-2 md:gap-6 font-normal ">
        <li className="nav-item">
          <Link to={'/find-jobs'}>Find a Job</Link>
        </li>
        <li className="nav-item">
          <Link>Companies</Link>
        </li>
        <li className="nav-item">
          <Link>Contact</Link>
        </li>
      </ul> */}
      {
        !user ? <div className="nav-btns flex items-center md:gap-4 sm:gap-2 gap-1">
        <Link
          to={"/login"}
          className="md:px-6 px-2.5 md:py-2.5 py-1.5   text-sm md:text-[16px] cursor-pointer rounded-4xl hover:bg-black transition-all hover:text-white"
        >
          Login
        </Link>
        <Link to={'/register'} className="md:px-6 px-2.5 md:py-2.5 py-1.5   text-sm md:text-[16px] bg-black text-white cursor-pointer rounded-4xl">
          SignUp
        </Link>
      </div> : <div className="nav-btns flex gap-4">
        <Link
          to={"/dashboard"}
          className="md:px-6 px-2.5 md:py-2.5 py-1.5   text-sm md:text-[16px]  cursor-pointer rounded-4xl hover:bg-black transition-all hover:text-white"
        >
          Dashboard
        </Link>
        <button onClick={callLogOut} className="md:px-6 px-2.5 md:py-2.5 py-1.5   text-sm md:text-[16px] bg-black text-white cursor-pointer rounded-4xl">
          Logout
        </button>
      </div>
      }
    </nav>
  );
};

export default HomeNavbar;
