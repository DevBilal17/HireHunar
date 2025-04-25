import React from 'react'
import {  motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CardContent = ({icon,head,para,c}) => {
  const sectionRef = useRef(null);
       const inView = useInView(sectionRef, { threshold: 0.1 });
  return (
    <motion.div
    ref={sectionRef}
      initial={{ opacity: 0, x: 100 }}
  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
  transition={{ duration: 0.6 }}
    
    className={` w-[50%] flex flex-col items-start gap-1 processCard ${c} `}>
      <div className=''>{icon}</div>
      <h3 className='text-2xl font-semibold mt-3'>{head}</h3>
      <p className='text-gray-600 max-w-[340px] w-full'>{para}</p>
    </motion.div>
  )
}

export default CardContent
