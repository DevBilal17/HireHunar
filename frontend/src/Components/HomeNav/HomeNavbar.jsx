import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContextData } from "../../Contexts/UserContext";


const HomeNavbar = ({className}) => {
  let {isUserLogin,setIsUserLogin} = useContext(UserContextData)
  const toggleLogin = ()=>{
    console.log(isUserLogin)
    setIsUserLogin((prev)=> !prev)
    console.log(isUserLogin)
  }
  return (
    <nav className={`w-full h-[70px] flex items-center justify-between ${className=='hide'&&'hidden'}`}>
      <Link to={'/'}>
        <h3 className="brand font-semibold text-[25px]">
          <img src="" alt="" className="logo" />
          HireHunar
        </h3>
      </Link>
      <ul className="nav-list md:flex hidden items-center gap-6 font-normal ">
        <li className="nav-item">
          <Link to={'/find-jobs'}>Find a Job</Link>
        </li>
        <li className="nav-item">
          <Link>Companies</Link>
        </li>
        <li className="nav-item">
          <Link>Contact</Link>
        </li>
      </ul>
      {
        !isUserLogin ? <div className="nav-btns flex gap-4">
        <Link
          to={"/login"}
          className="px-6 py-2.5  cursor-pointer rounded-4xl hover:bg-black transition-all hover:text-white"
        >
          Login
        </Link>
        <Link to={'/register'} className="px-6 py-2.5 bg-black text-white cursor-pointer rounded-4xl">
          SignUp
        </Link>
      </div> : <div className="nav-btns flex gap-4">
        <Link
          to={"/dashboard"}
          className="px-6 py-2.5  cursor-pointer rounded-4xl hover:bg-black transition-all hover:text-white"
        >
          Dashboard
        </Link>
        <button onClick={toggleLogin} className="px-6 py-2.5 bg-black text-white cursor-pointer rounded-4xl">
          Logout
        </button>
      </div>
      }
    </nav>
  );
};

export default HomeNavbar;
