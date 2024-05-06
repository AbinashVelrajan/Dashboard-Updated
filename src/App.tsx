import { useState } from "react";
import "./App.css";
import Header from "./Header";
import CustomersTable from "./CustomersTable";
import Analytics from "./Analytics";

function App() {
  return (
    <>
      <div className="d-flex">
        <div style={{ width: "25%", height: "10px" }}></div>
        <div style={{ width: "75%" }}>
          <Header />
          <Analytics />
          <CustomersTable />
        </div>
      </div>
    </>
  );
}

export default App;
