import React from "react";

const MyExperienceSection = ({ profile }) => {
  let experience = profile.experience;
  // experience.forEach((element) => {
  //   console.log(element);
  // });
  return (
    <div className="min-h-fit relative w-full p-5 border border-gray-300 profileImageSection ">
      <h2 className="text-xl font-semibold">Experience</h2>

      {experience ? (
        experience.map((elem, index) => {
          return (
            <div className="mt-3 w-full  p-5" key={index}>
              <h3 className="text-lg font-medium">{elem.jobTitle}</h3>
              <div className="flex mt-1 sm:gap-3.5 gap-2 sm:flex-row flex-col">
                <h4 className="text-md text-gray-950">{elem.company}</h4>
                <div className="flex ml-2 items-center gap-1">
                  <div className="circle h-[5px] w-[5px] rounded-full bg-gray-600"></div>
                  <div className="text-md text-gray-800">
                    {elem.startDate} - {elem.endDate}
                  </div>
                </div>
               
              </div>
              <p className="text-md text-gray-600 mt-1">
                  {elem.jobDescription}
                </p>
                <div className="my-4 w-full h-[1px] bg-gray-500"></div>
            </div>
          );
        })
      ) : (
        <p className="mt-3 text-gray-500"></p>
      )}
    </div>
  );
};

export default MyExperienceSection;
