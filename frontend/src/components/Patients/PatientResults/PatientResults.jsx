import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import React, {useState, useEffect} from 'react';
import PatientEntries from "../PatientEntries/PatientEntries";
import AddNewPatient from "../AddNewPatient/AddNewPatient";


const PatientResults = () => {
    const [patients, setPatients] = useState([])
    const [user, token] = useAuth();

    useEffect(()=> {
        axios
            .get(`http://127.0.0.1:8000/api/patient_profile/all/`,{
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
            .then(response=> {
                setPatients(response.data)
                console.log(response.data)
            })
            .catch(error=>{
                console.log(error)
            })
    },[])



    return ( 
        <div >
            <AddNewPatient/>
            <table className="table table-dark table-stdiped table-bordered table-hover ">
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Sex</th>
                        <th>DOB</th>
                        <th>Weight</th>
                        <th>Height</th>
                        <th>Allergies</th>
                        <th>Email</th>
                    </tr>  
                </thead>
                <tbody>
                    {patients.map((pt)=>{
                        return (
                            <tr>
                                <PatientEntries patients={pt}/>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
     );
}
 
export default PatientResults;