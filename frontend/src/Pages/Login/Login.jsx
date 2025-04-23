import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/Images/login.png";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import "./Login.css";
import { BsBarChartLineFill } from "react-icons/bs";
import { BsQuote } from "react-icons/bs";

import { UserAuthContext } from "../../Contexts/AuthContext";
const Login = () => {
  const [choice, setChoice] = useState("jobseeker");
  const handleChoice = (c, event) => {
    event.preventDefault();
    if (c != choice) {
      if (choice == "jobseeker") setChoice("company");
      else {
        setChoice("jobseeker");
      }
    }
  };

  let { callLoginApi, loading, error } = useContext(UserAuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let formData = {
      ...data,
      userType: choice,
    };

    callLoginApi(formData);

    // console.log(error)
  };
  return (
    <div className="flex justify-between items-center w-full h-full bgLinear overflow-x-hidden rounded-[20px] sm:px-3 px-2">
      <div className="hidden lg:block left w-[50%] pt-5 px-10">
        <div className="w-full flex items-center justify-center mt-[40px] relative">
          {/* Image Section */}
          <div className="h-[600px] w-[400px] relative">
            <img src={loginImg} alt="" className="h-full object-contain" />
            {/* Stats Box */}
            <div className="absolute top-[20px] -left-[20px] xl:-left-[50px] bg-white shadow-md rounded-xl px-6 py-3 flex flex-col ">
              <BsBarChartLineFill className="text-blue-600 text-5xl mb-2" />
              <div className="text-indigo-600 font-bold text-xl">100K+</div>
              <div className="text-gray-500 text-sm ">People got hired</div>
            </div>

            {/* Testimonial Box */}
            <div className="absolute bottom-[40px] right-[-50px] bg-white shadow-xl rounded-xl p-4 w-[250px]">
              <div className=" flex items-center gap-3 mb-2">
                <div>
                  <p className="text-md font-semibold mb-0.5">Adam Sandler</p>
                  <p className="text-sm text-gray-500">
                    Lead Engineer at Canva
                  </p>
                </div>
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg" // Update this with the correct path to your testimonial image
                  alt="Adam"
                  className="absolute right-[20px] w-15 h-15 rounded-full border-8 border-white -top-[30px]"
                />
              </div>
              <div className="flex">
                <BsQuote className="text-7xl text-blue-600 h-full top-0 mx-2" />
                <p className=" flex text-md text-gray-700 italic">
                  “Great platform for the job seeker that searching for new
                  career heights.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right w-[100%] lg:w-[50%] mb-14 lg:mb-[0px] pt-14 flex items-center justify-center">
        <div className="max-w-[440px] w-full p-5 sm:px-6 px-4 rounded-2xl h-full bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="choice w-full flex justify-center gap-1.5">
              <button
                className={` ${
                  choice == "jobseeker" && "bgLinearBtn text-white"
                } cursor-pointer px-1.5 sm:px-3 text-sm sm:text-md py-2 border border-gray-300 `}
                onClick={(event) => handleChoice("jobseeker", event)}
              >
                Job Seeker
              </button>
              <button
                className={` ${
                  choice == "company" && "bgLinearBtn text-white"
                } cursor-pointer px-1.5 sm:px-3 text-sm sm:text-md py-2 border border-gray-300 `}
                onClick={(event) => handleChoice("company", event)}
              >
                Company
              </button>
            </div>
            <h2 className="text-center text-3xl mt-5 md:mt-10 font-medium max-[450px]:text-2xl max-[450]:mt-0 max-[360px]:text-xl">
              Welcome Back, Dude
            </h2>

            <div className="flex flex-col gap-4 md:mt-7 mt-5">
              <div>
                <div className="-mt-3 mb-2 block">
                  <Label htmlFor="email" className="sm:text-[14px] text-[13px]">Email Address</Label>
                </div>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="name@hirehunar.com"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <div className="-mt-3  mb-2 block">
                  <Label htmlFor="password" className="sm:text-[14px] text-[13px]">Password</Label>
                </div>
                <TextInput
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  {...register("password", { required: true })}
                />
              </div>

              <Button
                type="submit"
                className="bg-black cursor-pointer hover:bg-gray-950 mt-1 max-[450px]:-mt-1"
              >
                {loading ? "Logging In" : "Login"}
              </Button>
              <span className="-mt-1 sm:mt-2  sm:text-sm text-xs mb-2">
                Don't have an account?{" "}
                <Link to={"/register"} className="textLinear font-semibold">
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
