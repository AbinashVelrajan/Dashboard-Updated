import React, { useState } from "react";
import "./CustomersTable.css";
import { Pagination, Table } from "react-bootstrap";
import AddEmployee from "./AddEmployee";

function CustomersTable() {
  const tableHeader = [
    "customerName",
    "company",
    "phoneNumber",
    "email",
    "country",
    "status",
  ] as const;
  const [tableData, settableData] = useState([
    {
      customerName: "Abinash",
      company: "Amazon",
      phoneNumber: 9363149,
      email: "abinash499@gamil.com",
      country: "India",
      status: "active",
    },
    {
      customerName: "Bala",
      company: "TCS",
      phoneNumber: 90800212,
      email: "bala8907@gamil.com",
      country: "America",
      status: "inactive",
    },
    {
      customerName: "Muthu",
      company: "WIPRO",
      phoneNumber: 34989113,
      email: "muthu3443@gamil.com",
      country: "UAE",
      status: "active",
    },
    {
      customerName: "Joe",
      company: "HCL",
      phoneNumber: 7979271123,
      email: "ram7856@gamil.com",
      country: "UK",
      status: "active",
    },
    {
      customerName: "Nithish",
      company: "SWOMB",
      phoneNumber: 971280712,
      email: "subash293@gamil.com",
      country: "IRAN",
      status: "inactive",
    },
    {
      customerName: "Aasai",
      company: "INFOSYS",
      phoneNumber: 68565842,
      email: "aasai499@gamil.com",
      country: "IRAQ",
      status: "active",
    },
    {
      customerName: "Vignesh",
      company: "Caterpiller",
      phoneNumber: 897855736,
      email: "vihema419@gamil.com",
      country: "SAUDI",
      status: "inactive",
    },
  ]);
  return (
    <div className="container bg-white rounded-5 mt-5">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <p className="mt-3 fw-bold fs-4 mb-1">All Employees</p>
          <p className="active-members mt-0">Active Members</p>
        </div>
        <div className="bd-search" id="docsearch" data-bd-docs-version="5.3">
          <button
            type="button"
            className="Search-Customer DocSearch-Button border border-0 rounded"
            aria-label="Search"
          >
            <span className="DocSearch-Button-Container">
              <svg
                width="20"
                height="20"
                className="DocSearch-Search-Icon me-2"
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
              <span className="DocSearch-Button-Placeholder">Search</span>
            </span>
          </button>
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
        <AddEmployee/>
      </div>
      <div>
        <Table hover>
          <thead>
            <tr>
              <th id="heading-colors">Customer Name</th>
              <th id="heading-colors">Company</th>
              <th id="heading-colors">Phone Number</th>
              <th id="heading-colors">Email</th>
              <th id="heading-colors">Country</th>
              <th id="heading-colors">Status</th>
            </tr>
          </thead>
          <tbody>
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
                          "rounded " +
                          (row[key] === "active"
                            ? "active-button"
                            : "inactive-button")
                        }
                      >
                        {row[key][0].toUpperCase() + row[key].slice(1)}
                      </button>
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination className="justify-content-end">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  );
}

export default CustomersTable;
