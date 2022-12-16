import { Form, Modal, ToastBody } from 'react-bootstrap';
import axios from "axios";
import React, {useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import "./PatientButton.css"

const PatientButton = ({patient}) => {
    const [show,setShow] = useState(false);
    const handleShow = () =>setShow(true);
    const handleClose = () =>setShow(false);
    let today = new Date();
    let datee = patient.dob[0]+patient.dob[1]+patient.dob[2]+patient.dob[3]
    return ( 
        <>
        <button onClick={handleShow} className="butto">Details</button>
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Patient Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                <div>Weight: {patient.weight} lbs</div>
                <div>Height: {patient.height} cm</div>
                <div>DOB: {patient.dob}</div>
                <div>Age: {today.getFullYear() - datee}</div>
                <div>BMI: {(patient.weight)/((patient.height/100)^2)} kg/m^2</div>
                <div>CrCl: 1.79 mL/s</div>
                <div>Conditions: N/A</div>
                </Modal.Body>
                <Modal.Footer>
                    <button varriant = 'secondary' onClick ={handleClose} className="btn btn-dark">Cancel</button>
                    {/* <button type = 'submit' varriant = 'primary' onClick = {} className="btn btn-dark">Verify</button> */}
                </Modal.Footer>
            </Modal>
        </>
     );
}
 
export default PatientButton;