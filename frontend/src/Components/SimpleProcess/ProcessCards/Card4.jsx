import React from "react";
import { RiUserFollowLine } from "react-icons/ri";
import CardContent from "./CardContent";
import userImg from "../../../assets/Images/HeroSection/user.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Card4 = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <motion.div
      ref={sectionRef}
      className="flex items-center w-full md:h-[500px] h-[300px] gap-4 relative"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
        className="w-[50%] bg-[#F8FAFB] rounded-2xl h-[95%] p-4 md:flex hidden items-center justify-center"
      >
        <div className="relative max-w-[400px] flex items-center justify-center w-full h-[400px] rounded-full border-[1px] border-gray-300">
          <div className="max-w-[260px] flex items-center justify-center w-full h-[260px] rounded-full border-[1px] border-gray-300">
            <div className="max-w-[100px] w-full h-[100px] rounded-full border-[1px] p-3 border-gray-300 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: inView ? 1.4 : 0, duration: 0.6 }}
                className="users absolute bg-gray-300 h-[110px] grayscale-75 w-[110px] flex overflow-hidden items-center justify-center rounded-full -left-10 border-[1px] border-white"
              >
                <img src={userImg} alt="" className="w-[80px]" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ delay: inView ? 1 : 0, duration: 0.6 }}
                className="users absolute bg-gray-300 h-[130px] grayscale-75 w-[130px] flex overflow-hidden items-center justify-center rounded-full z-10 left-8 border-[1px] border-white"
              >
                <img src={userImg} alt="" className="w-[80px]" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: inView ? 0.6 : 0, duration: 0.6 }}
                className="users custom-gradient absolute bg-gray-300 h-[170px] w-[170px] flex overflow-hidden items-center justify-center rounded-full border-[1px] border-white z-20 p-5"
              >
                <img src={userImg} alt="" className="w-[90%]" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ delay: inView ? 1 : 0, duration: 0.6 }}
                className="users absolute bg-gray-300 h-[130px] grayscale-75 w-[130px] flex overflow-hidden items-center justify-center rounded-full z-10 right-8"
              >
                <img src={userImg} alt="" className="w-[80px]" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ delay: inView ? 1.4 : 0, duration: 0.6 }}
                className="users absolute bg-gray-300 h-[110px] grayscale-75 w-[110px] flex overflow-hidden items-center justify-center rounded-full -right-10"
              >
                <img src={userImg} alt="" className="w-[80px]" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <CardContent
        icon={<RiUserFollowLine className="text-[44px] text-[#3a85f5]" />}
        c={"before"}
        head={"Selected Candidate"}
        para={
          "Selected candidate can entry the company for interview with recruiter"
        }
      />
    </motion.div>
  );
};

export default Card4;
