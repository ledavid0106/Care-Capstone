import { Form, Modal } from 'react-bootstrap';
import axios from "axios";
import React, {useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import "./VerifyProdButton.css"

const VerifyProdButton = ({production}) => {
    const [user, token] = useAuth();
    const [show,setShow] = useState(false);
    const handleShow = () =>setShow(true);
    const handleClose = () =>setShow(false);

    const [vRx, setVRx] = useState('')

    const [patient_id, setpatient_ID] = useState([])
    const [prescription_id, setprescription_id] = useState("")
    const [ndc, setNdc] = useState("")
    const [prescription_generic_name, setprescription_generic_name] = useState("")
    const [prescription_dosage, setprescription_dosage] = useState("")
    const [lot_number, setLot_number] = useState("")
    const [expiration, setExpiration] = useState("")
    


    async function updateStatus(verified){
        let update = `http://127.0.0.1:8000/api/production/edit/${production.id}/`
        await axios.put(update,
                        verified,
                        {headers: {Authorization: "Bearer " + token,}},
                        )
        // console.log(verified)
    }

    useEffect(()=> {
        
        setpatient_ID(production.patient.id)
        setprescription_id(production.prescription.id)
        setNdc(production.ndc)
        setprescription_generic_name(production.prescription_generic_name)
        setprescription_dosage(production.prescription_dosage)
        setLot_number(production.lot_number)
        setExpiration(production.expiration)

    },[production, token])


    const handleVerify = () => {
        const veri = {id:production.id,
            patient_id:patient_id , 
            prescription_id:prescription_id, ndc:ndc, 
            prescription_generic_name:prescription_generic_name,
            prescription_dosage:prescription_dosage,
            lot_number:lot_number,
            expiration:expiration,
            verified:vRx}
        updateStatus(veri)
        console.log(veri)
        // console.log(production)
        window.location.reload(false)
        handleClose()
    }

    return ( 
        <>
            <button onClick={handleShow} className="buto">Verify</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Your Initials to Verify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Initials</Form.Label>
                            <Form.Control type='string' onChange={(e)=> setVRx(e.target.value)}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button varriant = 'secondary' onClick ={handleClose} className="btn btn-dark">Cancel</button>
                    <button type = 'submit' varriant = 'primary' onClick = {handleVerify} className="btn btn-dark">Verify</button>
                </Modal.Footer>
            </Modal>
        </>
     );
}
 
export default VerifyProdButton;