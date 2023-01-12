import { Form, Modal } from 'react-bootstrap';
import axios from "axios";
import React, {useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import "./VerifyRxButton.css"

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
    let displayalert = `Allergies: ${RxId.patient.allergies} \n`


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
        window.location.reload(false)
        handleClose()
    }
    // console.log("check",RxId)
    async function interactions2() {
        const response = await axios.get(`http://127.0.0.1:8000/api/prescription/all/`,
                                        {headers: {Authorization: "Bearer " + token,}})
        let filtered = response.data.filter(e=>e.patient.id==RxId.patient.id)
        console.log("filter",filtered)
        let ndcblank = [RxId.ndc] 
        filtered.map(pt=>{
            ndcblank.push(pt.ndc)})
        console.log(ndcblank)
        let rxcuilist = []
        for (let i = 0; i<ndcblank.length; i++) {
            // console.log("ndc",ndclist[i])
            const findrxcui = await axios.get(`https://api.fda.gov/drug/ndc.json?search=product_ndc:"${ndcblank[i]}"&limit=1`)
            for (let y = 0; y<findrxcui.data.results[0].openfda.rxcui.length; y++){
                // console.log('rxcui',findrxcui.data.results[0].openfda.rxcui)
                rxcuilist.push(findrxcui.data.results[0].openfda.rxcui[y])
            }
        }
        let druglist = `${rxcuilist[0]}`
        for (let z=1; z<rxcuilist.length; z++) {
            druglist+=`+${rxcuilist[z]}`
        }
        const findinteractions = await axios.get(` https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${druglist}`)
        let definelist = []
        console.log(findinteractions)
        definelist = findinteractions.data.fullInteractionTypeGroup[0].fullInteractionType
        const interactlist = []
        for (let q = 0; q <definelist.length; q++){
            // console.log("define1",definelist[q].interactionPair[0].severity)
            // console.log("define1",definelist[q].interactionPair[0].description)   
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
        console.log("display",displayalert)
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
                `)
                break    
            }
            }
        }
        alert(displayalert)

    }


    return ( 
        <>
            <button onClick={handleShow} className="btn btn-success" style={{width: "100%"}}>Verify</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Your Initials to Verify</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <button onClick={interactions2}>Interactions</button>
                    <Form>
                        <Form.Group>
                            <Form.Label>Acknowledgment of Interactions And Verification: </Form.Label>
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