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
  let [cat,setCat] = useState([])
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
toast.error(err.response?.data?.message || "Failed")
        }
    }

    const allJobsofCompanyById = async (id)=>{
        try {
            let response = await axios.get(`/backend/user/getUserDashboardInfo/${id}`)
            let fetchedData = response.data.data
            localStorage.removeItem('user-all-data')
            setUserAllData(fetchedData)

            localStorage.setItem("user-all-data", JSON.stringify(fetchedData));
        } catch (err) {
           toast.error(err.response?.data?.message || "Failed")
        }
    }


    const allAvailableCategoriesForJob = async ()=>{
      try {
        let response = await axios.get('/backend/job/getAvailableCategories');
        // localStorage.setItem('categories',JSON.stringify())
        console.log(response)
      } catch (err) {
        
      }
    }
    

   const updateJobByID = async (id,updatedJobData)=>{
    try {
      let response = await axios.put(`/backend/job/updateJob/${id}`,updatedJobData)
      let d = response.data
      toast.success(d.message)
      allJobsofCompanyById(user._id)
      navigate('/all-jobs')
      console.log(d)
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed")
    }
   }

    const deleteJobofCompanyById = async (id)=>{
      try {
        // console.log(id)
        let response = await axios.delete(`/backend/job/deleteJob/${id}`);

        let d = response.data;
        toast.success(d.message)
        localStorage.removeItem('user-all-data')
        allJobsofCompanyById(user._id)
        console.log(d)
      } catch (err) {
        toast.error(err.response?.data?.message || "Failed")
      }
    }
      useEffect(() => {
        if (user && user._id) {
          allJobsofCompanyById(user._id);
        }
        
      }, [user]);
      useEffect(()=>{
        allAvailableCategoriesForJob()
      },[])
  return (
    <JobApiData.Provider value={{addJob,userAllData,deleteJobofCompanyById,updateJobByID}}>
      {children}
    </JobApiData.Provider>
  )
}

export default JobApiContext
