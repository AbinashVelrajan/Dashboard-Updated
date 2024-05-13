import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import StarRating from "./StarIcon";

const TaskAssigningForm: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    // Retrieve input values from refs
    e.preventDefault();
    const formEle = e.currentTarget;
    const projectName = formEle.elements[0] as HTMLInputElement;
    const assigness = formEle.elements[1] as HTMLInputElement;
    const dueDate = formEle.elements[2] as HTMLInputElement;
    const priority = formEle.elements[3] as HTMLInputElement;
    const timeEstimate = formEle.elements[4] as HTMLInputElement;
    const status = formEle.elements[5] as HTMLInputElement;

    const formData: { [key: string]: string } = {
      "Project Name": projectName.value,
      Assigness: assigness.value,
      "Due Date": dueDate.value,
      Priority: priority!.value,
      "Time Estimate": timeEstimate.value,
      Status: status.value,
    };

    // Log the form data to the console
    console.log(formData);

    // Close the modal
    closeModal();
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-light"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </button>

      {showModal && (
        <div
          className="modal fade show"
          tabIndex={-1}
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header justify-content-between bg-light">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Add Task Details
                </h5>
                <StarRating />
                <button
                  type="button"
                  className="close border border-0"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form id="create-client" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-group col">
                      <label className="text-secondary">Project Name:</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Ex: EMS_Project"
                        name="clientId"
                      />
                    </div>
                    <div className="form-group col">
                      <label className="text-secondary">Assigness:</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder=""
                        name="gender"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <label className="text-secondary">Due Date:</label>
                      <input
                        type="date"
                        className="form-control form-control-sm"
                        placeholder="MM-DD-YYYY"
                        name="dob"
                      />
                    </div>
                    <div className="form-group col">
                      <label className="text-secondary">Priority:</label>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                          Select Anyone
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Low Priority
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Medium Priority
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            High Priority
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <label className="text-secondary">Time Estimate:</label>
                      <input
                        type="date"
                        className="form-control form-control-sm"
                        placeholder="example@123.com"
                        name="email"
                      />
                    </div>
                    <div className="form-group col">
                      <label className="text-secondary">Status:</label>
                      <div className="dropdown">
                        <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic">
                            Select Anyone
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                              Developer Review
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              Testing Process
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Final Valuation
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  form="create-client"
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default TaskAssigningForm;
