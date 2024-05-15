import { useState } from "react";
import "./App.css";
import Header from "./Header";
import CustomersTable from "./CustomersTable";
import Analytics from "./Analytics";
import Projects from "./Projects";
import ClinetCard from "./ClinetCard";
import TaskBar from "./TaskBar/TaskBar";
import LoginPage from "./LoginPage/LoginPage";
import LoginPageFront from "./LoginPage/LoginPage";


function App() {
  return (
    <>
    
      {/* <div className="d-flex total-dashboard">
        <div style={{ width: "25%", height: "10px" }}></div>
        <div style={{ width: "75%" }}>

        <div className="header-component">
          <Header />

        </div>
          <Analytics />
          <CustomersTable />
          
        </div>
      </div>
      <Projects/>
      <ClinetCard />
  <TaskBar/> */}
  <LoginPageFront/>
    </>
  );
}

export default App;
