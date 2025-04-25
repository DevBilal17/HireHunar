import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserAuthContext } from "../../../../Contexts/AuthContext";
import { JobApiData } from "../../../../Contexts/JobApiContext";
import Side from "../../../../PrivateComponents/Side/Side";
import DashNav from "../../../../PrivateComponents/DashNav/DashNav";

const EditProfile = () => {

    let {user} = useContext(UserAuthContext)
      let {userAllData} = useContext(JobApiData)
      let userType = user.userType
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
      const handleSidebarToggle = () => {
        setIsSidebarOpen(prev => !prev);
      };
      
      const handleSidebarClose = () => {
        setIsSidebarOpen(false);
      };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [services, setServices] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [skillError, setSkillError] = useState(false);

  const [team, setTeam] = useState([]);
  const [editingMember, setEditingMember] = useState({
    index: null,
    name: "",
    position: "",
    profile: "",
  });
  const [memberError, setMemberError] = useState(false);

  const addService = () => {
    const skill = currentSkill.trim();
    if (!skill) {
      setSkillError(true);
      return;
    }
    setSkillError(false);

    const newService = {
      serviceName: skill,
      url: "",
    };

    setServices([...services, newService]);
    setCurrentSkill("");
  };

  const addMember = () => {
    if (
      !editingMember.name ||
      !editingMember.position ||
      !editingMember.profile
    ) {
      setMemberError(true);
      return;
    }

    setMemberError(false);

    const newMember = {
      name: editingMember.name,
      position: editingMember.position,
      profileLink: editingMember.profile, // changed here
    };

    if (editingMember.index !== null) {
      const updated = [...team];
      updated[editingMember.index] = newMember;
      setTeam(updated);
    } else {
      setTeam([...team, newMember]);
    }

    setEditingMember({ index: null, name: "", position: "", profile: "" });
  };

  const handleEdit = (index, member) => {
    setEditingMember({
      index: index, // Set the index of the member being edited
      name: member.name,
      position: member.position,
      profile: member.profileLink, // Assuming profileLink is being saved in the member object
    });
  };

  const deleteItem = (index, setFn, list) => {
    const updated = [...list];
    updated.splice(index, 1);
    setFn(updated);
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", {
      ...data,
      services,
      team,
    });
  };

  return (
    <div className="flex ">
      <Side isOpen={isSidebarOpen} onClose={handleSidebarClose} />
      <div className="w-full  flex flex-col flex-1 md:ml-[80px] lg:ml-[250px]">
        <DashNav title={"Edit Profile"} onMenuClick={handleSidebarToggle} />
        <div className="min-h-screen  w-full mx-auto  bg-gray-100  py-7">
          <div className="flex bg-gray-100">
            <div className="p-4 md:p-10 m-5 w-full rounded-3xl bg-white flex justify-center">
              <form onSubmit={handleSubmit(onSubmit)} className=" w-[90%]">
                <div className="grid  gap-4">
                  <div className="flex justify-between max-[900px]:block">
                    <div className="w-[45%] max-[900px]:w-[70%] max-[700px]:w-[80%] max-[500px]:w-full">
                      <label
                        className="text-md font-semibold"
                        htmlFor="Job Title"
                      >
                        Company Name
                      </label>
                      <p className="text-sm text-gray-600">
                        Write name of Company
                      </p>
                      <input
                        {...register("Name")}
                        className="p-2 border-2 border-gray-400 rounded w-full mt-2 text-sm"
                      />
                    </div>
                    <div className="w-[45%] max-[900px]:w-[70%] max-[900px]:mt-4 max-[700px]:w-[80%] max-[500px]:w-full">
                      <label
                        className="text-md font-semibold"
                        htmlFor="Location"
                      >
                        Logo
                      </label>
                      <p className="text-sm text-gray-600">
                        Select Logo for Company
                      </p>
                      <input
                        type="file"
                        placeholder="Location"
                        {...register("profilePicture")}
                        className="border-2 border-gray-400 p-2 rounded w-full text-sm mt-2"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between max-[900px]:block">
                    <div className="w-[45%] max-[900px]:w-[70%] max-[700px]:w-[80%] max-[500px]:w-full">
                      <label
                        className="text-md font-semibold"
                        htmlFor="Job Title"
                      >
                        Company Website URL
                      </label>
                      <p className="text-sm text-gray-600">
                        Write URL of Company
                      </p>
                      <input
                        {...register("websiteLink")}
                        className="p-2 border-2 border-gray-400 rounded w-full mt-2 text-sm"
                      />
                    </div>
                    <div className="w-[45%] max-[900px]:w-[70%] max-[700px]:w-[80%] max-[500px]:w-full">
                      <label
                        className="text-md font-semibold"
                        htmlFor="Job Title"
                      >
                        Industry
                      </label>
                      <p className="text-sm text-gray-600">
                        Write Industry of Company
                      </p>
                      <input
                        {...register("industry")}
                        className="p-2 border-2 border-gray-400 rounded w-full mt-2 text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-md font-semibold">Location</label>
                    <div className="w-full flex justify-between max-[650px]:block">
                      <div className="w-[30%] max-[650px]:w-[80%] max-[500px]:w-full">
                        <p className="text-sm text-gray-600">Address</p>
                        <input
                          {...register("location.address")}
                          className="p-2 border-2 border-gray-400 rounded w-full mt-2 text-sm"
                        />
                      </div>

                      <div className="w-[30%] max-[650px]:w-[80%] max-[500px]:w-full">
                        <p className="text-sm text-gray-600">City</p>
                        <input
                          {...register("location.city")}
                          className="p-2 border-2 border-gray-400 rounded w-full mt-2 text-sm"
                        />
                      </div>

                      <div className="w-[30%] max-[650px]:w-[80%] max-[500px]:w-full">
                        <p className="text-sm text-gray-600">Country</p>
                        <select
                          {...register("location.country")}
                          className="p-2 border-2 border-gray-400 rounded w-full mt-2 text-sm"
                        >
                          <option value="Pakistan">Pakistan</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <label
                        className="font-semibold text-xl mb-3"
                        htmlFor="About"
                      >
                        About
                      </label>

                      <div className="flex justify-between max-[900px]:block">
                        <div className="w-[45%] max-[900px]:w-[70%] max-[700px]:w-[80%] max-[500px]:w-full">
                          <p className="text-sm text-gray-600">
                            No of Employees
                          </p>
                          <input
                            {...register("aboutCompany.companySize")}
                            className="p-2 border-2 border-gray-400 rounded w-full mt-2 text-sm"
                          />
                        </div>
                        <div className="w-[45%] max-[900px]:w-[70%] max-[900px]:mt-4 max-[700px]:w-[80%] max-[500px]:w-full">
                          <p className="text-sm text-gray-600">
                            Date of Company Founded
                          </p>
                          <input
                            type="date"
                            {...register("aboutCompany.yearFounded")}
                            className="p-2 border-2 border-gray-400 rounded  mt-2 text-sm w-full"
                          />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Company Description
                      </p>
                      <textarea
                        {...register("aboutCompany.companyDescription")}
                        className="p-2 border-2 border-gray-400 rounded w-full h-32 mt-2"
                      ></textarea>
                    </div>
                    <div>
                      <label
                        className="font-semibold text-xl mb-3"
                        htmlFor="About"
                      >
                        Contact
                      </label>

                      <div className="flex justify-between max-[900px]:block">
                        <div className="w-[45%] max-[900px]:w-[70%] max-[700px]:w-[80%] max-[500px]:w-full">
                          <p className="text-sm text-gray-600">Platform</p>
                          <input
                            {...register("links.platform")}
                            className="p-2 border-2 border-gray-400 rounded w-full mt-2 text-sm"
                          />
                        </div>
                        <div className="w-[45%] max-[900px]:w-[70%] max-[900px]:mt-4 max-[700px]:w-[80%] max-[500px]:w-full">
                          <p className="text-sm text-gray-600">URL</p>
                          <input
                            type="text"
                            {...register("links.url")}
                            className="p-2 border-2 border-gray-400 rounded  mt-2 text-sm w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between max-[900px]:block">
                    <div className="w-[45%] max-[900px]:w-[70%] max-[900px]:mt-4 max-[700px]:w-[80%] max-[500px]:w-full">
                      <label
                        className="text-md font-semibold"
                        htmlFor="Job Title"
                      >
                        Phone Number
                      </label>
                      <p className="text-sm text-gray-600">
                        Phone number of the Company
                      </p>
                      <input
                        type=""
                        {...register("phoneNo")}
                        className="p-2 border-2 border-gray-400 rounded  mt-2 text-sm w-full"
                      />
                    </div>
                    {/* Skills */}
                    <div className="w-[45%] max-[900px]:w-[70%] max-[700px]:w-[80%] max-[500px]:w-full">
                      <label className="text-md font-semibold">Services</label>
                      <p className="text-sm text-gray-600">
                        Services of Company
                      </p>
                      <div className="flex gap-2 mt-2">
                        <input
                          value={currentSkill}
                          onChange={(e) => setCurrentSkill(e.target.value)}
                          className={`border-gray-400 text-sm border-2 rounded p-2 w-full ${
                            skillError ? "border-red-500" : ""
                          }`}
                        />
                        <button
                          type="button"
                          onClick={addService}
                          className="bg-blue-500 text-white px-3 rounded"
                        >
                          Add
                        </button>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-2">
                        {services.map((serviceObj, i) => {
                          const key = Object.keys(serviceObj)[0];
                          return (
                            <span
                              key={i}
                              className="bg-blue-100 px-3 py-1 rounded-full"
                            >
                              {serviceObj[key]}
                              <button
                                type="button"
                                onClick={() =>
                                  deleteItem(i, setServices, services)
                                }
                                className="ml-2 text-red-500"
                              >
                                ✕
                              </button>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Perks */}
                  <div className="">
                    <h2 className="font-semibold text-xl mb-3">Team Members</h2>
                    <div className="w-full flex justify-between max-[650px]:block">
                      <div className="w-[30%] max-[650px]:w-[80%] max-[500px]:w-full">
                        <label className="font-medium">Name</label>
                        <div className="w-full">
                          <input
                            value={editingMember.name}
                            onChange={(e) =>
                              setEditingMember({
                                ...editingMember,
                                name: e.target.value,
                              })
                            }
                            placeholder="Member Name"
                            className="border-gray-400 border-2 rounded p-2 w-full mt-2"
                          />
                        </div>
                      </div>

                      <div className="w-[30%] max-[650px]:w-[80%] max-[500px]:w-full">
                        <label className="font-medium">Position</label>
                        <input
                          value={editingMember.position}
                          onChange={(e) =>
                            setEditingMember({
                              ...editingMember,
                              position: e.target.value,
                            })
                          }
                          placeholder="Team Position"
                          className="border-gray-400 border-2 rounded p-2 w-full mt-2"
                        />
                      </div>

                      <div className="w-[30%] max-[650px]:w-[80%] max-[500px]:w-full">
                        <label className="font-medium">Linked In</label>
                        <input
                          value={editingMember.profile}
                          onChange={(e) =>
                            setEditingMember({
                              ...editingMember,
                              profile: e.target.value,
                            })
                          }
                          placeholder="Linked URL"
                          className="p-2 border-2 border-gray-400 rounded w-full mt-2"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={addMember}
                      className="bg-purple-500 text-white px-3 rounded w-min py-2 mt-2"
                    >
                      {editingMember.index !== null ? "Update" : "Add"}
                    </button>

                    {memberError && (
                      <p className="text-red-500 text-sm mt-1">
                        All fields are required.
                      </p>
                    )}

                    <div className="mt-3 space-y-2">
                      {team.map((member, index) => (
                        <div
                          key={index}
                          className="p-3 border rounded bg-purple-100 relative"
                        >
                          <strong>{member.name || <em>No Name</em>}</strong>
                          <p>
                            <b>Position:</b> {member.position || <em>None</em>}
                          </p>
                          <p>
                            <b>LinkedIn:</b>{" "}
                            {member.profileLink || <em>No URL</em>}
                          </p>

                          <button
                            className="absolute top-2 right-2 text-blue-500"
                            onClick={() => handleEdit(index, member)} // Edit member on click
                          >
                            ✎
                          </button>

                          <button
                            className="absolute top-2 right-8 text-red-500"
                            onClick={() => deleteItem(index, setTeam, team)}
                          >
                            X
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex w-full justify-center">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 "
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
