import { Form, Modal } from 'react-bootstrap';
import axios from "axios";
import React, {useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';


const VerifyRxButton = ({RxId}) => {
    const [user, token] = useAuth();
    const [show,setShow] = useState(false);
    const handleShow = () =>setShow(true);
    const handleClose = () =>setShow(false);
    const [vRx, setVRx] = useState('')
    const [active, setActive] = useState(false)
    const [patient_id, setpatient_ID] = useState([])
    const [patient_first_name, setPatient_first_name] = useState("")
    const [patient_middle_name, setPatient_middle_name] = useState("")
    const [patient_last_name, setPatient_last_name] = useState("")
    const [patient_dob, setPatient_dob] = useState("")
    const [generic_name, setGeneric_name] = useState("")
    const [ndc, setNdc] = useState("")
    const [dosage, setDosage] = useState("")
    const [vessel, setVessel] = useState("")
    const [volume, setVolume] = useState("")
    const [sig, setSig] = useState("")
    const [frequency, setFrequency] = useState("")
    const [route, setRoute] = useState("")
    const [ordering_doctor, setOrdering_doctor] = useState("")
    const [ordering_doctor_phone_number, setOrdering_doctor_phone_number] = useState("")
    const [indication, setIndication] = useState("")


    async function updateStatus(verified){
        let update = `http://127.0.0.1:8000/api/prescription/edit/${RxId.id}/`
        await axios.put(update,
                        verified,
                        {headers: {Authorization: "Bearer " + token,}},
                        )
        // console.log(verified)
    }

    useEffect(()=> {
        setActive(RxId.active)
        setpatient_ID(RxId.patient.id)
        setPatient_first_name(RxId.patient_first_name)
        setPatient_middle_name(RxId.patient_middle_name)
        setPatient_last_name(RxId.patient_last_name)
        setPatient_dob(RxId.patient_dob)
        setGeneric_name(RxId.generic_name)
        setNdc(RxId.ndc)
        setDosage(RxId.dosage)
        setVessel(RxId.vessel)
        setVolume(RxId.volume)
        setSig(RxId.sig)
        setFrequency(RxId.frequency)
        setRoute(RxId.route)
        setOrdering_doctor(RxId.ordering_doctor)
        setOrdering_doctor_phone_number(RxId.ordering_doctor_phone_number)
        setIndication(RxId.indication)

    },[RxId, token])


    const handleVerify = () => {
        const veri = {id:RxId.id, active:active, patient_id:patient_id ,patient_first_name:patient_first_name, 
            patient_middle_name:patient_middle_name, patient_last_name:patient_last_name, 
            patient_dob:patient_dob, generic_name:generic_name, ndc:ndc, dosage:dosage, 
            vessel:vessel, volume:volume, sig:sig, frequency:frequency, route:route, ordering_doctor:ordering_doctor, 
            ordering_doctor_phone_number:ordering_doctor_phone_number, indication:indication, verified:vRx}
        updateStatus(veri)
        // console.log(veri)
        // console.log(RxId)
        handleClose()
    }

    return ( 
        <>
            <button onClick={handleShow}>Verify</button>
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
 
export default VerifyRxButton;