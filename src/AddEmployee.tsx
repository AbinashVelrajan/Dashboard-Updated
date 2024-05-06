import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function AddEmployee() {
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Enter Employee Details</Popover.Header>
            <Popover.Body className='bg-light'>
            <div className="form-group">
                    <label className='text-secondary'>Employee ID:</label>
                    <input type="text" className="form-control form-control-sm" placeholder='Ex: 12-abi' />
                </div>
                <div className="form-group">
                    <label className='text-secondary'>Gender:</label>
                    <input type="text" className="form-control form-control-sm" placeholder='M/F' />
                </div>
                <div className="form-group">
                    <label className='text-secondary'>Date of Birth:</label>
                    <input type="text" className="form-control form-control-sm" placeholder='MM-DD-YYYY' />
                </div>
                <div className="form-group">
                    <label className='text-secondary'>Date of Joining:</label>
                    <input type="text" className="form-control form-control-sm" placeholder='MM-DD-YYYY' />
                </div>
                <div className="form-group">
                    <label className='text-secondary'>Email:</label>
                    <input type="email" className="form-control form-control-sm" placeholder='example@123.com' />
                </div>
                <div className="form-group">
                    <label className='text-secondary'>Phone Number:</label>
                    <input type="text" className="form-control form-control-sm" placeholder='000-000-0000'/>
                </div>
            </Popover.Body>
        </Popover>
    );

    const Example = () => (
        <OverlayTrigger trigger="click" placement="left" overlay={popover}>
            <Button variant="success">Add Employees</Button>
        </OverlayTrigger>
    );

    return (
        <div>
            <Example />
        </div>
    );
}

export default AddEmployee;
