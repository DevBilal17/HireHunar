import React, { useContext } from "react";
import { ApiUserData } from "../../../../../Contexts/ApiContext";
import Company from "./Company";
import { UserAuthContext } from "../../../../../Contexts/AuthContext";
import JobDescription from "./JobDescription";
import AboutThisRole from "./AboutThisRole";
import Perks from "./Perks";

const SinglePageContainer = ({toggleModal}) => {
  const { profile } = useContext(ApiUserData);
  const {user} = useContext(UserAuthContext)
  let userType = user.userType
  return (
    <div className=" w-full h-full ">
      <Company userType={userType} toggleModal={toggleModal} />
      <div className="flex gap-10 lg:flex-row flex-col w-full h-fit mt-8">
        <div className="left flex flex-col h-full gap-6 lg:w-[70%] w-full ">
         <JobDescription/>
        </div>
        <div className="right  lg:w-[30%] w-full  h-full flex flex-col gap-10">
            <AboutThisRole/>
        </div>
      </div>
      <Perks/>
    </div>
  );
};

export default React.memo(SinglePageContainer);
