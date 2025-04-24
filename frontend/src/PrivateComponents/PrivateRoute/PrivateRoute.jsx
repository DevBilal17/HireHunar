import React, { useContext, useEffect } from 'react'
import { UserAuthContext } from '../../Contexts/AuthContext'
import { Navigate, Outlet, Route } from 'react-router-dom'
import { toast } from 'react-toastify'

const PrivateRoute = () => {
    const {user} = useContext(UserAuthContext)
    useEffect(() => {
      if (!user) {
        toast.warning("Please login to access this page", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }, []);
  return  user ? <Outlet/> : <Navigate to={'/login'}/>
}

export default PrivateRoute

