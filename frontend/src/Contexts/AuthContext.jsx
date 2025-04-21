import React, { createContext, useState } from "react";
import axios from "axios";
export const UserAuthContext = createContext();

const AuthContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const callLoginApi = async (data) => {
    setLoading(true)
    setError(null)
    try {
      console.log(data)
      const response = await axios.post('/backend/auth/signin',data);
      console.log(response)
      setIsAuthenticated(true)
      setUser(response)
      console.log(user)
      alert(response)
    } catch (err) {
      setError(err.response?.data?.message || "SignIn Failed")
    }
    finally{
      setLoading(false)
    }
  };

  const callSignUpApi = async (data) => {
    setLoading(true);
    setError(null);
    try {
      
      const response = await axios.post("/backend/auth/signup", data);
      console.log(response.data)
      alert(response.data)
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <UserAuthContext.Provider
      value={{ isAuthenticated, user, callSignUpApi, callLoginApi ,loading, error }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default AuthContext;
