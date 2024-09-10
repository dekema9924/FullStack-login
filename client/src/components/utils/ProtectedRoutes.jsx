import {Outlet, Navigate} from 'react-router-dom'
import Cookies from 'js-cookie';


import React from 'react'



export function DashboardAuth() {
  let user = Cookies.get('jwt')
  return user ? <Outlet/> : <Navigate to='/'/>
}

export  function LoginRouteAuth () {
  let user = Cookies.get('jwt')
  return user ? <Navigate to="/dashboard" replace /> : <Outlet />;
}


