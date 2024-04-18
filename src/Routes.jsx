import React from 'react'
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
  } from "react-router-dom";
import Login from './Auth/Login';

function RouteLink() {
  return (
    <div>
<Routes>
    <Route path='/' element={<Login/>}/>
  
</Routes>
    </div>
  )
}

export default RouteLink