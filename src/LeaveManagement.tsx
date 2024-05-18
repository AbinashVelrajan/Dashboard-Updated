import React, { useState } from "react";
import "./CustomersTable.css";
import { Pagination, Table } from "react-bootstrap";
import AddEmployee from "./AddEmployee";
import Analytics from "./Analytics";
import EmployeeDetails from "./EmployeeDetails";

function LeaveManagement() {
  const tableHeader = [
    "employeeName",
    "designation",
    "date",
    "shiftTime",
    "joiningDate",
    "status",
  ] as const;
  const [tableData, settableData] = useState([
    {
      employeeName: "Abinash",
      designation: "Software Engineer",
      date: "16-05-2024",
      shiftTime: "General",
      joiningDate: "01-02-2023",
      status: "present",
    },
    {
      employeeName: "Bala",
      designation: "UI Developer",
      date: "16-05-2024",
      shiftTime: "General",
      joiningDate: "26-10-2022",
      status: "absent",
    },
    {
      employeeName: "Muthu",
      designation: "Full Stack Deveopler",
      date: "16-05-2024",
      shiftTime: "General",
      joiningDate: "22-05-2022",
      status: "present",
    },
    {
      employeeName: "Joe",
      designation: "Backend Developer",
      date: "16-05-2024",
      shiftTime: "General",
      joiningDate: "12-12-2021",
      status: "present",
    },
    {
      employeeName: "Nithish",
      designation: "Bussiness Analyst",
      date: "16-05-2024",
      shiftTime: "General",
      joiningDate: "06-09-2023",
      status: "absent",
    },
    {
      employeeName: "Aasai",
      designation: "Tester",
      date: "16-05-2024",
      shiftTime: "General",
      joiningDate: "16-07-2022",
      status: "present",
    },
    {
      employeeName: "Vignesh",
      designation: "Devops",
      date: "16-05-2024",
      shiftTime: "General",
      joiningDate: "21-04-2021",
      status: "absent",
    },
  ]);
  return (
    <div className="container bg-white rounded-5 mt-5">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <p className="mt-3 fw-bold fs-4 mb-1">Leave Management</p>
          <p className="active-members mt-0">Active Members</p>
        </div>
        <div className="bd-search" id="docsearch" data-bd-docs-version="5.3">
    <div className="d-flex align-items-center">
        <form className="DocSearch" role="search">
            <div className="input-group border border-1 rounded">
                <input
                    type="text"
                    className="DocSearch-Input form-control border border-0 rounded-start bg-white"
                    aria-label="Search"
                    placeholder="Search"
                />
                <button
                    type="submit"
                    className="DocSearch-Button input-group-text bg-white border-0"
                >
                    <svg
                        width="20"
                        height="20"
                        className="DocSearch-Search-Icon"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                    >
                        <path
                            d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                            stroke="currentColor"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </button>
            </div>
        </form>
        
        <div className="ms-3">
            <button
                className="dropDown-shortby sort-dropdown btn btn-light dropdown-toggle rounded"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <span className="text-secondary">sort by :</span>
                <span className="fw-bold"> Newest</span>
            </button>
        </div>
    </div>
</div>
    
      </div>
      <div>
        <Table hover>
          <thead className="text-center">
            <tr> 
              <th id="heading-colors">Employee Name</th>
              <th id="heading-colors">Designation</th>
              <th id="heading-colors">Date</th>
              <th id="heading-colors">Shift Time</th>
              <th id="heading-colors">Joining Date</th>
              <th id="heading-colors">Status</th>
              <th id="heading-colors">Details</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {tableData.map((row, idx) => (
              <tr key={idx}>
                {tableHeader.map((key) =>
                  key !== "status" ? (
                    <td className="text-black" key={key}>
                      {row[key]}
                    </td>
                  ) : (
                    <td>
                      <button
                        className={
                          "rounded  " +
                          (row[key] === "present"
                            ? "active-button btn btn-outline-success"
                            : "inactive-button btn btn-outline-danger")
                        }
                      >
                        {row[key][0].toUpperCase() + row[key].slice(1)}
                      </button>
                    </td>
                    
                  )
                )}
                <td ><span><EmployeeDetails/></span></td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination className="justify-content-end">
          {/* <Pagination.First /> */}
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>

          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          {/* <Pagination.Ellipsis /> */}
          {/* <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item> */}

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          {/* <Pagination.Last /> */}
        </Pagination>
      </div>
    </div>
  );
}

export default LeaveManagement;
