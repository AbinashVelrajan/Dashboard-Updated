import { useState } from "react";
import "./App.css";
import Header from "./Header";
import CustomersTable from "./CustomersTable";
import Analytics from "./Analytics";
import Projects from "./Projects";
import ClinetCard from "./ClinetCard";


function App() {
  return (
    <>
      {/* <div className="d-flex">
        <div style={{ width: "25%", height: "10px" }}></div>
        <div style={{ width: "75%" }}>

        <div className="header-component">
          <Header />

        </div>
          <Analytics />
          <CustomersTable />
          
        </div>
      </div>
      <Projects/> */}
      <ClinetCard />
    </>
  );
}

export default App;
