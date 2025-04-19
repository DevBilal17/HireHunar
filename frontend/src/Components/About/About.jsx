import React from 'react'
import AboutCArd from './AboutCArd'

const About = () => {
  return (
    <div className='flex items-center justify-around py-20 flex-wrap gap-5'>
      <AboutCArd percentage={91} head={'Skills Aligned'} para={'Many job seekers match their skills to the right jobs.'}/>
      <AboutCArd percentage={90} head={'Fast and Efficient'} para={'Company data filtering is quick and efficient.'}/>
      <AboutCArd percentage={89} head={'Wide Range'} para={'Top employers interacting with many job seekers.'}/>
    </div>
  )
}

export default About
