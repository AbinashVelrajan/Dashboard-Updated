import React, { useState } from "react";
import AddEmployee from "../AddEmployee";
import TaskAssigningForm from "./TaskAssigningForm";
import './TaskBarTableRow.css'
function TaskBar() {
    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHl1qIxyZRcQ41THgn_Z3-JEmSuMiX1JrgY1ofk8k3BA&s"
  const [taskBar, setTaskBar] = useState([
    {
      TaskName: "LMS Mobile Application",
      DueDate: "3 days ago",
      Priority: "Urgent",
    },
    {
      TaskName: "Create Splash Screen",
      DueDate: "10 days ago",
      Priority: "Urgent",
    },
    {
      TaskName: "Create a Logic Page UI",
      DueDate: "25 days ago",
      Priority: "Non-Urgent",
    },
    {
      TaskName: "COnnect API call in course and make the video play",
      DueDate: "3 days ago",
      Priority: "Urgent",
    },
    {
      TaskName: "WhatsApp Status Page Design",
      DueDate: "30 days ago",
      Priority: "Non-Urgent",
    },
  ]);

  const getPriority = (dueDate: String) => {
    const daysAgo = parseInt(dueDate.split(" ")[0], 10);
    return daysAgo > 10 ? "Non-Urgent" : "Urgent";
  };

  return (
    <div className="container">
      <h4>Taskbar</h4>
      <div className="d-flex justify-content-right mb-2">
        <button className="rounded-3 text-white bg-danger border-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-clock-history"
            viewBox="0 0 16 16"
          >
            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
          </svg>{" "}
          Developer Review
        </button>
        <TaskAssigningForm />
      </div>
      <div className="TaskBar-Table container rounded-3 border bg-light">
        <table className="table text-center">
          <thead>
            <tr>
              <th className="bg-light text-start">Name</th>
              <th className="bg-light">Assignee</th>
              <th className="bg-light">Due date</th>
              <th className="bg-light">Priority</th>
              <th className="bg-light">
                <TaskAssigningForm />
              </th>
            </tr>
          </thead>
          <tbody>
            {taskBar.map((taskBarData, index) => (
              <tr key={index}>
                <td className="bg-light text-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-clock-history text-danger"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                  </svg>{" "}
                  {taskBarData.TaskName}
                </td>
                <td className="bg-light"><img src={image} alt="" className="image-Size"/></td>
                <td className="text-danger bg-light">{taskBarData.DueDate}</td>
                <td className="bg-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={
                      getPriority(taskBarData.DueDate) === "Non-Urgent"
                        ? "green"
                        : "currentColor"
                    }
                    className={`bi bi-flag-fill ${
                      getPriority(taskBarData.DueDate) === "Non-Urgent"
                        ? "text-success"
                        : "text-danger"
                    }`}
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12 12 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A20 20 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a20 20 0 0 0 1.349-.476l.019-.007.004-.002h.001" />
                  </svg>{" "}
                  {getPriority(taskBarData.DueDate)}
                </td>
                <td className="bg-light">...</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskBar;
