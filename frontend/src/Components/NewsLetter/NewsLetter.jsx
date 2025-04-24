import React from 'react'
import { FiBookmark, FiMapPin } from "react-icons/fi"; // Outline
import { BsBookmarkFill } from "react-icons/bs"; // Filled
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { SiCanva } from "react-icons/si";
import { FaBookmark, FaPinterest, FaReact } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaNodeJs } from "react-icons/fa";
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <section className=" text-gray-900 px-6 md:px-16 py-16 rounded-[30px] bgHero  relative">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
          Transforming the Way <br /> you <span className="text-black">Find Jobs</span>
        </h2>
        <p className="text-gray-700 text-sm md:text-base mt-4">
          Stop searching, start discovering. Let the ideal job come to you.
        </p>

        {/* Email Input with Button */}
        <form className="mt-6">
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your mail"
              className="w-full pl-4 pr-32 py-3 rounded-full bg-white focus:outline-none text-sm shadow-md"
            />
            <button
              type="submit"
              className="absolute cursor-pointer right-1 top-1 bottom-1 bg-black text-white px-6 rounded-full hover:bg-gray-800 transition text-sm"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Job Cards - Only shown on md and larger screens */}
      <div className="hidden lg:block">
        {/* Job Card 1 */}
        <div className="news absolute -top-5 border-[1px] border-gray-300 right-[5%] bg-white max-w-[290px] h-[140px] w-full p-5 rounded-2xl">
                <div className="flex items-center gap-2 w-full">
                  <div className="custom-gradient h-[40px] w-[40px] rounded-full flex items-center justify-center">
                    <FaReact className="i text-2xl text-white" />
                  </div>
                  <div className="pl-1  w-[80%]">
                    <div className="j-post font-semibold flex items-center relative w-full">
                      React Developer
                      {/* <span className="save-logo absolute right-0">
                        <FaBookmark className="text-pink-500" />
                      </span> */}
                    </div>
                    <div className="company font-normal text-gray-500 text-[13px]">
                      Logico
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="border-[1px] border-gray-300 px-2 py-1 text-[10px] rounded-3xl text-gray-500">
                    Full Time
                  </span>
                  <span className="border-[1px] border-gray-300 px-2 py-1 text-[10px] rounded-3xl text-gray-500 ml-2">
                    Remote
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="location flex items-center gap-1.5">
                    <FiMapPin className="text-gray-500 text-[15px]" />
                    <span className="text-gray-500 text-[12px]">
                      Pakistan, Faisalabad
                    </span>
                  </span>
                  <sapn className="salary text-[12px] text-gray-500">
                    <span className="text-gray-900 font-semibold text-[15px]">RS:80K</span>
                    /month
                  </sapn>
                </div>
              </div>

        {/* Job Card 2 */}
        <div className="news absolute bottom-8 border-[1px] border-gray-300 right-[20%] bg-white max-w-[290px] h-[140px] w-full p-5 rounded-2xl">
                <div className="flex items-center gap-2 w-full">
                  <div className="custom-gradient h-[40px] w-[40px] rounded-full flex items-center justify-center">
                    <FaNodeJs className="i text-2xl text-white" />
                  </div>
                  <div className="pl-1  w-[80%]">
                    <div className="j-post font-semibold flex items-center relative w-full">
                      Backend Developer
                      {/* <span className="save-logo absolute right-0">
                        <FaBookmark className="text-pink-500" />
                      </span> */}
                    </div>
                    <div className="company font-normal text-gray-500 text-[13px]">
                      TechHub
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="border-[1px] border-gray-300 px-2 py-1 text-[10px] rounded-3xl text-gray-500">
                    Full Time
                  </span>
                  <span className="border-[1px] border-gray-300 px-2 py-1 text-[10px] rounded-3xl text-gray-500 ml-2">
                    Remote
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="location flex items-center gap-1.5">
                    <FiMapPin className="text-gray-500 text-[15px]" />
                    <span className="text-gray-500 text-[12px]">
                      Pakistan, Lahore
                    </span>
                  </span>
                  <sapn className="salary text-[12px] text-gray-500">
                    <span className="text-gray-900 font-semibold text-[15px]">RS:40K</span>
                    /month
                  </sapn>
                </div>
              </div>
      </div>
    </section>
  )
}

export default NewsLetter
