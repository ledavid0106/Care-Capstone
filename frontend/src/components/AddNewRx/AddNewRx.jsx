import axios from 'axios';
import React, {useState, useEffect, Component} from 'react';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
// import Dropdown from '../DropDown/DropDown';
import './AddNewRx.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const AddNewRx = ({getAllRx}) => {
    const [show,setShow] = useState(false);
    const [active, setActive] = useState(false)
    const [id, setID] = useState([])
    const [patient_first_name, setPatient_first_name] = useState("")
    const [patient_middle_name, setPatient_middle_name] = useState("")
    const [patient_last_name, setPatient_last_name] = useState("")
    const [patient_dob, setPatient_dob] = useState("")
    const [generic_name, setGeneric_name] = useState("")
    const [ndc, setNdc] = useState("")
    const [dosage, setDosage] = useState("")
    const [vessel, setVessel] = useState("")
    const [volume, setVolume] = useState("")
    const [lot_number, setLot_number] = useState("")
    const [expiration, setExpiration] = useState("")
    const [sig, setSig] = useState("")
    const [frequency, setFrequency] = useState("")
    const [route, setRoute] = useState("")
    const [ordering_doctor, setOrdering_doctor] = useState("")
    const [ordering_doctor_phone_number, setOrdering_doctor_phone_number] = useState("")
    const [indication, setIndication] = useState("")
    const [user, token] = useAuth();
    const [open, setOpen] = React.useState(false);
    const [patients, setpatients] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    
    const handleShow = () =>setShow(true);
    const handleClose = () =>setShow(false);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/patient_profile/all/",
                {headers: {Authorization: "Bearer " + token,}})
            .then(response=> {
                console.log(response.data)
                setpatients(response.data)
                setIsError(false)
            })
            .catch(error=>{
                console.log(error)
                setIsError(true)
                setIsLoading(false)
            })
        }, [token])


      const handleMenuOne = () => {
        console.log('clicked one');
        // setID(value)
        console.log(id)
        setOpen(false);
      };
    

    async function addRx(Rx) {
        const response = await axios.post(`http://127.0.0.1:8000/api/prescription/`, 
                                        Rx,
                                        {headers: {Authorization: "Bearer " + token,}}
                                        )
        if (response.status === 201) {
            await getAllRx()
        }
    }



    const handleSubmit = () => {
        const newRx = {active:active, id:id ,patient_first_name:patient_first_name, 
            patient_middle_name:patient_middle_name, patient_last_name:patient_last_name, 
            patient_dob:patient_dob, generic_name:generic_name, ndc:ndc, dosage:dosage, 
            vessel:vessel, volume:volume, lot_number:lot_number, expiration:expiration, 
            sig:sig, frequency:frequency, route:route, ordering_doctor:ordering_doctor, 
            ordering_doctor_phone_number:ordering_doctor_phone_number, indication:indication}
        addRx(newRx)
        handleClose()
    }

    const options = patients.map((pt)=> {return (`${pt.first_name} ${pt.last_name} ${pt.dob}`)});
    const defaultOption = options[0];

    return ( 
        <>
        <button className = "btn btn-dark shadow" onClick = {handleShow}>Add Rx</button>

        <Modal show = {show} onHide = {handleClose}>
            <Modal.Header className = 'bp' closeButton>
                <Modal.Title className='white'>Enter Rx Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className = 'm-3'>
                    <Form.Group  className = 'mb-3' >
                    <input
                        type="checkbox"
                        id="active"
                        name="Active"
                    />
                    <label for="active" id="active_label" value={active} onChange = {(e)=> setActive(e.target.value)}>Active</label>
                    </Form.Group>

                    
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Patient ID</Form.Label>
                        <Dropdown 
                        options={options} value={defaultOption} onChange={this._onSelect} 
                        placeholder="Select an option" 
                        />;
                    </Form.Group>


                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Patient First Name</Form.Label>
                        <Form.Control type = 'string' value = {patient_first_name} onChange = {(e)=> setPatient_first_name(e.target.value)}/> 
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>-Patient Middle Name</Form.Label>
                        <Form.Control type = 'string' value = {patient_middle_name} onChange = {(e)=> setPatient_middle_name(e.target.value)}/> 
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Patient Last Name</Form.Label>
                        <Form.Control type = 'string' value = {patient_last_name} onChange = {(e)=> setPatient_last_name(e.target.value)}/> 
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Patient Date Of Birth</Form.Label>
                        <Form.Control type = 'date' value = {patient_dob} onChange = {(e)=> setPatient_dob(e.target.value)}/> 
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Medication Generic Name</Form.Label>
                        <Form.Control type = 'string' value = {generic_name} onChange = {(e)=> setGeneric_name(e.target.value)}/> 
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>NDC</Form.Label>
                        <Form.Control type = 'string' value = {ndc} onChange = {(e)=> setNdc(e.target.value)}/> 
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Dosage</Form.Label>
                        <Form.Control type = 'string' value = {dosage} onChange = {(e)=> setDosage(e.target.value)}/> 
                    </Form.Group>                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Vessel</Form.Label>
                        <Form.Control type = 'string' value = {vessel} onChange = {(e)=> setVessel(e.target.value)}/> 
                    </Form.Group>                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Volume</Form.Label>
                        <Form.Control type = 'string' value = {volume} onChange = {(e)=> setVolume(e.target.value)}/> 
                    </Form.Group>                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Lot Number</Form.Label>
                        <Form.Control type = 'string' value = {lot_number} onChange = {(e)=> setLot_number(e.target.value)}/> 
                    </Form.Group>                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Expiration</Form.Label>
                        <Form.Control type = 'date' value = {expiration} onChange = {(e)=> setExpiration(e.target.value)}/> 
                    </Form.Group>                    <Form.Group  className = 'mb-3' >
                        <Form.Label>SIG</Form.Label>
                        <Form.Control type = 'string' value = {sig} onChange = {(e)=> setSig(e.target.value)}/> 
                    </Form.Group>                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Frequency</Form.Label>
                        <Form.Control type = 'string' value = {frequency} onChange = {(e)=> setFrequency(e.target.value)}/> 
                    </Form.Group>                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Route</Form.Label>
                        <Form.Control type = 'string' value = {route} onChange = {(e)=> setRoute(e.target.value)}/> 
                    </Form.Group>                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Ordering Doctor</Form.Label>
                        <Form.Control type = 'string' value = {ordering_doctor} onChange = {(e)=> setOrdering_doctor(e.target.value)}/> 
                    </Form.Group>                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Ordering Doctor Phone Number</Form.Label>
                        <Form.Control type = 'string' value = {ordering_doctor_phone_number} onChange = {(e)=> setOrdering_doctor_phone_number(e.target.value)}/> 
                    </Form.Group>                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Indication</Form.Label>
                        <Form.Control type = 'string' value = {indication} onChange = {(e)=> setIndication(e.target.value)}/> 
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className = 'btn btn-secondary' onClick ={handleClose}>Cancel</button>
                <button type = 'submit' className = 'btn btn-warning' onClick = {handleSubmit}>Add RX</button>
            </Modal.Footer>
        </Modal>
    </>
     );
}
 
export default AddNewRx;