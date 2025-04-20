import React, { useState } from "react";
import { useForm } from "react-hook-form";
const NestedList = ({ listName, nestedItems }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div
        className="flex items-center justify-between px-2 cursor-pointer"
        onClick={handleClick}
      >
        <h4 className="font-semibold">{listName}</h4>
        <span>
          {open ? (
            <svg
              className="w-5 h-5 text-gray-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-gray-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 15l7-7 7 7"></path>
            </svg>
          )}
        </span>
      </div>
      {open && (
        <div className="pt-3 pl-4">
          <form onChange={handleSubmit(onSubmit)}>
            <div className="flex max-w-md flex-col gap-4">
              {nestedItems?.map((elem, index) => {
                return (
                  <div className="flex items-center gap-2">
                    <input
                      id={elem.value}
                      type="radio"
                      value={elem.value}
                      defaultChecked
                      {...register("Job Filter")}
                    />
                    <label htmlFor={elem.value} className="text-[15px]">
                      {elem.name}
                    </label>
                    <span className="text-[12px] -ml-1 mt-0.5">
                      (${elem.results})
                    </span>
                  </div>
                );
              })}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NestedList;
