import React from "react";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = ({ profile }) => {
  let { links,phoneNo } = profile;
  
  return (
    <div className="min-h-fit relative w-full md:p-6 p-4  dash-boxes ">
      <h2 className="text-xl font-semibold">Contact</h2>
      <div className="pl-2 pt-2">
        {links && phoneNo ? (
          <span className="">
            {links.map((item, index) => {
              return (
                <div className="flex items-center gap-2" key={index}>
                  <span className="text-[15px] font-medium">{item.platform}</span>
                  <Link to={item.url} className="text-blue-600 hover:cursor-pointer hover:underline">{item.url}</Link>
                </div>
              );
            })}
            {
              phoneNo&& <div className="mt-2 flex items-center gap-2">
                <FaPhone className="text-[15px] font-medium" />
                <Link href={`tel:${phoneNo}`}>{phoneNo}</Link>
              </div>
            }
          </span>
        ) : (
          "No data"
        )}
      </div>
    </div>
  );
};

export default React.memo(Contact);
