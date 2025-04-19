import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup';
const AboutCArd = ({percentage,head,para}) => {
    const [startCount, setStartCount] = useState(false);
    const counterRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setStartCount(true); // Start counting when the element is in view
            }
          },
          { threshold: 0.5 } // Adjust this value as needed (0.5 = 50% visible)
        );
        if (counterRef.current) {
            observer.observe(counterRef.current);
          }
      
          return () => {
            if (counterRef.current) {
              observer.unobserve(counterRef.current);
            }
          };
        }, []);
  return (
    <div className='flex flex-col items-center gap-2.5 px-10 py-4 lg:w-[350px]' ref={counterRef}>
       <span className='font-semibold text-2xl'> {startCount ? <CountUp start={0} end={percentage} duration={2.5} /> : 0}%</span>
       <h3 className='font-semibold text-xl'>{head}</h3>
       <p className='text-center text-gray-500'>{para}</p>
    </div>
  )
}

export default AboutCArd
