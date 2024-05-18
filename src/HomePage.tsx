import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from "react";
import "./App.css";
import Header from "./Header";
import CustomersTable from "./CustomersTable";
import Analytics from "./Analytics";
import Projects from "./Projects";
import ClinetCard from "./ClinetCard";
import TaskBar from "./TaskBar/TaskBar";
// import Link from 'react-router-dom';
import 'react';
// import LoginPage from "./LoginPage/LoginPage";
// import LoginPageFront from "./LoginPage/LoginPageFront";
// import ProtectedRoute from "./ProtectedRoute"; // You might need this for protected routes
import LoginPageFront from './LoginPage/LoginPage';

function HomePage() {
  return (
    <>
    <div>
        {/* <Link to="/customers">Customer</Link> */}
        <Link to="/customers">Customer</Link> <br />
        <Link to="/projects">Projects</Link>  <br />
        <Link to="/client">Client</Link>  <br />
        <Link to="/taskbar">Taskbar</Link>  <br />
        <Link to="/analytics">Analytics</Link>  <br />

    </div>
      
        <Routes>
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/customers" element={<CustomersTable />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/client" element={<ClinetCard />} />
          <Route path="/taskbar" element={<TaskBar />} />
          <Route path="/login-front" element={<LoginPageFront />} />
        
        </Routes>
    </>
  );
}

export default HomePage;
