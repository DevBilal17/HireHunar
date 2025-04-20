import React, { useEffect, useState } from 'react'
import './App.css'

import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Components/Footer/Footer';
import HomeNavbar from './Components/HomeNav/HomeNavbar';
import Register from './Pages/Register/Register';
import FindJobs from './Pages/FindJobs/FindJobs';
import Dashboard from './Pages/PrivatePages/Dashboard/Dashboard';
import Messages from './Pages/PrivatePages/Messages/Messages';
import FindJ from './Pages/PrivatePages/FindJobs/FindJ';
import ProfilePage from './Pages/PrivatePages/ProfilePage/ProfilePage';

const App = () => {
  const [url,setUrl] = useState(false);
  let location = useLocation();
  useEffect(()=>{
      setUrl(location.pathname.includes('dashboard') ||
      location.pathname.includes('messages') ||
      location.pathname.includes('find-job') ||
      location.pathname.includes('my-profile'))
  },[location])
  return (
    <div className={`max-w-[1550px] ${!url&&'px-[20px]'} mx-auto`}>
      
      <HomeNavbar className={`${url&&'hide'}`}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/find-jobs' element={<FindJobs/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/messages' element={<Messages/>} />
        <Route path='/find-job' element={<FindJ/>} />
        <Route path='/my-profile' element={<ProfilePage/>} />
      </Routes>
      <Footer className={`${url&&'hide'}`}/>
      
      
      
    </div>
    
  )
}

export default App

// for testing purpose (git and github) - this comment
