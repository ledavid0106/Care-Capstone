import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';



const AddNewProduction = () => {
    const [show,setShow] = useState(false);
    const [user, token] = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const handleShow = () =>setShow(true);
    const handleClose = () =>setShow(false);
    const [patients, setpatients] = useState([])

    const [rx, setRx] = useState([])
    const [production, setProduction] = useState([])
    const [search, setSearch] = useState([])
    const [patient_id, setpatient_ID] = useState([])
    const [ndc, setNdc] = useState("")
    const [prescription_generic_name, setprescription_generic_name] = useState("")
    const [prescription_id, setprescription_id] = useState("")
    const [prescription_dosage, setprescription_dosage] = useState("")
    const [lot_number, setLot_number] = useState("")
    const [expiration, setExpiration] = useState("")


    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/production/all/",
                {headers: {Authorization: "Bearer " + token,}})
            .then(response=> {
                // console.log('prod',response.data)
                setProduction(response.data)
                setIsError(false)
                // console.log(patients)
            })
        axios
            .get("http://127.0.0.1:8000/api/patient_profile/all/",
                {headers: {Authorization: "Bearer " + token,}})
            .then(response=> {
                // console.log("pt",response.data)
                setpatients(response.data)
                setIsError(false)
                // console.log(patients)
            })
        axios
            .get("http://127.0.0.1:8000/api/prescription/all/",
                {headers: {Authorization: "Bearer " + token,}})
            .then(response=> {
                // console.log("rx",response.data)
                setRx(response.data)
                setIsError(false)
                // console.log(patients)
            })
        axios
            .get(`https://api.fda.gov/drug/ndc.json?search=generic_name:"Bupropion"&limit=10`)
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
    

    async function addProduction(Rx) {
        await axios.post(`http://127.0.0.1:8000/api/production/`, 
                        Rx,
                        {headers: {Authorization: "Bearer " + token,}}
                        )
    }

    const handleSubmit = () => {
        const newProd = {patient_id:patient_id , 
            prescription_id:prescription_id, ndc:ndc, 
            prescription_generic_name:prescription_generic_name,
            prescription_dosage:prescription_dosage,
            lot_number:lot_number,
            expiration:expiration
        }
        console.log(newProd)    
        addProduction(newProd)
        handleClose()
    }

    return ( 
        <>
        <button className = "btn btn-dark shadow" onClick = {handleShow}>Add Production</button>
        <Modal show = {show} onHide = {handleClose}>
            <Modal.Header className = 'bp' closeButton>
                <Modal.Title className='white'>New Production</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className = 'm-3'>
                    <Form.Group>
                    <Form.Label>Patient ID</Form.Label>
                        <select onChange={(e)=>setpatient_ID(e.target.value)}>
                            {patients.map(pt=>{
                                return <option value={pt.id}>{pt.id} {pt.first_name} {pt.last_name} {pt.dob}</option>
                            })}
                        </select>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Prescription ID</Form.Label>
                        <select onChange={(e)=>setprescription_id(e.target.value)}>
                            {rx.map(pt=>{
                                return <option value={pt.id}>{pt.id} {pt.generic_name} {pt.patient_dob}</option>
                            })}
                        </select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>NDC</Form.Label>
                            <select onChange={(e)=>setNdc(e.target.value)}>
                                {search.map(sx=>{
                                    return <option value={sx.product_ndc}>{sx.product_ndc} {sx.generic_name} {sx.active_ingredients[0]["strength"]} {sx.dosage_form}</option>
                                })}
                            </select>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Medication Generic Name</Form.Label>
                        <select onChange={(e)=>setprescription_generic_name(e.target.value)}>
                            {rx.map(pt=>{
                                return <option value={pt.generic_name}>{pt.id} {pt.generic_name} {pt.patient_dob}</option>
                            })}
                        </select>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Medication Dosage</Form.Label>
                        <select onChange={(e)=>setprescription_dosage(e.target.value)}>
                            {rx.map(pt=>{
                                return <option value={pt.dosage}>{pt.dosage}</option>
                            })}
                        </select>
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Lot Number</Form.Label>
                        <Form.Control type = 'string' value = {lot_number} onChange = {(e)=> setLot_number(e.target.value)}/> 
                    </Form.Group>                                        
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Expiration</Form.Label>
                        <Form.Control type = 'date' value = {expiration} onChange = {(e)=> setExpiration(e.target.value)}/> 
                    </Form.Group>                 
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className = 'btn btn-secondary' onClick ={handleClose}>Cancel</button>
                <button type = 'submit' className = 'btn btn-warning' onClick = {handleSubmit}>Add Production</button>
            </Modal.Footer>
        </Modal>
    </>
     );
}
 
export default AddNewProduction;