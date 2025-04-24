import React, { useContext, useEffect, useState } from "react";
import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Components/Footer/Footer";
import HomeNavbar from "./Components/HomeNav/HomeNavbar";
import Register from "./Pages/Register/Register";
import FindJobs from "./Pages/FindJobs/FindJobs";
import Dashboard from "./Pages/PrivatePages/Dashboard/Dashboard";
import Messages from "./Pages/PrivatePages/Messages/Messages";
import FindJ from "./Pages/PrivatePages/FindJobs/FindJ";
import ProfilePage from "./Pages/PrivatePages/ProfilePage/ProfilePage";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./PrivateComponents/PrivateRoute/PrivateRoute";
import PostJobs from "./Pages/PrivatePages/CompanyPages/PostJobs";
import CompanyProfile from "./Pages/PrivatePages/CompanyPages/CompanyProfile";
import AllJobs from "./Pages/PrivatePages/CompanyPages/AllJobs";
import SingleJobPage from "./Pages/PrivatePages/CompanyPages/JobPage/SingleJobPage";
const App = () => {
  const [url, setUrl] = useState(false);
  let location = useLocation();
  useEffect(() => {
    setUrl(
      location.pathname.includes("dashboard") ||
        location.pathname.includes("messages") ||
        location.pathname.includes("f-job") ||
        location.pathname.includes("my-profile") || 
        location.pathname.includes('all-jobs') ||
        location.pathname.includes('post-job')||
        location.pathname.includes('company-profile')||
        location.pathname.includes('job/')
    );
  }, [location]);
  return (
    <div className={`max-w-full ${!url && "sm:px-[20px] px-[10px]"} mx-auto`}>
      <HomeNavbar className={`${url && "hide"}`} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/find-jobs" element={<FindJobs />} />
        {/* Private Routes When user logged In */}
        <Route element={<PrivateRoute />}>
         
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/f-job" element={<FindJ />} />
          <Route path="/my-profile" element={<ProfilePage />} />

          <Route path="/f-job/job/:jobId" element={<SingleJobPage/>} />
          <Route path="/post-job" element={<PostJobs/>} />
          <Route path="/company-profile" element={<CompanyProfile/>} />
          <Route path= '/all-jobs' element={<AllJobs/>} />
        </Route>
      </Routes>
      <Footer className={`${url && "hide"}`} />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;

// for testing purpose (git and github) - this comment
