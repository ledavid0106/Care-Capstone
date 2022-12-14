import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

import './AddNewRx.css';


const AddNewRx = ({getAllRx}) => {
    const [show,setShow] = useState(false);
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
    const [user, token] = useAuth();
    const [patients, setpatients] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [search, setSearch] = useState([])
    const handleShow = () =>setShow(true);
    const handleClose = () =>setShow(false);
    const [drugsearch, setDrugSearch] = useState("")
    const [inputSearch, setInputSearch] = useState('');

    useEffect(() => {
        
        axios
            .get("http://127.0.0.1:8000/api/patient_profile/all/",
                {headers: {Authorization: "Bearer " + token,}})
            .then(response=> {
                // console.log(response.data)
                setpatients(response.data)
                setIsError(false)
                // console.log(patients)
            })
        axios
            .get(`https://api.fda.gov/drug/ndc.json?search=generic_name:"${drugsearch}"&limit=10`)
            .then(response=> { 
                // console.log(response.data.results)
                setSearch(response.data.results)
                setIsError(false)
            })
            .catch(error=>{
                // console.log(error)
                setIsError(true)
                setIsLoading(false)
            })
        }, [token])
    

    async function addRx(Rx) {
        const response = await axios.post(`http://127.0.0.1:8000/api/prescription/`, 
                                        Rx,
                                        {headers: {Authorization: "Bearer " + token,}}
                                        )
        if (response.status === 201) {
             getAllRx()
        }
    }

    const handleSubmit = () => {
        const newRx = {active:active, patient_id:patient_id ,patient_first_name:patient_first_name, 
            patient_middle_name:patient_middle_name, patient_last_name:patient_last_name, 
            patient_dob:patient_dob, generic_name:generic_name, ndc:ndc, dosage:dosage, 
            vessel:vessel, volume:volume, sig:sig, frequency:frequency, route:route, ordering_doctor:ordering_doctor, 
            ordering_doctor_phone_number:ordering_doctor_phone_number, indication:indication}
        console.log(newRx)    
        addRx(newRx)
        handleClose()
    }

    const handleChange = event => {
        if (event.target.checked) {
          console.log('✅ Checkbox is checked');
        } else {
          console.log('⛔️ Checkbox is NOT checked');
        }
        setActive(current => !current);
      };
      function drugSearch(drug) {
        setDrugSearch(drug)
      }
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
                        value={active}
                        onChange={handleChange}
                        id="active"
                        name="Active"
                    />
                    <label for="active" id="active_label">Active</label>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Patient ID</Form.Label>
                        <select onChange={(e)=>setpatient_ID(e.target.value)}>
                            {patients.map(pt=>{
                                return <option value={pt.id}>{pt.id} {pt.first_name} {pt.last_name} {pt.dob}</option>
                            })}
                        </select>
                    </Form.Group>
                    {/* <Form.Group  className = 'mb-3' >
                        <Form.Label>Medication Search</Form.Label>
                        <input type = 'text' value={drugsearch} onKeyPress = {drugSearch(this.value)}/> 
                    </Form.Group>     */}
                    <Form.Group>
                        <Form.Label>NDC</Form.Label>
                            <select onChange={(e)=>setNdc(e.target.value)}>
                                {search.map(sx=>{
                                    return <option value={sx.product_ndc}>{sx.product_ndc} {sx.generic_name} {sx.active_ingredients[0]["strength"]} {sx.dosage_form}</option>
                                })}
                            </select>
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Patient First Name</Form.Label>
                        <select onChange={(e)=>setPatient_first_name(e.target.value)}>
                            {patients.map(pt=>{
                                return <option value={pt.first_name}>{pt.first_name} {pt.dob}</option>
                            })}
                        </select> 
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>-Patient Middle Name</Form.Label>
                        <select onChange={(e)=>setPatient_middle_name(e.target.value)}>
                            {patients.map(pt=>{
                                return <option value={pt.middle_name}>{pt.first_name} {pt.dob}</option>
                            })}
                        </select>                     
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Patient Last Name</Form.Label>
                        <select onChange={(e)=>setPatient_last_name(e.target.value)}>
                            {patients.map(pt=>{
                                return <option value={pt.last_name}>{pt.first_name} {pt.dob}</option>
                            })}
                        </select>                     
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Patient Date Of Birth</Form.Label>
                        <select onChange={(e)=>setPatient_dob(e.target.value)}>
                            {patients.map(pt=>{
                                return <option value={pt.dob}>{pt.first_name} {pt.dob}</option>
                            })}
                        </select>                    
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                    <div>
                        <label> Search <input type='text' onChange={(e) => setDrugSearch(e.target.value)} value={drugsearch}></input></label>
                    </div>
                        <Form.Label>Medication Generic Name</Form.Label>
                        <select onChange={(e)=>setGeneric_name(e.target.value)}>
                                {search.map(sx=>{
                                    return <option value={sx.generic_name}>{sx.product_ndc} {sx.generic_name} {sx.active_ingredients[0]["strength"]} {sx.dosage_form}</option>
                                })}
                            </select>                    
                        </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>NDC</Form.Label>
                        <Form.Control type = 'string' value = {ndc} onChange = {(e)=> setNdc(e.target.value)}/> 
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Dosage</Form.Label>
                        <Form.Control type = 'string' value = {dosage} onChange = {(e)=> setDosage(e.target.value)}/> 
                    </Form.Group>                    
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Vessel: </Form.Label>
                        <select onChange={(e)=>setVessel(e.target.value)}>
                            <option value="Vessel">Vessel</option>
                            <option value="Tablet">Tablet</option>
                            <option value="Capsule">Capsule</option>
                            <option value="Powder">Powder</option>
                            <option value="Reconstitute">Reconstitute</option>
                            <option value="Liquid">Liquid</option>
                        </select>  
                    </Form.Group>                    
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Volume</Form.Label>
                        <Form.Control type = 'string' value = {volume} onChange = {(e)=> setVolume(e.target.value)}/> 
                    </Form.Group>                                        
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>SIG</Form.Label>
                        <Form.Control type = 'string' value = {sig} onChange = {(e)=> setSig(e.target.value)}/> 
                    </Form.Group>                    
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Frequency</Form.Label>
                        <Form.Control type = 'string' value = {frequency} onChange = {(e)=> setFrequency(e.target.value)}/> 
                    </Form.Group>                    
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Route: </Form.Label>
                        <select onChange={(e)=>setRoute(e.target.value)}>
                            <option value="Route">Route</option>
                            <option value="By Mouth">By Mouth</option>
                            <option value="IV">IV</option>
                            <option value="Sublingual">Sublingual</option>
                            <option value="Rectally">Rectally</option>
                            <option value="Vaginally">Vaginally</option>
                        </select>   
                    </Form.Group>                    
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Ordering Doctor</Form.Label>
                        <Form.Control type = 'string' value = {ordering_doctor} onChange = {(e)=> setOrdering_doctor(e.target.value)}/> 
                    </Form.Group>                    
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Ordering Doctor Phone Number</Form.Label>
                        <Form.Control type = 'string' value = {ordering_doctor_phone_number} onChange = {(e)=> setOrdering_doctor_phone_number(e.target.value)}/> 
                    </Form.Group>                    
                    <Form.Group  className = 'mb-3' >
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