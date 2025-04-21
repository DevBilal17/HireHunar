import React, { createContext, useState } from "react";
import axios from "axios";
export const UserAuthContext = createContext();

const AuthContext = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const callLoginApi = async (data) => {};

  const callSignUpApi = async (data) => {
    setLoading(true);
    setError(null);
    try {
        console.log(await data + 'My Data')
      const response = await axios.post("/backend/auth/signup", data);
      console.log(response);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
      console.error("Signup error:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <UserAuthContext.Provider
      value={{ isAuthenticated, user, callSignUpApi, loading, error }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default AuthContext;
