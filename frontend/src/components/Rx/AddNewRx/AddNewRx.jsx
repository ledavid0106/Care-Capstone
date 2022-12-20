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
    const [drugsearch, setDrugSearch] = useState([])
    const [inputSearch, setInputSearch] = useState('');
    const [interactionList, setInteractionList] = useState([])
    const struggle = []
    let displayalert = ""

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/patient_profile/all/",
                {headers: {Authorization: "Bearer " + token,}})
            .then(response=> {
                setpatients(response.data)
                setIsError(false)
            })
            .catch(error=>{
                setIsError(true)
                setIsLoading(false)
            })
        }, [token])
    
    async function getdrug(drugsearch1) {
        axios
            .get(`https://api.fda.gov/drug/ndc.json?search=generic_name:"${drugsearch1}"&limit=20`)
            .then(response=> { 
                setDrugSearch(response.data.results)
                setIsError(false)
            })
            .catch(error=>{
                setIsError(true)
                setIsLoading(false)
            })   
    }

    function testing(gimme) {
        setNdc(gimme)
        theInteractions(gimme)
    }

    async function addRx(Rx) {
        const response = await axios.post(`http://127.0.0.1:8000/api/prescription/`, 
                                        Rx,
                                        {headers: {Authorization: "Bearer " + token,}}
                                        )
        if (response.status === 201) {
             getAllRx()
        }
    }

    async function theHandler(info){
        let filpt = patients.filter(e=>e.id==info)[0]
        setpatient_ID(filpt.id)
        setPatient_first_name(filpt.first_name)
        setPatient_middle_name(filpt.middle_name)
        setPatient_last_name(filpt.last_name)
        setPatient_dob(filpt.dob)
    }

    async function theInteractions(info){
        const response = await axios.get(`http://127.0.0.1:8000/api/prescription/all/`,
                                        {headers: {Authorization: "Bearer " + token,}})
        let filtered = response.data.filter(e=>e.patient.id==patient_id)
        let ndcblank = [info]
        const ndclist = [info]
        filtered.map(pt=>{
            ndcblank.push(pt.ndc)
        })
        let rxcuilist = []
        for (let i = 0; i<ndcblank.length; i++) {
            const findrxcui = await axios.get(`https://api.fda.gov/drug/ndc.json?search=product_ndc:"${ndcblank[i]}"&limit=1`)
            for (let y = 0; y<findrxcui.data.results[0].openfda.rxcui.length; y++){
                rxcuilist.push(findrxcui.data.results[0].openfda.rxcui[y])
            }
        }
        let druglist = `${rxcuilist[0]}`
        for (let z=1; z<rxcuilist.length; z++) {
            druglist+=`+${rxcuilist[z]}`
        }
        // let testing = "207106+152923+656659"
        const findinteractions = await axios.get(` https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${druglist}`)
        let definelist = []
        definelist = findinteractions.data.fullInteractionTypeGroup[0].fullInteractionType
        const interactlist = []
        for (let q = 0; q <definelist.length; q++){
            displayalert += 
                    `\nDrugs: ${definelist[q].interactionPair[0].interactionConcept[0].minConceptItem.name} and ${definelist[q].interactionPair[0].interactionConcept[1].minConceptItem.name} \nSeverity: ${definelist[q].interactionPair[0].severity} \nDescription: ${definelist[q].interactionPair[0].description}
                    `         
            for (let e = 0; e<definelist.length; e++){
                if (definelist[e].interactionPair[0].severity != "N/A" ) {
                    alert(`\nDrugs: ${definelist[e].interactionPair[0].interactionConcept[0].minConceptItem.name} and ${definelist[e].interactionPair[0].interactionConcept[1].minConceptItem.name} \nSeverity: ${definelist[e].interactionPair[0].severity} \nDescription: ${definelist[e].interactionPair[0].description}
                    `)
                    break    
                }   
            }
        }
        let definelist2 = []
        if (findinteractions.data.fullInteractionTypeGroup.length > 1){
            definelist2 = findinteractions.data.fullInteractionTypeGroup[1].fullInteractionType
            const interactlist2 = []
            for (let r = 0; r<definelist2.length; r++){
                console.log("define2",definelist2[r].interactionPair[0])
                console.log("define3",definelist2[r].interactionPair[0].description)
                displayalert += 
                `\nDrugs: ${definelist2[r].interactionPair[0].interactionConcept[0].minConceptItem.name} and ${definelist2[r].interactionPair[0].interactionConcept[1].minConceptItem.name} \nSeverity: ${definelist2[r].interactionPair[0].severity} \nDescription: ${definelist2[r].interactionPair[0].description}
                `
            }
            for (let e = 0; e<definelist2.length; e++){
                if (definelist2[e].interactionPair[0].severity != "N/A") {
                alert(`\nDrugs: ${definelist2[e].interactionPair[0].interactionConcept[0].minConceptItem.name} and ${definelist2[e].interactionPair[0].interactionConcept[1].minConceptItem.name} \nSeverity: ${definelist2[e].interactionPair[0].severity} \nDescription: ${definelist2[e].interactionPair[0].description}
                `)}
                break
            }
        }
        alert(displayalert)
        
    }
    const handleSubmit = () => {
        const newRx = {active:active, patient_id:patient_id ,patient_first_name:patient_first_name, 
            patient_middle_name:patient_middle_name, patient_last_name:patient_last_name, 
            patient_dob:patient_dob, generic_name:generic_name, ndc:ndc, dosage:dosage, 
            vessel:vessel, volume:volume, sig:sig, frequency:frequency, route:route, ordering_doctor:ordering_doctor, 
            ordering_doctor_phone_number:ordering_doctor_phone_number, indication:indication}
        console.log(newRx)    
        addRx(newRx)
        window.location.reload(false)
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

    return ( 
        <>
        <div className='addrx'>
        <button className = "btn btn-dark shadow" variant="primary" onClick = {handleShow}>Add Rx</button>
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
                    <Form.Group  className = 'mb-3' >
                        <Form.Label>Patient </Form.Label>
                        <select onChange={(e)=>theHandler(e.target.value)}  classNames={{
                                control: (state) =>
                                state.isFocused ? 'border-red-600' : 'border-grey-300',
                            }}>
                            {patients.map(pt=>{
                                return <option value={pt.id}>{pt.id} {pt.first_name} {pt.dob}</option>
                            })}
                        </select> 
                    </Form.Group>
                    <Form.Group  className = 'mb-3' >
                    <div>
                        <label> Drug Search <input type='text' onChange={(e) => getdrug(e.target.value)} ></input></label>
                    </div>
                        <Form.Label>Medication Generic Name</Form.Label>
                            <select onChange={(e)=>{setGeneric_name(e.target.value)}} style={{width: "450px"}}>
                                {drugsearch.filter(el=>el.active_ingredients).map(sx=>{
                                    return <option value={sx.generic_name}>{sx.product_ndc} {sx.generic_name} {sx.active_ingredients[0]["strength"]} {sx.dosage_form}</option>
                                })}
                            </select>     
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>NDC: </Form.Label>
                            <select onChange={(e)=>{testing(e.target.value)}} style={{width: "450px"}}>
                                {drugsearch.filter(el=>el.active_ingredients).map(sx=>{
                                    return <option value={sx.product_ndc}>{sx.product_ndc} {sx.pharm_class}</option>
                                })}
                            </select>
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
        </div>
    </>
     );
}
 
export default AddNewRx;