import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';



const AddNewPatient = () => {
    const [show,setShow] = useState(false);
    const [user, token] = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const handleShow = () =>setShow(true);
    const handleClose = () =>setShow(false);
    const [patients, setpatients] = useState([])
    const [first_name, setFirst_name] = useState([])
    const [middle_name, setMiddle_name] = useState([])
    const [last_name, setLast_name] = useState([])
    const [sex, setSex] = useState([])
    const [dob, setdob] = useState([])
    const [weight, setWeight] = useState([])
    const [height, setHeight] = useState([])
    const [allergies, setAllergies] = useState([])
    const [email, setemail] = useState([])


    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/patient_profile/all/",
                {headers: {Authorization: "Bearer " + token,}})
            .then(response=> {
                // console.log("pt",response.data)
                setpatients(response.data)
                setIsError(false)
                // console.log(patients)
            })
        }, [token])
    

    async function addPt(Rx) {
        await axios.post(`http://127.0.0.1:8000/api/patient_profile/`, 
                        Rx,
                        {headers: {Authorization: "Bearer " + token,}}
                        )
    }

    const handleSubmit = () => {
        const newPt = {first_name:first_name , 
            middle_name:middle_name, last_name:last_name, 
            sex:sex, dob:dob, weight:weight,
            height:height, allergies:allergies, email:email
        }
        console.log(newPt)    
        addPt(newPt)
        window.location.reload(false)
        handleClose()
    }

    return ( 
        <>
        <button className = "btn btn-dark shadow" onClick = {handleShow}>Add Patient</button>
        <Modal show = {show} onHide = {handleClose}>
            <Modal.Header className = 'bp' closeButton>
                <Modal.Title className='white'>New Patient</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className = 'm-3'>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type = 'string' value = {first_name} onChange = {(e)=> setFirst_name(e.target.value)}/> 
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control type = 'string' value = {middle_name} onChange = {(e)=> setMiddle_name(e.target.value)}/> 
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type = 'string' value = {last_name} onChange = {(e)=> setLast_name(e.target.value)}/> 
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Sex (assigned at birth): </Form.Label>
                        <select onChange={(e)=>setSex(e.target.value)}>
                            <option value="Sex">Sex</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>  
                    </Form.Group>  
                    <Form.Group>
                        <Form.Label>DOB</Form.Label>
                        <Form.Control type = 'date' value = {dob} onChange = {(e)=> setdob(e.target.value)}/> 
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Weight(lbs)</Form.Label>
                        <Form.Control type = 'number' value = {weight} onChange = {(e)=> setWeight(e.target.value)}/> 
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Height(cm):</Form.Label>
                        <Form.Control type = 'int' value = {height} onChange = {(e)=> setHeight(e.target.value)}/> 
                    </Form.Group>                                        
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Allergies</Form.Label>
                        <Form.Control type = 'string' value = {allergies} onChange = {(e)=> setAllergies(e.target.value)}/> 
                    </Form.Group>                 
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = 'string' value = {email} onChange = {(e)=> setemail(e.target.value)}/> 
                    </Form.Group>                 
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className = 'btn btn-secondary' onClick ={handleClose}>Cancel</button>
                <button type = 'submit' className = 'btn btn-warning' onClick = {handleSubmit}>Add Patient</button>
            </Modal.Footer>
        </Modal>
    </>
     );
}
 
export default AddNewPatient;