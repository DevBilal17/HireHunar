import React, { useContext } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import  { UserAuthContext } from "../../../../Contexts/AuthContext";
import { ApiUserData } from "../../../../Contexts/ApiContext";
import LinkButton from "../../../../AnimatedComponents/LinkButton";
const ProfileImageSection = ({profile}) => {
    
  return (
    <div className="min-h-[300px] relative w-full border border-gray-300 profileImageSection  md:p-6 p-4  dash-boxes">
      <div className="cover h-[140px] ">
        <img src={profile.coverPicture} alt="" className="w-full h-full object-fill"/>
        {/* <button className="cursor-pointer editCover absolute border border-white px-3 py-3 right-[20px] top-[20px]">
            <FiEdit className="text-[20px]"/>
        </button> */}
      </div>
      <div className="content">
        <div className="profileImg  absolute top-[70px] left-[40px] w-[150px] rounded-full overflow-hidden h-[150px] border-[10px] border-white">
          <img src={profile.profilePicture} alt="" className="w-full h-full" />
        </div>
        <div className="flex md:flex-row flex-col ml-[190px] md:ml-[170px] mt-[30px] gap-5 justify-between px-5 py-5 profileInfo">
          <div className="">
            <h2 className="text-2xl">{profile.name}</h2>
            <p className="flex items-center text-wrap gap-1.5 text-gray-500">
              <IoLocationOutline className="text-[22px]" />
              {profile.location.address} - {profile.location.city} - {profile.location.country}
            </p>
          </div>
          {/* <div>
            <LinkButton link={`/my-profile/edit-profile/`} className="px-3 py-2 border cursor-pointer custom-gradient backdrop-blur-md hover:bg-opacity-20 shadow-lg transition-transform transform   text-white  font-medium"><button className="cursor-pointer">Edit Profile</button></LinkButton>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProfileImageSection);
