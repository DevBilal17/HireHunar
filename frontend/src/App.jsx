import React from 'react'
import HeroSection from './Components/HeroSection/HeroSection'
import HomeNavbar from './Components/HomeNav/HomeNavbar';
import './App.css'
import About from './Components/About/About';
import JobDiscover from './Components/JobDiscover/JobDiscover';
import CategorySection from './Components/CategorySection/CategorySection';
import TopCompanies from './Components/TopCompanies/TopCompanies';
import SimpleProcess from './Components/SimpleProcess/SimpleProcess';
import Footer from './Components/Footer/Footer';
import NewsLetter from './Components/NewsLetter/NewsLetter';
const App = () => {
  return (
    <div className='max-w-[1500px] mx-auto home'>
      <HomeNavbar/>
      <HeroSection/>
      <About/>
      <JobDiscover/>
      <TopCompanies/>
      <SimpleProcess/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default App
