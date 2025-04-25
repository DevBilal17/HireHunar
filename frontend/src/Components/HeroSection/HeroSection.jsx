import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaLongArrowAltUp } from "react-icons/fa";
import userImg from "../../assets/Images/HeroSection/user.png";
import { BsFillLightningChargeFill } from "react-icons/bs";
import "./HeroSection.css";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <motion.div
      ref={sectionRef}
      className="heroSection flex items-center justify-center p-5 relative max-w-[1500px] mx-auto overflow-hidden"
    >
      <div className="middle max-w-[600px] flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-6xl sm:text-[54px] text-5xl leading-16"
        >
          Modernizing The Job Search Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="pt-3 text-center max-w-[500px] font-normal"
        >
          Search and find your dream job now easier than ever. You can simply
          browse and find a job if you need it.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="md:w-full w-[90%] flex items-center justify-center max-w-[520px] pt-4 gap-2"
        >
          <a
            href="#jobDiscover"
            className="hover:scale-110 transition-all duration-150 px-8 py-3 bg-black text-white cursor-pointer rounded-4xl"
          >
            Search
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="floating1 c-success flex items-center bg-white p-5 rounded-2xl"
      >
        <div className="custom-gradient h-[40px] w-[40px] rounded-full flex overflow-hidden items-center justify-center">
          <img src={userImg} alt="" className="w-[32px]" />
        </div>
        <div className="flex flex-col justify-center ml-2">
          <div className="text-gray-600 text-[12px]">Customer Success</div>
          <div className="font-semibold relative flex items-center">
            7.89%
            <span className="custom-gradient text-white text-[9px] px-1.5 py-0.5 rounded-2xl ml-2 flex items-center">
              50% <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="floating2 j absolute left-[8%] bg-white max-w-[280px] h-[140px] w-full p-5 rounded-2xl"
      >
        <div className="flex items-center gap-2 w-full">
          <div className="custom-gradient h-[40px] w-[40px] rounded-full flex items-center justify-center">
            <FaReact className="i text-2xl text-white" />
          </div>
          <div className="pl-1 w-[80%]">
            <div className="j-post font-semibold flex items-center relative w-full">
              React Developer
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
            <span className="text-gray-500 text-[12px]">Pakistan, Faisalabad</span>
          </span>
          <span className="salary text-[12px] text-gray-500">
            <span className="text-gray-900 text-[14px]">RS:80K</span>/month
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="floating3 max-w-[300px] w-full top-j-categories bg-white p-5 rounded-2xl"
      >
        <h3 className="font-semibold">The Top Categories</h3>
        <div className="h-[130px] flex items-end justify-between">
          <div>
            <div className="flex justify-center items-end text-[11px] upper h-[80px] rounded-t-xl bg-[#CEF0F7] w-[40px]">
              70%
            </div>
            <div className="bottom text-[10px] text-center pt-2 text-gray-600">AI</div>
          </div>
          <div>
            <div className="flex justify-center items-end text-[11px] upper h-[60px] rounded-t-xl bg-[#23CFEE] w-[40px]">
              60%
            </div>
            <div className="bottom text-[10px] text-center pt-2 text-gray-600">UI/UX</div>
          </div>
          <div>
            <div className="flex justify-center items-end text-[11px] upper h-[100px] rounded-t-xl custom-gradient w-[40px]">
              90%
            </div>
            <div className="bottom text-[10px] text-center pt-2 text-gray-600">React</div>
          </div>
          <div>
            <div className="flex justify-center items-end text-[11px] upper h-[90px] rounded-t-xl bg-[#93abd8] w-[40px]">
              80%
            </div>
            <div className="bottom text-[10px] text-center pt-2 text-gray-600">SQL</div>
          </div>
          <div>
            <div className="flex justify-center items-end text-[11px] upper h-[80px] rounded-t-xl bg-[#BDDDE4] w-[40px]">
              70%
            </div>
            <div className="bottom text-[10px] text-center pt-2 text-gray-600">Node</div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="floating4 efficient flex bg-white p-5 items-center rounded-2xl absolute"
      >
        <div className="custom-gradient h-[40px] w-[40px] rounded-full flex items-center justify-center">
          <BsFillLightningChargeFill className="text-white text-[21px]" />
        </div>
        <div className="flex flex-col ml-3 text-[24px]">
          80%
          <span className="text-gray-500 text-[12px]">More Efficient</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
