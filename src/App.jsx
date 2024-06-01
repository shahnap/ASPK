import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";


function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      <Route path="/dashboard" element ={<Navigate to="/dashboard/home" replace />}/>

      <Route path="/" element ={<Login />}/>
      <Route path="/signup" element ={<Signup/>}/>



    </Routes>
  );
}

export default App;
