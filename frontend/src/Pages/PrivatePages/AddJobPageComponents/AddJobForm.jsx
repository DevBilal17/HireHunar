import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
// import { X } from "lucide-react";
const AddJobForm = () => {
    const {
        register,
        handleSubmit,
        control,
        setValue,
        getValues,
        resetField,
        formState: { errors },
      } = useForm({
        defaultValues: {
          title: "",
          company: "",
          location: "",
          jobType: "Full-Time",
          salary: "",
          description: "",
          responsibilities: [""],
          perks: [],
          skills: [],
          categories: [],
          applyBy: "",
        },
      });
    
      const { fields: perkFields, append: appendPerk, remove: removePerk } = useFieldArray({
        control,
        name: "perks",
      });
    
      const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
        control,
        name: "skills",
      });
    
      const { fields: categoryFields, append: appendCategory, remove: removeCategory } = useFieldArray({
        control,
        name: "categories",
      });
    
      const onSubmit = (data) => {
        console.log("Form Submitted:", data);
      };
  return (
    // <div className="p-4 md:p-10 max-w-4xl mx-auto">
    //   <h1 className="text-3xl font-bold mb-6 text-center">Post a Job</h1>
    //   <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
    //     {/* General Information */}
    //     <div className="grid md:grid-cols-2 gap-4">
    //       <input
    //         {...register("title", { required: "Job Title is required" })}
    //         placeholder="Job Title"
    //         className="p-2 border rounded w-full"
    //       />
    //       {errors.title && <p className="text-red-500">{errors.title.message}</p>}

    //       <input
    //         {...register("location", { required: "Location is required" })}
    //         placeholder="Location"
    //         className="p-2 border rounded w-full"
    //       />
    //       {errors.location && <p className="text-red-500">{errors.location.message}</p>}

    //       <input
    //         {...register("salary", { required: "Salary is required" })}
    //         placeholder="Salary Range"
    //         className="p-2 border rounded w-full"
    //       />
    //       {errors.salary && <p className="text-red-500">{errors.salary.message}</p>}
    //     </div>

    //     <textarea
    //       {...register("description", { required: "Job Description is required" })}
    //       placeholder="Job Description"
    //       className="p-2 border rounded w-full h-32"
    //     />
    //     {errors.description && <p className="text-red-500">{errors.description.message}</p>}

    //     {/* Perks */}
    //     <div>
    //       <h2 className="font-semibold">Perks & Benefits</h2>
    //       <div className="flex gap-2 mt-2">
    //         <input
    //           type="text"
    //           placeholder="Perk Title"
    //           {...register("perkTitle", { required: false })}
    //           className="p-2 border rounded w-full"
    //         />
    //         <button
    //           type="button"
    //           onClick={() => {
    //             appendPerk({ title: getValues("perkTitle") });
    //             resetField("perkTitle");
    //           }}
    //           className="bg-blue-500 text-white px-4 py-1 rounded"
    //         >
    //           Add
    //         </button>
    //       </div>
    //       <ul className="mt-4 space-y-2">
    //         {perkFields.map((perk, index) => (
    //           <li key={perk.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
    //             <span>{perk.title}</span>
    //             <button
    //               type="button"
    //               className="text-red-500"
    //               onClick={() => removePerk(index)}
    //             >
    //               ✕
    //             </button>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>

    //     {/* Skills */}
    //     <div>
    //       <h2 className="font-semibold">Skills</h2>
    //       <div className="flex gap-2 mt-2">
    //         <input
    //           type="text"
    //           placeholder="Skill"
    //           {...register("skillInput")}
    //           className="p-2 border rounded w-full"
    //         />
    //         <button
    //           type="button"
    //           onClick={() => {
    //             appendSkill({ name: getValues("skillInput") });
    //             resetField("skillInput");
    //           }}
    //           className="bg-blue-500 text-white px-4 py-1 rounded"
    //         >
    //           Add
    //         </button>
    //       </div>
    //       <div className="flex flex-wrap gap-2 mt-4">
    //         {skillFields.map((skill, index) => (
    //           <span
    //             key={skill.id}
    //             className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
    //           >
    //             {skill.name}
    //             <button
    //               type="button"
    //               className="ml-2 text-red-500"
    //               onClick={() => removeSkill(index)}
    //             >
    //               ✕
    //             </button>
    //           </span>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Categories */}
    //     <div>
    //       <h2 className="font-semibold">Categories</h2>
    //       <div className="flex gap-2 mt-2">
    //         <input
    //           type="text"
    //           placeholder="Category"
    //           {...register("categoryInput")}
    //           className="p-2 border rounded w-full"
    //         />
    //         <button
    //           type="button"
    //           onClick={() => {
    //             appendCategory({ name: getValues("categoryInput") });
    //             resetField("categoryInput");
    //           }}
    //           className="bg-green-500 text-white px-4 py-1 rounded"
    //         >
    //           Add
    //         </button>
    //       </div>
    //       <div className="flex flex-wrap gap-2 mt-4">
    //         {categoryFields.map((category, index) => (
    //           <span
    //             key={category.id}
    //             className="bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center"
    //           >
    //             {category.name}
    //             <button
    //               type="button"
    //               className="ml-2 text-red-500"
    //               onClick={() => removeCategory(index)}
    //             >
    //               ✕
    //             </button>
    //           </span>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Job Type and Apply By */}
    //     <div className="grid md:grid-cols-2 gap-4">
    //       <input
    //         type="date"
    //         {...register("applyBy", { required: "Application deadline is required" })}
    //         className="p-2 border rounded w-full"
    //       />
    //       <select
    //         {...register("jobType", { required: "Job type is required" })}
    //         className="p-2 border rounded w-full"
    //       >
    //         <option value="Full-Time">Full-Time</option>
    //         <option value="Part-Time">Part-Time</option>
    //         <option value="Internship">Internship</option>
    //         <option value="Contract">Contract</option>
    //       </select>
    //     </div>

    //     <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    //       Post Job
    //     </button>
    //   </form>
    // </div>

    <div className="p-4 md:p-10 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-6 text-center">Post a Job</h1>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* General Information */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          {...register("title", { required: "Job Title is required" })}
          placeholder="Job Title"
          className="p-2 border rounded w-full"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <input
          {...register("location", { required: "Location is required" })}
          placeholder="Location"
          className="p-2 border rounded w-full"
        />
        {errors.location && <p className="text-red-500">{errors.location.message}</p>}

        <input
          {...register("salary", { required: "Salary is required" })}
          placeholder="Salary Range"
          className="p-2 border rounded w-full"
        />
        {errors.salary && <p className="text-red-500">{errors.salary.message}</p>}
      </div>

      <textarea
        {...register("description", { required: "Job Description is required" })}
        placeholder="Job Description"
        className="p-2 border rounded w-full h-32"
      />
      {errors.description && <p className="text-red-500">{errors.description.message}</p>}

      {/* Perks */}
      <div>
        <h2 className="font-semibold">Perks & Benefits</h2>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            placeholder="Perk Title"
            {...register("perkTitle", { required: false })}
            className="p-2 border rounded w-full"
          />
          <button
            type="button"
            onClick={() => {
              appendPerk({ title: getValues("perkTitle") });
              resetField("perkTitle");
            }}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Add
          </button>
        </div>
        <ul className="mt-4 space-y-2">
          {perkFields.map((perk, index) => (
            <li key={perk.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
              <span>{perk.title}</span>
              <button
                type="button"
                className="text-red-500"
                onClick={() => removePerk(index)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div>
        <h2 className="font-semibold">Skills</h2>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            placeholder="Skill"
            {...register("skillInput")}
            className="p-2 border rounded w-full"
          />
          <button
            type="button"
            onClick={() => {
              appendSkill({ name: getValues("skillInput") });
              resetField("skillInput");
            }}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {skillFields.map((skill, index) => (
            <span
              key={skill.id}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center"
            >
              {skill.name}
              <button
                type="button"
                className="ml-2 text-red-500"
                onClick={() => removeSkill(index)}
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h2 className="font-semibold">Categories</h2>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            placeholder="Category"
            {...register("categoryInput")}
            className="p-2 border rounded w-full"
          />
          <button
            type="button"
            onClick={() => {
              appendCategory({ name: getValues("categoryInput") });
              resetField("categoryInput");
            }}
            className="bg-green-500 text-white px-4 py-1 rounded"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {categoryFields.map((category, index) => (
            <span
              key={category.id}
              className="bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center"
            >
              {category.name}
              <button
                type="button"
                className="ml-2 text-red-500"
                onClick={() => removeCategory(index)}
              >
                ✕
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Job Type and Apply By */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="date"
          {...register("applyBy", { required: "Application deadline is required" })}
          className="p-2 border rounded w-full"
        />
        <select
          {...register("jobType", { required: "Job type is required" })}
          className="p-2 border rounded w-full"
        >
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Post Job
      </button>
    </form>
  </div>
  )
}

export default AddJobForm
