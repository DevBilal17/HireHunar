import React, { useState } from "react";
import { FaFigma } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoTvOutline } from "react-icons/io5";
const CategoryButtons = () => {
    const [btnActive,setBtnActive] = useState('ui/ux')
    const [btns,setBtns] = useState([
        {
          id: "ui/ux",
          btnName: "UI/UX Design",
          icon: <FaFigma />,
        },
        {
          id: "development",
          btnName: "Development",
          icon: <IoTvOutline />,
        },
        {
          id: "database",
          btnName: "Database",
          icon: <FaDatabase />,
        },
        {
          id: "others",
          btnName: "Other",
        },
      ])
  const handleCatBtnActive = (elem)=>{
      
  }
  return (
    <>
      {/* { btns.map((elem, index) => {
    <button key={elem.id} className="bg-amber-400">
      <span>{elem.icon}</span>
      {elem.btnName}
    </button>

})} */}
      <button className={`${btnActive=='ui/ux'&&'catBtn'} cursor-pointer border-[1px] border-solid border-gray-300 flex items-center gap-2 text-[14px] text-gray-500 py-2 px-3 rounded-3xl`}>
        <span>
          <FaFigma className={`text-[14px] text-gray-500 ${btnActive=='ui/ux'&&'text-white'}`} />
        </span>
        UI/UX Design
      </button>
      <button className="border-[1px] cursor-pointer border-solid border-gray-300 flex items-center gap-2 text-[14px] text-gray-500 py-2 px-3 rounded-3xl">
        <span>
          <IoTvOutline className="text-[14px] text-gray-500" />
        </span>
        Development
      </button>
      <button className="border-[1px] border-solid cursor-pointer border-gray-300 flex items-center gap-2 text-[14px] text-gray-500 py-2 px-3 rounded-3xl">
        <span>
          <FaDatabase className="text-[14px] text-gray-500" />
        </span>
        Database
      </button>
      <button className="border-[1px] border-solid cursor-pointer border-gray-300 flex items-center gap-2 text-[14px] text-gray-500 py-2 px-3 rounded-3xl">
        <span>
        </span>
        Other
      </button>
    </>
  );
};

export default CategoryButtons;
