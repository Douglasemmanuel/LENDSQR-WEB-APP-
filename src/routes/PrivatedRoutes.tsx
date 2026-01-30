

import { useAuth } from "../hooks/Auth_hooks";
import { Outlet , Navigate } from "react-router-dom";

const PrivatedRoutes =()=>{
  const {isAuthenticated} = useAuth()
  return (
    isAuthenticated ? <Outlet/> : <Navigate to='/login'/>
  )

}

export default PrivatedRoutes ;