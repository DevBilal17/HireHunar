import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/Images/login.png";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import "./Login.css";
const Login = () => {
  const [choice, setChoice] = useState("Job Seeker");
  const handleChoice = (c) => {
    if (c != choice) {
      if (choice == "Job Seeker") setChoice("Company");
      else {
        setChoice("Job Seeker");
      }
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let formData = {
      userChoice: choice,
      ...data,
    };
    console.log(formData);
  };
  return (
    <div className="flex justify-between items-center w-full h-full bgLinear overflow-x-hidden rounded-[20px]">
      <div className="left w-[50%] pt-5 px-10">
        <div className="w-full flex items-center justify-center mt-[100px]">
          <div className="h-[600px] w-[400px]">
            <img src={loginImg} alt="" className="h-full object-contain" />
          </div>
        </div>
      </div>
      <div className="right w-[50%]  pt-14 flex items-center justify-center">
        <div className="max-w-[440px] w-full p-5 px-6 rounded-2xl h-[480px] bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="choice w-full flex justify-center gap-1.5">
              <button
                className={` ${
                  choice == "Job Seeker" && "bgLinearBtn text-white"
                } cursor-pointer px-3 py-2 border border-gray-300 `}
                onClick={() => handleChoice("Job Seeker")}
              >
                Job Seeker
              </button>
              <button
                className={` ${
                  choice == "Company" && "bgLinearBtn text-white"
                } cursor-pointer px-3 py-2 border border-gray-300 `}
                onClick={() => handleChoice("Company")}
              >
                Company
              </button>
            </div>
            <h2 className="text-center text-3xl mt-6 font-semibold">
              Welcome Back, Dude
            </h2>
            {/* <Link className="flex items-center gap-2 w-full justify-center py-3 border mt-5">
              <FcGoogle />
              <span>Login with Google</span>
            </Link>
            <div className="or text-center mt-4  text-gray-400 text-[13px]">
              Or login with email
            </div> */}
            <div className="flex flex-col gap-4 mt-7">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email">Email Address</Label>
                </div>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="name@hirehunar.com"
                  {...register("Email Address", { required: true })}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password">Password</Label>
                </div>
                <TextInput
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  {...register("Password", { required: true })}
                />
              </div>
              {/* <div className="flex items-center gap-2">
                <Checkbox id="remember" {...register("Remember Me")} />
                <Label htmlFor="remember">Remember me</Label>
              </div> */}
              <Button
                type="submit"
                className="bg-black cursor-pointer hover:bg-gray-950 mt-2.5"
              >
                Login
              </Button>
              <span className="mt-2">
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
