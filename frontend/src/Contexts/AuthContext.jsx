import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
export const UserAuthContext = createContext();

const AuthContext = ({ children }) => {
  // const [cookies, setCookie, removeCookie] = useCookies();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [local,setLocal] = useState(null)
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const callLoginApi = async (data) => {
    setLoading(true)
    setMessage(null)
    try {
      // console.log(data)
      const response = await axios.post('/backend/auth/signin',data);
      // console.log(response)
      setIsAuthenticated(true)
      // setUser(response.data.user)
      // setLocal(response.data.user)
      let userData = response.data.user
      localStorage.setItem('user_data',JSON.stringify(userData))

        toast.success('Login successful!')
        navigate('/dashboard')
      
    } catch (err) {
      // console.log(err.response)
      setMessage(err.response?.data?.message || "SignIn Failed")
      toast.error(err.response?.data?.message || "SignIn Failed")
    }
    finally{
      setLoading(false)
    }
  };

  const callSignUpApi = async (data) => {
    setLoading(true);
    setMessage(null);
    try {
      
      const response = await axios.post("/backend/auth/signup", data);
       
      
        // toast.success(response.data.message)
        toast.success("Signup successful! Please log in.");
        navigate('/login')
      
    } catch (err) {
      // console.log(err.response.data.message)
      setMessage(err.response?.data?.message || "Signup failed");
      toast.error(err.response?.data?.message || "Signup failed")
    } finally {
      setLoading(false);
    }
  };

   const callLogOut = ()=>{
    setIsAuthenticated(false)
    setUser(null) 
    toast.success("Logged out successfully");
    navigate('/');
    
   }
   useEffect(() => {
    if(JSON.parse(localStorage.getItem('user_data'))){
      setUser(JSON.parse(localStorage.getItem('user_data')))
    }
    if (user) {
      console.log("User Data ", user);
      // console.log(local)
    }
  }, [user]);
  
  return (
    <UserAuthContext.Provider
      value={{ isAuthenticated, user,callLogOut, callSignUpApi, callLoginApi ,loading, message }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default AuthContext;
