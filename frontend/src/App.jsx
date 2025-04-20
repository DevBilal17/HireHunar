import React from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Components/Footer/Footer';
import HomeNavbar from './Components/HomeNav/HomeNavbar';
import Register from './Pages/Register/Register';
const App = () => {
  return (
    <div className='max-w-[1500px] mx-auto'>
      <HomeNavbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
