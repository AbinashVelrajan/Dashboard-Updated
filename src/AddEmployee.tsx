import React, { useState, useRef } from "react";

// const AddEmployee: React.FC = () => {
//   const [showModal, setShowModal] = useState<boolean>(false);

//   // Create refs for input fields
//   const clientIdRef = useRef<HTMLInputElement>(null);
//   const genderRef = useRef<HTMLInputElement>(null);
//   const dobRef = useRef<HTMLInputElement>(null);
//   const dojRef = useRef<HTMLInputElement>(null);
//   const emailRef = useRef<HTMLInputElement>(null);
//   const phoneNumberRef = useRef<HTMLInputElement>(null);

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   const handleSubmit = () => {
//     // Retrieve input values from refs
//     const formData: { [key: string]: string } = {
//       "Client ID": clientIdRef.current!.value,
//       "Gender": genderRef.current!.value,
//       "Date of Birth": dobRef.current!.value,
//       "Date of Joining": dojRef.current!.value,
//       "Email": emailRef.current!.value,
//       "Phone Number": phoneNumberRef.current!.value
//     };

//     // Log the form data to the console
//     console.log(formData);

//     // Close the modal
//     closeModal();
//   };

//   return (
//     <div>
//       <button
//         type="button"
//         className="btn btn-success"
//         onClick={() => setShowModal(true)}
//       >
//         Add Client
//       </button>

//       {showModal && (
//         <div
//           className="modal fade show"
//           tabIndex={-1}
//           role="dialog"
//           style={{ display: "block" }}
//         >
//           <div className="modal-dialog modal-dialog-centered" role="document">
//             <div className="modal-content">
//               <div className="modal-header justify-content-between bg-light">
//                 <h5 className="modal-title" id="exampleModalLongTitle">
//                   Add Client Details
//                 </h5>
//                 <button
//                   type="button"
//                   className="close border border-0"
//                   onClick={closeModal}
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <div className="row">
//                   <div className="form-group col">
//                     <label className="text-secondary">Client ID:</label>
//                     <input
//                       type="text"
//                       className="form-control form-control-sm"
//                       placeholder="Ex: 12-abi"
//                       ref={clientIdRef}
//                     />
//                   </div>
//                   <div className="form-group col">
//                     <label className="text-secondary">Gender:</label>
//                     <input
//                       type="text"
//                       className="form-control form-control-sm"
//                       placeholder="M/F"
//                       ref={genderRef}
//                     />
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="form-group col">
//                     <label className="text-secondary">Date of Birth:</label>
//                     <input
//                       type="date"
//                       className="form-control form-control-sm"
//                       placeholder="MM-DD-YYYY"
//                       ref={dobRef}
//                     />
//                   </div>
//                   <div className="form-group col">
//                     <label className="text-secondary">Date of Joining:</label>
//                     <input
//                       type="date"
//                       className="form-control form-control-sm"
//                       placeholder="MM-DD-YYYY"
//                       ref={dojRef}
//                     />
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="form-group col">
//                     <label className="text-secondary">Email:</label>
//                     <input
//                       type="email"
//                       className="form-control form-control-sm"
//                       placeholder="example@123.com"
//                       ref={emailRef}
//                     />
//                   </div>
//                   <div className="form-group col">
//                     <label className="text-secondary">Phone Number:</label>
//                     <input
//                       type="text"
//                       className="form-control form-control-sm"
//                       maxLength={10}
//                       placeholder="000-000-0000"
//                       ref={phoneNumberRef}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={closeModal}
//                 >
//                   Close
//                 </button>
//                 <button type="button" className="btn btn-primary" onClick={handleSubmit}>
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {showModal && <div className="modal-backdrop fade show"></div>}
//     </div>
//   );
// };

const AddEmployee: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
  
    const closeModal = () => {
      setShowModal(false);
    };
  
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
      // Retrieve input values from refs
      e.preventDefault();
      const formEle = e.currentTarget;
      const clientEle = formEle.elements[0] as HTMLInputElement;
      const genderEle = formEle.elements[1] as HTMLInputElement;
      const dobEle = formEle.elements[2] as HTMLInputElement;
      const dojEle = formEle.elements[3] as HTMLInputElement;
      const emailEle = formEle.elements[4] as HTMLInputElement;
      const phoneNumberEle = formEle.elements[5] as HTMLInputElement;


      const formData: { [key: string]: string } = {
        "Client ID": clientEle.value,
        "Gender": genderEle.value,
        "Date of Birth": dobEle.value,
        "Date of Joining": dojEle!.value,
        "Email": emailEle.value,
        "Phone Number": phoneNumberEle.value
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
          className="btn btn-success"
          onClick={() => setShowModal(true)}
        >
          Add Client
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
                    Add Client Details
                  </h5>
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
                      <label className="text-secondary">Client ID:</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Ex: 12-abi"
                        name="clientId"
                      />
                    </div>
                    <div className="form-group col">
                      <label className="text-secondary">Gender:</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="M/F"
                        name="gender"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <label className="text-secondary">Date of Birth:</label>
                      <input
                        type="date"
                        className="form-control form-control-sm"
                        placeholder="MM-DD-YYYY"
                        name="dob"
                      />
                    </div>
                    <div className="form-group col">
                      <label className="text-secondary">Date of Joining:</label>
                      <input
                        type="date"
                        className="form-control form-control-sm"
                        placeholder="MM-DD-YYYY"
                        name="doj"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <label className="text-secondary">Email:</label>
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        placeholder="example@123.com"
                        name="email"
                      />
                    </div>
                    <div className="form-group col">
                      <label className="text-secondary">Phone Number:</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        maxLength={10}
                        placeholder="000-000-0000"
                        name="phoneNumber"
                      />
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
                  <button form="create-client" type="submit" className="btn btn-primary">
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
  

export default AddEmployee;
