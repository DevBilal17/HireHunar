import React, {  createContext, useContext, useEffect } from 'react'
import { UserAuthContext } from './AuthContext';
import axios from 'axios';


const ApiUserData = createContext();

const ApiContext = ({children}) => {
    let {setLoading,user} = useContext(UserAuthContext);
    useEffect(()=>{
        if(user){
            let {} = user
            // fetchUserDataById()
        }
    },[])

    const fetchUserDataById = async (userID)=>{
        setLoading(true);
        try {
            let response = await axios.post(`/backend/user/getUserById/${userID}`);
            console.log( "Fetched USer Data By ID " +  response)
        } catch (err) {
            console.log(err.response)
        }
        finally{
            setLoading(false)
        }
    }
  return (
    <ApiUserData.Provider value={''}>
      {children}
    </ApiUserData.Provider>
  )
}

export default ApiContext
