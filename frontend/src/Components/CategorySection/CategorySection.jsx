import React from "react";
import CategoryButtons from "./CategoryButtons/CategoryButtons.jsx";
import CategoryCards from "./CategoryCards/CategoryCards";
import "./CategorySection.css";
import { Link } from "react-router-dom";
const CategorySection = () => {
  return (
    <div className="max-w-[900px] w-full pt-8 mx-auto">
      <div className="max-w-[700px] w-full mx-auto justify-center flex flex-wrap gap-2">
        <CategoryButtons />
      </div>
      <CategoryCards />
      <div className="w-full flex justify-center">
        <Link to={'/f-job'} className="btnHover  cursor-pointer border-[1px] mt-8  border-gray-400 text-gray-800 px-3 py-2 rounded-3xl">
          Show More
        </Link>
      </div>
    </div>
  );
};

export default CategorySection;
