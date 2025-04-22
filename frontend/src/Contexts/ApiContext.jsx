import React, {  createContext, useContext, useEffect, useState } from 'react'
import { UserAuthContext } from './AuthContext';
import axios from 'axios';


export const ApiUserData = createContext();

const ApiContext = ({children}) => {
    let {setLoading,user} = useContext(UserAuthContext);
    const [profile,setProfile] = useState(null)
    useEffect(()=>{
        if(user){
            let id = user._id
            
            fetchUserDataById(id)

            
        }
        
        
    },[])

    const fetchUserDataById = async (userID)=>{
        setLoading(true);
        try {
            let response = await axios.get(`/backend/user/getUserById/${userID}`);
            // console.log(response.data)
            setProfile(response.data.data)
        } catch (err) {
            console.log(err.response)
        }
        finally{
            setLoading(false)
        }
    }
    console.log(profile)
  return (
    <ApiUserData.Provider value={{profile}}>
      {children}
    </ApiUserData.Provider>
  )
}

export default ApiContext
