import React, { useContext } from 'react'
import { UserAuthContext } from '../../Contexts/AuthContext'
import { Navigate, Outlet, Route } from 'react-router-dom'

const PrivateRoute = () => {
    const {isAuthenticated} = useContext(UserAuthContext)
  return  isAuthenticated ? <Outlet/> : <Navigate to={'/login'}/>
}

export default PrivateRoute

