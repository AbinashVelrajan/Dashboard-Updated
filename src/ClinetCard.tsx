import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./clinet.css";

function ClinetCard() {
  const [client, setClient] = useState([
    {
      name: "NANCY",
      location: "Chennai",
      project: "Employee Management System",
      date: "29-04-2001",
      status: "Active",
    },
    {
      name: "WHEELER",
      location: "Bangalore",
      project: "Stanger Things",
      date: "13-04-2010",
      status: "Active",
    },
    {
      name: "NIKE",
      location: "Kolkata",
      project: "To save Eleven",
      date: "09-03-2024",
      status: "Active",
    },
    {
      name: "ELEVEN",
      location: "Kerala",
      project: "Protect Nike",
      date: "12-08-2005",
      status: "Active",
    },
    {
      name: "SARJIO",
      location: "Spain",
      project: "To Plan bank of spain",
      date: "07-02-2023",
      status: "Active",
    },
    {
      name: "BERLIN",
      location: "Texas",
      project: "To Excecuts the Sarjio plan",
      date: "17-02-2022",
      status: "Active",
    },
    {
      name: "HARRY",
      location: "Hog Warts",
      project: "Protect the Hogwarts and Earth",
      date: "15-12-2023",
      status: "Active",
    },
  ]);
  return (
    <div className="container bg-white rounded-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {client.map((data, index) => (
          <div className="col" key={index}>
            <Card className="rounded rounded-3 h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div className="d-flex align-items-center mb-2">
                  <img
                    src="src/images/dummy profile image.jpg"
                    className="image-client me-2"
                    alt="Client"
                  />
                  <div>
                    <Card.Title className="mb-0">{data.name}</Card.Title>
                    <p className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                      </svg>{" "}
                      {data.location}
                    </p>
                  </div>
                  <p className="ms-auto mb-0">{data.date}</p>
                </div>
                <p className="mb-0">{data.project}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 text-success">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-circle bg-success rounded-5"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    </svg>{" "}
                    {data.status}
                  </p>
                  <Button className="view-button btn btn-outline-danger text-danger bg-light text-center">
                    View
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClinetCard;
