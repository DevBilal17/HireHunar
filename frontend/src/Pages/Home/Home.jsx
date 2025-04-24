import React from 'react'
import HomeNavbar from '../../Components/HomeNav/HomeNavbar'
import HeroSection from '../../Components/HeroSection/HeroSection'
import About from '../../Components/About/About'
import JobDiscover from '../../Components/JobDiscover/JobDiscover'
import TopCompanies from '../../Components/TopCompanies/TopCompanies'
import SimpleProcess from '../../Components/SimpleProcess/SimpleProcess'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
     <div className='home'>
     {/* <HomeNavbar/> */}
      <HeroSection/>
      <About/>
      <JobDiscover/>
      {/* <TopCompanies/> */}
      <SimpleProcess/>
      <NewsLetter/>
     </div>
      {/* <Footer/> */}
    </>
  )
}

export default Home
