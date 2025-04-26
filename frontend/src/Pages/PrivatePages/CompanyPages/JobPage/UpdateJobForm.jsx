import { useForm } from "react-hook-form";
import React, { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";

import { useLocation } from "react-router-dom";
import { JobApiData } from "../../../../Contexts/JobApiContext";

const UpdateJobForm = () => {

  let {updateJobByID} = useContext(JobApiData)
  const location = useLocation();
  const jobData = location.state;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [requiredSkills, setSkills] = useState(jobData?.requiredSkills || []);
  const [currentSkill, setCurrentSkill] = useState("");
  const [skillError, setSkillError] = useState(false);


  const [categories, setCategories] = useState(jobData?.categories || []);
  const [currentCategory, setCurrentCategory] = useState("");
  const [categoryError, setCategoryError] = useState(false);

  const [niceToHaves, setNiceToHaves] = useState( jobData?.niceToHaves || []);
  const [currentNice, setCurrentNice] = useState("");
  const [niceError, setNiceError] = useState(false);

  const [perksAndBenefits, setPerks] = useState(jobData?.perksAndBenefits || []);
  const [editingPerk, setEditingPerk] = useState({
    index: null,
    title: "",
    description: "",
  });
  const [perkError, setPerkError] = useState(false);

  const addItem = (value, setValue, list, setList, setError) => {
    if (!value.trim()) {
      setError(true);
      return;
    }
    setError(false);
    setList([...list, value]);
    setValue("");
  };

  const addPerk = () => {
    if (!editingPerk.title && !editingPerk.description) {
      setPerkError(true);
      return;
    }
    setPerkError(false);
    if (editingPerk.index !== null) {
      const updated = [...perksAndBenefits];
      updated[editingPerk.index] = {
        title: editingPerk.title,
        description: editingPerk.description,
      };
      setPerks(updated);
    } else {
      setPerks([
        ...perksAndBenefits,
        { title: editingPerk.title, description: editingPerk.description },
      ]);
    }
    setEditingPerk({ index: null, title: "", description: "" });
  };

  const deleteItem = (index, setFn, list) => {
    const updated = [...list];
    updated.splice(index, 1);
    setFn(updated);
  };

  const onSubmit = (data) => {
    if (
      !requiredSkills.length ||
      !categories.length ||
      !niceToHaves.length ||
      !perksAndBenefits.length
    ) {
      alert("Please add at least one skill, category, perk, and nice-to-have!");
      return;
    }

    let formData = {...data,requiredSkills,
      categories,
      niceToHaves,
      perksAndBenefits,}
     
      

      updateJobByID(jobData.jobId,formData)
  };

  return (
    <div className="flex bg-gray-100">
      <div className="p-4 md:p-10 m-5 w-full rounded-3xl bg-white flex shadow justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-[90%]">
          <div className="grid  gap-4">
            <div className="flex justify-between max-[900px]:block">
              <div className="w-[45%] max-[900px]:w-[70%] max-[700px]:w-[80%] max-[500px]:w-full">
                <label className="text-md font-semibold" htmlFor="Job Title">
                  Job Title
                </label>
                <p className="text-sm text-gray-600">
                  Job Title must describe one position
                </p>
                <input
                  placeholder="e.g Software Engineer"
                  defaultValue={jobData.jobTitle}
                  {...register("jobTitle", { required: true })}
                  className="p-2 border-2 border-gray-400 rounded w-full mt-2 text-sm"
                />
              </div>
              <div className="w-[45%] max-[900px]:w-[70%] max-[900px]:mt-4 max-[700px]:w-[80%] max-[500px]:w-full">
                <label className="text-md font-semibold" htmlFor="Location">
                  Location
                </label>
                <p className="text-sm text-gray-600">Location of the Job</p>
                <input
                  list="browsers"
                  name="browser"
                  id="browser"
                  defaultValue={jobData.jobLocation}
                  placeholder="Location"
                  {...register("jobLocation", { required: true })}
                  className="border-2 border-gray-400 p-2 rounded w-full text-sm mt-2"
                />
                <datalist id="browsers">
                  <option value="Lahore" />
                  <option value="Faisalabad" />
                  <option value="Islamabad" />
                  <option value="Karachi" />
                  <option value="Multan" />
                  <option value="Pehsawar" />
                </datalist>
              </div>
            </div>
            <div className="flex justify-between max-[900px]:block">
              <div className="w-[45%] max-[900px]:w-[70%] max-[700px]:w-[80%] max-[500px]:w-full">
                <label className="text-md font-semibold" htmlFor="Job Title">
                  Salary
                </label>
                <p className="text-sm text-gray-600">Provide Salary in RS(k)</p>
                <div className="flex justify-between w-[80%]  max-[900px]:w-full">
                  <input
                    placeholder="e.g 23"
                    defaultValue={jobData.salary}
                    {...register("salary", { required: true })}
                    className="p-2 border-2 border-gray-400 rounded w-[45%] mt-2 text-sm"
                  />
                 
                </div>
              </div>
              <div className="w-[45%] max-[900px]:w-[70%] max-[900px]:mt-4 max-[700px]:w-[80%] max-[500px]:w-full">
                <label className="text-md font-semibold" htmlFor="Job Title">
                  Apply Time
                </label>
                <p className="text-sm text-gray-600">Last date to Apply</p>
                <input
                 defaultValue={jobData.applyBefore}
                  type="date"
                  {...register("applyBefore", { required: true })}
                  className="p-2 border-2 border-gray-400 rounded w-[80%] mt-2 text-sm max-[900px]:w-full"
                />
              </div>
            </div>

            <div>
              <div>
                <label className="font-medium" htmlFor="Job Description">
                  Job Description
                </label>
                <textarea
                  placeholder="Job Description"
                  defaultValue={jobData.jobDescription}
                  {...register("jobDescription", { required: true })}
                  className="p-2 border-2 border-gray-400 rounded w-full h-32 mt-2"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between max-[900px]:block">
              
              <div className="w-[45%] max-[900px]:w-[70%] max-[700px]:w-[80%] max-[500px]:w-full">
                <label className="text-md font-semibold">Skills</label>
                <p className="text-sm text-gray-600">
                  Skills for Applicant need
                </p>
                <div className="flex gap-2 mt-2">
                  <input
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                    className={`border-gray-400 border-2 rounded p-2 w-full ${
                      skillError ? "border-red-500" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      addItem(
                        currentSkill,
                        setCurrentSkill,
                        requiredSkills,
                        setSkills,
                        setSkillError
                      )
                    }
                    className="custom-gradient cursor-pointer text-white px-3 rounded"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {requiredSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 px-3 py-1 rounded-full"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => deleteItem(i, setSkills, requiredSkills)}
                        className="ml-2 text-red-500"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              </div>

            
              <div className="w-[45%] max-[900px]:w-[70%] max-[700px]:w-[80%] max-[500px]:w-full">
                <label className="font-semibold text-md">Categories</label>
                <p className="text-sm text-gray-600">Categories for Job</p>
                <div className="flex gap-2 mt-2">
                  <input
                    list="browsers"
                    name="browser"
                    id="browser"
                    value={currentCategory}
                    onChange={(e) => setCurrentCategory(e.target.value)}
                    className={`border-gray-400 border-2 rounded p-2 w-full ${
                      categoryError ? "border-red-500" : ""
                    }`}
                  />
                  <datalist id="browsers">
                    <option value="Lahore" />
                    <option value="Faisalabad" />
                    <option value="Islamabad" />
                    <option value="Karachi" />
                    <option value="Multan" />
                    <option value="Pehsawar" />
                  </datalist>
                  <button
                    type="button"
                    onClick={() =>
                      addItem(
                        currentCategory,
                        setCurrentCategory,
                        categories,
                        setCategories,
                        setCategoryError
                      )
                    }
                    className="custom-gradient cursor-pointer text-white px-3 rounded "
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {categories.map((cat, i) => (
                    <span
                      key={i}
                      className="bg-green-100 px-3 py-1 rounded-full"
                    >
                      {cat}
                      <button
                        type="button"
                        onClick={() => deleteItem(i, setCategories, categories)}
                        className="ml-2 text-red-500"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
        
            <div>
              <label className="font-medium">Nice To Haves</label>
              <div className="flex gap-2 mt-2">
                <input
                  value={currentNice}
                  onChange={(e) => setCurrentNice(e.target.value)}
                  className={`border-gray-400 border-2 rounded p-2 w-full ${
                    niceError ? "border-red-500" : ""
                  }`}
                />
                <button
                  type="button"
                  onClick={() =>
                    addItem(
                      currentNice,
                      setCurrentNice,
                      niceToHaves,
                      setNiceToHaves,
                      setNiceError
                    )
                  }
                  className="custom-gradient cursor-pointer text-white px-3 rounded"
                >
                  Add
                </button>
              </div>
              <ul className="list-disc list-inside mt-2">
                {niceToHaves.map((n, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center bg-yellow-100 px-3 py-1 rounded my-1"
                  >
                    {n}
                    <button
                      onClick={() => deleteItem(i, setNiceToHaves, niceToHaves)}
                      className="text-red-500"
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
            <label className="font-medium ">Job Type</label>
              <select
                name="jobType"
                {...register("jobType", { required: true })}
                defaultValue={jobData.jobType}
                className="border-gray-400 border-2 mt-2 rounded p-2 w-full outline-gray-400"
              >
                <option value={'Full-Time'}>Full-Time</option>
                <option value={'Part-Time'}>Part-Time</option> 
                <option value={'Internship'}>Internship</option>
                <option value={'Contract'}>Contract</option>  
              </select>
            </div>

            {/* Perks */}
            <div className="">
              <h2 className="font-semibold text-xl mb-3 ">Perks & Benefits</h2>
              <div className="grid gap-2 ">
                <div>
                  <label className="font-medium">Perk Title</label>
                  <div className="flex gap-2 w-[45%] max-[900px]:w-[70%] max-[700px]:w-[80%] max-[500px]:w-full">
                    <input
                      value={editingPerk.title}
                      onChange={(e) =>
                        setEditingPerk({
                          ...editingPerk,
                          title: e.target.value,
                        })
                      }
                      placeholder="Perk Title"
                      className="border-gray-400 border-2 rounded p-2 w-full mt-2"
                    />
                    
                  </div>
                </div>
                <div>
                  <label className="font-medium">Perk Description</label>
                  <textarea
                    placeholder="Perk Description"
                    value={editingPerk.description}
                    onChange={(e) =>
                      setEditingPerk({
                        ...editingPerk,
                        description: e.target.value,
                      })
                    }
                    className="p-2 border-2 border-gray-400 rounded w-full h-32 mt-2"
                  />
                  <button
                      type="button"
                      onClick={addPerk}
                      className="custom-gradient cursor-pointer text-white px-3 py-2 rounded mt-2"
                    >
                      {editingPerk.index !== null ? "Update" : "Add"}
                    </button>
                </div>
              </div>

              {perkError && (
                <p className="text-red-500 text-sm mt-1">
                  Perk must have title or description.
                </p>
              )}
              <div className="mt-3 space-y-2">
                {perksAndBenefits.map((perk, index) => (
                  <div
                    key={index}
                    className="p-3 border rounded bg-purple-100 relative"
                  >
                    <strong>{perk.title || <em>No Title</em>}</strong>
                    <p>{perk.description || <em>No Description</em>}</p>
                    <button
                      className="absolute top-2 right-2 text-red-500"
                      onClick={() => deleteItem(index, setPerks, perksAndBenefits)}
                    >
                      <RxCross2 size={16} />
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
                Update Job
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateJobForm;
