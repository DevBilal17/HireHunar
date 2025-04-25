import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ApiUserData } from "../../../../Contexts/ApiContext";

const EditForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let {profile}  = useContext(ApiUserData)
  const [skills, setSkills] = useState(profile?.skills || []);
  const [currentSkill, setCurrentSkill] = useState("");
  const [skillError, setSkillError] = useState(false);

  const [education, setEducation] = useState(profile?.education||[]);
  const [editingEducation, setEditingEducation] = useState(profile?.experience || {
    index: null,
    degree: "",
    institution: "",
    startYear: "",
    endYear: "",
    description: "",
  });
  const [educationError, setEducationError] = useState(false);

  const addEducation = () => {
    const { degree, institution, startYear, endYear, description } =
      editingEducation;

    if (!degree || !institution || !startYear || !endYear || !description) {
      setEducationError(true);
      return;
    }

    setEducationError(false);

    const newEducation = {
      degree,
      institution,
      startYear,
      endYear,
      description,
    };

    if (editingEducation.index !== null) {
      const updated = [...education];
      updated[editingEducation.index] = newEducation;
      setEducation(updated);
    } else {
      setEducation([...education, newEducation]);
    }

    setEditingEducation({
      index: null,
      degree: "",
      institution: "",
      startYear: "",
      endYear: "",
      description: "",
    });
  };

  const handleEditEducation = (index, item) => {
    setEditingEducation({ ...item, index });
  };

  const [experience, setExperience] = useState(profile.experience||[]);
  const [editingExperience, setEditingExperience] = useState({
    index: null,
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    jobDescription: "",
  });
  const [experienceError, setExperienceError] = useState(false);

  const addExperience = () => {
    const { jobTitle, company, startDate, endDate, jobDescription } =
      editingExperience;

    if (!jobTitle || !company || !startDate || !endDate || !jobDescription) {
      setExperienceError(true);
      return;
    }

    setExperienceError(false);

    const newExperience = {
      jobTitle,
      company,
      startDate,
      endDate,
      jobDescription,
    };

    if (editingExperience.index !== null) {
      const updated = [...experience];
      updated[editingExperience.index] = newExperience;
      setExperience(updated);
    } else {
      setExperience([...experience, newExperience]);
    }

    setEditingExperience({
      index: null,
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
    });
  };

  const handleEditExperience = (index, item) => {
    setEditingExperience({ ...item, index });
  };

  const [projects, setProjects] = useState(profile?.projects||[]);
  const [editingProject, setEditingProject] = useState({
    index: null,
    projectName: "",
    projectLink: "",
    projectDescription: "",
  });
  const [projectError, setProjectError] = useState(false);

  const addService = () => {
    const skill = currentSkill.trim();
    if (!skill) {
      setSkillError(true);
      return;
    }
    setSkillError(false);

    setSkills((prev) => ({
      ...prev,
      type: [...prev.type, skill],
    }));
    setCurrentSkill("");
  };
  const deleteSkill = (index) => {
    setSkills((prev) => ({
      ...prev,
      type: prev.type.filter((_, i) => i !== index),
    }));
  };

  const addProject = () => {
    if (
      !editingProject.projectName ||
      !editingProject.projectLink ||
      !editingProject.projectDescription
    ) {
      setProjectError(true);
      return;
    }

    setProjectError(false);

    const newProject = {
      projectName: editingProject.projectName,
      projectLink: editingProject.projectLink,
      projectDescription: editingProject.projectDescription,
    };

    if (editingProject.index !== null) {
      const updated = [...projects];
      updated[editingProject.index] = newProject;
      setProjects(updated);
    } else {
      setProjects([...projects, newProject]);
    }

    setEditingProject({
      index: null,
      projectName: "",
      projectLink: "",
      projectDescription: "",
    });
  };

  const handleEditProject = (index, project) => {
    setEditingProject({ ...project, index });
  };

  const deleteItem = (index, setFn, list) => {
    const updated = [...list];
    updated.splice(index, 1);
    setFn(updated);
  };

  const onSubmit = (data) => {
  
    let d = {...data,skills,projects,education}
    console.log(d)
  };

  return (
    <div className="flex bg-gray-100">
      <div className="p-4 md:p-10 m-5 w-full rounded-3xl bg-white flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-[90%]">
          <div className="grid  gap-4">
            <div className="flex justify-between max-[900px]:block">
              <div className="w-[45%] max-[900px]:w-[70%] max-[900px]:mt-4 max-[700px]:w-[80%] max-[500px]:w-full">
                <label className="text-md font-semibold" htmlFor="Location">
                  Profile Picture
                </label>
                <p className="text-sm text-gray-600">
                  Select your profile picture
                </p>
                <input
                  type="file"
                  placeholder="Location"
                  {...register("profilePicture")}
                  className="border-2 border-gray-400 p-2 rounded w-full text-sm mt-2"
                  value={profile.profilePicture}
                />
              </div>
              <div className="w-[45%] max-[900px]:w-[70%] max-[700px]:w-[80%] max-[500px]:w-full">
                <label className="text-md font-semibold" htmlFor="Job Title">
                  Cover Photo
                </label>
                <p className="text-sm text-gray-600">Select Cover Picture</p>
                <input
                  type="file"
                  {...register("websiteLink")}
                  className="p-2 border-2 border-gray-400 rounded w-full mt-2 text-sm"
                />
              </div>
            </div>
            <div className="flex justify-between max-[900px]:block">
              <div className="w-[45%] max-[900px]:w-[70%] max-[700px]:w-[80%] max-[500px]:w-full">
                <label className="text-md font-semibold" htmlFor="Job Title">
                  Name
                </label>
                <p className="text-sm text-gray-600">Write name</p>
                <input
                  {...register("name")}
                  className="p-2 border-2 border-gray-400 rounded w-full mt-2 text-sm"
                  value={profile.name}
                />
              </div>

              {/* <div className='w-[45%] max-[900px]:w-[70%] max-[700px]:w-[80%] max-[500px]:w-full'>
                    <label className='text-md font-semibold' htmlFor="Job Title">Phone No</label>
                    <p className='text-sm text-gray-600'>Write your Phone No</p>
                    <input {...register('industry',)} className="p-2 border-2 border-gray-400 rounded w-full mt-2 text-sm" />
                  </div> */}
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
                <label className="font-semibold text-xl mb-3" htmlFor="About">
                  Bio
                </label>

                <textarea
                  {...register("aboutMe")}
                  className="p-2 border-2 border-gray-400 rounded w-full h-32 mt-2"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between max-[900px]:block">
              <div className="w-[45%] max-[900px]:w-[70%] max-[900px]:mt-4 max-[700px]:w-[80%] max-[500px]:w-full">
                <label className="text-md font-semibold" htmlFor="Job Title">
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
                <label className="text-md font-semibold">Skills</label>
                <p className="text-sm text-gray-600">Write your skills</p>

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
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 px-3 py-1 rounded-full"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => deleteSkill(i)}
                        className="ml-2 text-red-500"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="font-semibold text-xl mb-3">Education</h2>

              <div className="w-full flex justify-between max-[900px]:block">
                <div className="w-[45%] max-[900px]:w-[70%] max-[500px]:w-full">
                  <label className="font-medium">Degree</label>
                  <input
                    value={editingEducation.degree}
                    onChange={(e) =>
                      setEditingEducation({
                        ...editingEducation,
                        degree: e.target.value,
                      })
                    }
                    className="border-gray-400 border-2 rounded p-2 w-full mt-2"
                  />
                </div>

                <div className="w-[45%] max-[900px]:w-[70%] max-[500px]:w-full">
                  <label className="font-medium">Institution</label>
                  <input
                    value={editingEducation.institution}
                    onChange={(e) =>
                      setEditingEducation({
                        ...editingEducation,
                        institution: e.target.value,
                      })
                    }
                    className="border-gray-400 border-2 rounded p-2 w-full mt-2"
                  />
                </div>
              </div>

              <div className="w-full flex justify-between max-[900px]:block mt-2">
                <div className="w-[45%] max-[900px]:w-[70%] max-[500px]:w-full">
                  <label className="font-medium">Start Year</label>
                  <input
                    value={editingEducation.startYear}
                    onChange={(e) =>
                      setEditingEducation({
                        ...editingEducation,
                        startYear: e.target.value,
                      })
                    }
                    className="border-gray-400 border-2 rounded p-2 w-full mt-2"
                    placeholder="e.g., 2019"
                  />
                </div>

                <div className="w-[45%] max-[900px]:w-[70%] max-[500px]:w-full">
                  <label className="font-medium">End Year</label>
                  <input
                    value={editingEducation.endYear}
                    onChange={(e) =>
                      setEditingEducation({
                        ...editingEducation,
                        endYear: e.target.value,
                      })
                    }
                    className="border-gray-400 border-2 rounded p-2 w-full mt-2"
                    placeholder="e.g., 2023"
                  />
                </div>
              </div>

              <div className="w-full mt-2">
                <label className="font-medium">Description</label>
                <textarea
                  value={editingEducation.description}
                  onChange={(e) =>
                    setEditingEducation({
                      ...editingEducation,
                      description: e.target.value,
                    })
                  }
                  className="p-2 border-2 border-gray-400 rounded w-full mt-2 h-32"
                />
              </div>

              <button
                type="button"
                onClick={addEducation}
                className="custom-gradient text-white px-3 rounded w-min py-2 mt-2"
              >
                {editingEducation.index !== null ? "Update" : "Add"}
              </button>

              {educationError && (
                <p className="text-red-500 text-sm mt-1">
                  All fields are required.
                </p>
              )}

              <div className="mt-3 space-y-2">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="p-3 border rounded bg-purple-100 relative"
                  >
                    <strong>{edu.degree || <em>No Degree</em>}</strong>
                    <p>
                      <b>Institution:</b> {edu.institution || <em>None</em>}
                    </p>
                    <p>
                      <b>Start Year:</b> {edu.startYear || <em>None</em>}
                    </p>
                    <p>
                      <b>End Year:</b> {edu.endYear || <em>None</em>}
                    </p>
                    <p>
                      <b>Description:</b> {edu.description || <em>None</em>}
                    </p>

                    <button
                      className="absolute top-2  text-red-500 right-4"
                      onClick={() => deleteItem(index, setEducation, education)}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience  */}
            <div>
              <h2 className="font-semibold text-xl mb-3">Experience</h2>

              <div className="w-full flex justify-between max-[900px]:block">
                <div className="w-[45%] max-[900px]:w-[70%] max-[500px]:w-full">
                  <label className="font-medium">Job Title</label>
                  <input
                    value={editingExperience.jobTitle}
                    onChange={(e) =>
                      setEditingExperience({
                        ...editingExperience,
                        jobTitle: e.target.value,
                      })
                    }
                    className="border-gray-400 border-2 rounded p-2 w-full mt-2"
                  />
                </div>

                <div className="w-[45%] max-[900px]:w-[70%] max-[500px]:w-full">
                  <label className="font-medium">Company</label>
                  <input
                    value={editingExperience.company}
                    onChange={(e) =>
                      setEditingExperience({
                        ...editingExperience,
                        company: e.target.value,
                      })
                    }
                    className="border-gray-400 border-2 rounded p-2 w-full mt-2"
                  />
                </div>
              </div>

              <div className="w-full flex justify-between max-[900px]:block mt-2">
                <div className="w-[45%] max-[900px]:w-[70%] max-[500px]:w-full">
                  <label className="font-medium">Start Date</label>
                  <input
                    type="date"
                    value={editingExperience.startDate}
                    onChange={(e) =>
                      setEditingExperience({
                        ...editingExperience,
                        startDate: e.target.value,
                      })
                    }
                    className="border-gray-400 border-2 rounded p-2 w-full mt-2"
                  />
                </div>

                <div className="w-[45%] max-[900px]:w-[70%] max-[500px]:w-full">
                  <label className="font-medium">End Date</label>
                  <input
                    type="date"
                    value={editingExperience.endDate}
                    onChange={(e) =>
                      setEditingExperience({
                        ...editingExperience,
                        endDate: e.target.value,
                      })
                    }
                    className="border-gray-400 border-2 rounded p-2 w-full mt-2"
                  />
                </div>
              </div>

              <div className="w-full mt-2">
                <label className="font-medium">Job Description</label>
                <textarea
                  value={editingExperience.jobDescription}
                  onChange={(e) =>
                    setEditingExperience({
                      ...editingExperience,
                      jobDescription: e.target.value,
                    })
                  }
                  className="p-2 border-2 border-gray-400 rounded w-full mt-2 h-32"
                />
              </div>

              <button
                type="button"
                onClick={addExperience}
                className="custom-gradient text-white px-3 rounded w-min py-2 mt-2"
              >
                {editingExperience.index !== null ? "Update" : "Add"}
              </button>

              {experienceError && (
                <p className="text-red-500 text-sm mt-1">
                  All fields are required.
                </p>
              )}

              <div className="mt-3 space-y-2">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="p-3 border rounded bg-purple-100 relative"
                  >
                    <strong>{exp.jobTitle || <em>No Title</em>}</strong>
                    <p>
                      <b>Company:</b> {exp.company || <em>None</em>}
                    </p>
                    <p>
                      <b>Start Date:</b> {exp.startDate || <em>None</em>}
                    </p>
                    <p>
                      <b>End Date:</b> {exp.endDate || <em>None</em>}
                    </p>
                    <p>
                      <b>Description:</b> {exp.jobDescription || <em>None</em>}
                    </p>

                    <button
                      className="absolute top-2  text-red-500 right-4"
                      onClick={() =>
                        deleteItem(index, setExperience, experience)
                      }
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio  */}

            <div>
              <h2 className="font-semibold text-xl mb-3">Portfolio</h2>

              <div className="w-full flex justify-between max-[900px]:block">
                <div className="w-[45%] max-[900px]:w-[70%] max-[500px]:w-full">
                  <label className="font-medium">Project Name</label>
                  <input
                    value={editingProject.projectName}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        projectName: e.target.value,
                      })
                    }
                    className="border-gray-400 border-2 rounded p-2 w-full mt-2"
                  />
                </div>

                <div className="w-[45%] max-[900px]:w-[70%] max-[500px]:w-full">
                  <label className="font-medium">Project Link</label>
                  <input
                    value={editingProject.projectLink}
                    onChange={(e) =>
                      setEditingProject({
                        ...editingProject,
                        projectLink: e.target.value,
                      })
                    }
                    className="border-gray-400 border-2 rounded p-2 w-full mt-2"
                  />
                </div>
              </div>

              <div className="w-full mt-2">
                <label className="font-medium">Project Description</label>
                <textarea
                  value={editingProject.projectDescription}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      projectDescription: e.target.value,
                    })
                  }
                  className="p-2 border-2 border-gray-400 rounded w-full mt-2 h-32"
                />
              </div>

              <button
                type="button"
                onClick={addProject}
                className="custom-gradient text-white px-3 rounded w-min py-2 mt-2"
              >
                {editingProject.index !== null ? "Update" : "Add"}
              </button>

              {projectError && (
                <p className="text-red-500 text-sm mt-1">
                  All fields are required.
                </p>
              )}

              <div className="mt-3 space-y-2">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="p-3 border rounded bg-purple-100 relative"
                  >
                    <strong>{project.projectName || <em>No Name</em>}</strong>
                    <p>
                      <b>Link:</b> {project.projectLink || <em>No Link</em>}
                    </p>
                    <p>
                      <b>Description:</b>{" "}
                      {project.projectDescription || <em>No Description</em>}
                    </p>
                    <button
                      className="absolute top-2 text-red-500 right-4"
                      onClick={() => deleteItem(index, setProjects, projects)}
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
  );
};

export default EditForm;
