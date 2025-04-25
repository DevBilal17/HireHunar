import React, { createContext, useContext, useEffect, useState } from "react";
import { UserAuthContext } from "./AuthContext";
import axios from "axios";

export const ApiUserData = createContext();

const ApiContext = ({ children }) => {
  let { setLoading, user } = useContext(UserAuthContext);
  const [profile, setProfile] = useState(() => {
    // Load profile from localStorage on initialization
    const savedProfile = localStorage.getItem("profile");
    return savedProfile ? JSON.parse(savedProfile) : null;
  });
  useEffect(() => {
    if (user && user._id) {
      fetchUserDataById(user._id);
    }
  }, [user]);

  const fetchUserDataById = async (userID) => {
    setLoading(true);
    try {
      let response = await axios.get(`/backend/user/getUserById/${userID}`);
      const fetchedProfile = response.data.data;
      
      // Save fetched profile to state and localStorage
      setProfile(fetchedProfile);
      localStorage.setItem("profile", JSON.stringify(fetchedProfile));
    } catch (err) {
      console.log(err.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiUserData.Provider value={{ profile }}>{children}</ApiUserData.Provider>
  );
};

export default ApiContext;
