import axios from 'axios';
import React, {useState, useEffect} from 'react';
import useAuth from '../../hooks/useAuth';
import { Button } from "react-bootstrap";
import RxResult from '../../components/RxResult/RxResult';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
// import {useParams} from 'react-router';
// import { Link } from 'react-router-dom';



const PrescriptionPage = () => {
    const [prescription, setPrescription] = useState([])
    const [user, token] = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setPrescription([]);
        axios
            .get("http://127.0.0.1:8000/api/prescription/all/", {
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
            .then(response=> {
                // console.log(response.data)
                createRxRows(response.data)
                setIsError(false)
            })
            .catch(error=>{
                console.log(error)
                setIsError(true)
                setIsLoading(false)
            })
        }, [token])
       


    async function createRxRows(pres) {
        let newRxRow = [];
        for (let i = 0; i < pres.length; i++) {
            const response = await axios
                                    .get("http://127.0.0.1:8000/api/prescription/all/", {
                                        headers: {
                                            Authorization: "Bearer " + token,
                                          }
                                    })
            // console.log("imworking",response.data[i])
            const rxid = response.data[i].id
            let rxactive = ""
            if (response.data[i].active === true){
                 rxactive = "Active"
            } else {
                 rxactive = "Discontinued"
            }
            // console.log("active",response.data[i].active)
            const active = rxactive
            const patient_first_name = response.data[i].patient_first_name
            const patient_middle_name = response.data[i].patient_middle_name
            const patient_last_name = response.data[i].patient_last_name
            const patient_dob = response.data[i].patient_dob
            const generic_name = response.data[i].generic_name
            const ndc = response.data[i].ndc
            const dosage = response.data[i].dosage
            const vessel = response.data[i].vessel
            const volume = response.data[i].volume
            const lot_number = response.data[i].lot_number
            const expiration = response.data[i].expiration
            const sig = response.data[i].sig
            const frequency = response.data[i].frequency
            const route = response.data[i].route
            const ordering_doctor = response.data[i].ordering_doctor
            const ordering_doctor_phone_number = response.data[i].ordering_doctor_phone_number
            const indication = response.data[i].indication

            newRxRow.push({
                rxid,
                active,
                patient_first_name,
                patient_middle_name,
                patient_last_name,
                patient_dob,
                generic_name,
                ndc,
                dosage,
                vessel,
                volume,
                lot_number,
                expiration,
                sig,
                frequency,
                route,
                ordering_doctor,
                ordering_doctor_phone_number,
                indication
            })
            // console.log("test",newRxRow)
        }
        setPrescription(newRxRow)
        setIsLoading(false);
    } if (isError) {
        return <Alert severity="error" className='loading'>No Results found!</Alert>
    }


    return ( 
        <div className="prescriptionpage">
        {isLoading ? <CircularProgress className='loading' color='secondary' /> : null}
        <RxResult prescription={prescription}/>
        </div>
     );
}
 
export default PrescriptionPage;