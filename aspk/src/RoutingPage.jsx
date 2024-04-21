import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';
import Signup from './Auth/Signup';

function RoutingPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup   />} />


      </Routes>
    </div>
  );
}

export default RoutingPage;
