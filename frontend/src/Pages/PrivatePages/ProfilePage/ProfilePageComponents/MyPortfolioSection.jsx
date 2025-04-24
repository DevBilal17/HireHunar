import React from "react";
import LinkButton from "../../../../AnimatedComponents/LinkButton";

const MyPortfolioSection = ({ profile }) => {
  let projects = profile.projects;
  return (
    <div className="min-h-fit relative w-full md:p-6 p-4  dash-boxes border border-gray-300 ">
      <h2 className="text-xl font-semibold">Projects</h2>

      {projects ? (
        projects.map((elem, index) => {
          return (
            <div className="mt-3 w-full  py-4" key={index}>
              <div className="flex items-center justify-between md:flex-row flex-col">
                <div>
                  <h3 className="text-lg font-medium">{elem.projectName}</h3>

                  <p className="text-md text-gray-600 mt-1 max-w-[420px] w-full ">
                    {elem.projectDescription}
                  </p>
                </div>
                <div className="flex justify-start md:w-fit w-full md:my-0 my-5">
                  <LinkButton link={elem.projectLink}>Visit</LinkButton>
                </div>
              </div>
              <div className="my-4 w-full h-[2px] custom-gradient"></div>
            </div>
          );
        })
      ) : (
        <p className="mt-3 text-gray-500"></p>
      )}
    </div>
  );
};

export default React.memo(MyPortfolioSection);
