import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { UserAuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'


export const JobApiData = createContext()

const JobApiContext = ({children}) => {
   let [userAllData,setUserAllData] = useState(() => {
    // Load profile from localStorage on initialization
    const savedData = localStorage.getItem("user-all-data");
    return savedData ? JSON.parse(savedData) : null;
    
  })
   let {user} = useContext(UserAuthContext) 
   let navigate = useNavigate()
    const addJob = async (data)=>{
        try {
            let response = await axios.post('/backend/job/createJob/',data)
            // let d = response;
            toast.success('Job added successfuly')
            // console.log(data)
            navigate('/all-jobs')
        } catch (err) {
            console.log(err.response)

        }
    }

    const allJobsofCompanyById = async (id)=>{
        try {
            let response = await axios.get(`/backend/user/getUserDashboardInfo/${id}`)
            let fetchedData = response.data.data
            setUserAllData(fetchedData)

            localStorage.setItem("user-all-data", JSON.stringify(fetchedData));
        } catch (err) {
            console.log(err.response)
        }
    }

    const deleteJobofCompanyById = async (id)=>{
      try {
        let response = await axios.delete(`/backend/job/deleteJob/${id}`);

        let d = response;
        toast.success()
        localStorage.removeItem('user-all-data')
        allJobsofCompanyById(user._id)
        console.log(d)
      } catch (err) {
        console.log(err.response)
      }
    }
      useEffect(() => {
        if (user && user._id) {
          allJobsofCompanyById(user._id);
        }
      }, [user]);

  return (
    <JobApiData.Provider value={{addJob,userAllData,deleteJobofCompanyById}}>
      {children}
    </JobApiData.Provider>
  )
}

export default JobApiContext
