import React, { createContext, useState } from 'react'
import axios from 'axios';
export const UserAuthContext = createContext()

const AuthContext = ({children}) => {
  
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null);
  const [user,setUser] = useState(null)
  const callLoginApi = async (data)=>{ 
    
  }  

  const callSignUpApi = async (data)=>{
    setLoading(true);
    setError(null)
    try{
       const response = await axios.post('http://localhost:3000/backend/signup',data,{
        withCredentials: true,
      });
       console.log(response.data)
    }
    catch(err){
        setError(err.response?.data?.message || 'Signup failed');
        console.error('Signup error:', err);
    }
    finally{
        setLoading(false)
    }
  }
  return (
    <UserAuthContext.Provider value={{ isAuthenticated, user, callSignUpApi, loading, error }}>
      {children}
    </UserAuthContext.Provider>
  )
}

export default AuthContext
