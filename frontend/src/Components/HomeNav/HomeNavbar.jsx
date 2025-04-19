import React from "react";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <nav className="w-full h-[70px] flex items-center justify-between">
      <h3 className="brand font-semibold text-[25px]">
        <img src="" alt="" className="logo" />
        HireHunar
      </h3>
      <ul className="nav-list md:flex hidden items-center gap-6 font-normal ">
        <li className="nav-item">
          <Link>Find a Job</Link>
        </li>
        <li className="nav-item">
          <Link>Companies</Link>
        </li>
        <li className="nav-item">
          <Link>Contact</Link>
        </li>
      </ul>
      <div className="nav-btns flex gap-4">
        <button className="px-6 py-2.5  cursor-pointer rounded-4xl hover:bg-black transition-all hover:text-white">Login</button>
        <button className="px-6 py-2.5 bg-black text-white cursor-pointer rounded-4xl">SignUp</button>
      </div>
    </nav>
  );
};

export default HomeNavbar;
