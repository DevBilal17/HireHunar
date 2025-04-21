import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/Images/login.png";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import "../Login/Login.css";
import { UserAuthContext } from "../../Contexts/AuthContext";
const Register = () => {
  const [choice, setChoice] = useState("jobseeker");
  const handleChoice = (c,event) => {
    event.preventDefault()
    if (c != choice) {
      if (choice == "jobseeker") setChoice("company");
      else {
        setChoice("jobseeker");
      }
    }
  };

  let {callSignUpApi, loading, error} = useContext(UserAuthContext)
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
     
    callSignUpApi(formData);

    // console.log(error)
    
  };
  return (
    <div className="flex justify-between  items-center w-full h-full bgLinear overflow-x-hidden rounded-[20px]">
      <div className="left w-[50%] pt-5 px-10">
        <div className="w-full flex  justify-center mt-[100px]">
          <div className="h-[600px] w-[400px]">
            <img src={loginImg} alt="" className="h-full object-contain" />
          </div>
        </div>
      </div>
      <div className="right w-[50%]  pt-10 flex items-center justify-center">
        <div className="max-w-[440px] w-full p-5 px-6 rounded-2xl h-[550px] bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="choice w-full flex justify-center gap-1.5">
              <button
              type="button"
                className={` ${
                  choice == "jobseeker" && "bgLinearBtn text-white"
                } cursor-pointer px-3 py-2 border border-gray-300 `}
                onClick={(event) => handleChoice("jobseeker", event)}
              >
                Job Seeker
              </button>
              <button
              type="button"
                className={` ${
                  choice == "company" && "bgLinearBtn text-white"
                } cursor-pointer px-3 py-2 border border-gray-300`}
                onClick={(event) => handleChoice("company", event)}
              >
                Company
              </button>
            </div>
            <h2 className="text-center text-3xl mt-5 font-semibold">
              Get more opportunities
            </h2>
            {/* <Link className="flex items-center gap-2 w-full justify-center py-3 border mt-5">
              <FcGoogle />
              <span>Login with Google</span>
            </Link>
            <div className="or text-center mt-4  text-gray-400 text-[13px]">
              Or signup with email
            </div> */}
            <div className="flex flex-col gap-4 mt-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name">Full Name</Label>
                </div>
                <TextInput
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email">Email Address</Label>
                </div>
                <TextInput
                  id="email"
                  type="email"
                  placeholder="name@hirehunar.com"
                  {...register("email", { required: true })}
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
                  {...register("password", { required: true })}
                />
              </div>
              {/* <div className="flex items-center gap-2">
                <Checkbox id="remember" {...register("Remember Me")} />
                <Label htmlFor="remember">Remember me</Label>
              </div> */}
              <Button
                type="submit"
                className="bg-black cursor-pointer hover:bg-gray-950 mt-3"
              >
                {loading?'Signing Up':'SignUp'}
              </Button>
              <span className="mt-0">
                Already have an account?{" "}
                <Link to={"/login"} className="textLinear font-semibold">
                  Log In
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
