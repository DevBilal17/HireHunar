import React, { useMemo } from "react";
import { Badge } from "flowbite-react";
const MySkillsSection = ({ profile }) => {
  const skills = useMemo(() => profile?.skills || [], [profile]);
  return (
    <div className="min-h-fit relative w-full p-5 border border-gray-300 profileImageSection ">
      <h2 className="text-xl font-semibold">Skills</h2>
      <div className="flex flex-wrap gap-2 w-full p-5">
        {skills ? (
          skills.map((elem, index) => {
            return <Badge className=" rounded-full px-3 py-1" > {elem} </Badge>;
          })
        ) : (
          <p className="mt-3 text-gray-500"></p>
        )}
      </div>
    </div>
  );
};

export default MySkillsSection;
