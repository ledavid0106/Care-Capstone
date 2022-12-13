import "./RxResult.css"
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import RxEntries from "../RxEntries/RxEntries";
import AddNewRx from "../AddNewRx/AddNewRx";
import React, {useState, useEffect} from 'react';

const RxResult = ({prescription, setPrescription}) => {
    const [user, token] = useAuth();
    async function getAllRx() {
        axios
        .get("http://127.0.0.1:8000/api/prescription/all/", {
            headers: {
              Authorization: "Bearer " + token,
            },
        })
        
    }
    return ( 
        <div className="RxResult">
        <AddNewRx getAllRx={getAllRx}/>
        <table className="table table-dark table-stdiped table-bordered table-hover ">
            <thead>
                <tr>
                    <th>RxID</th>
                    <th>Active Status</th>
                    <th>Patient First Name</th>
                    <th>Patient Middle Name</th>
                    <th>Patient Last Name</th>
                    <th>Patient DOB</th>
                    <th>Medication Generic Name</th>
                    <th>NDC</th>
                    <th>Dosage</th>
                    <th>Vessel</th>
                    <th>Volume</th>
                    <th>Sig</th>
                    <th>Frequency</th>
                    <th>Route</th>
                    <th>Ordering Doctor</th>
                    <th>Ordering Doctor Phone Number</th>
                    <th>Indication</th>
                </tr>  
            </thead>
            <tbody>
                {prescription.map((rx)=>{
                    return (
                        <tr>
                            <RxEntries prescription={rx}/>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    </div>
     );
}
 
export default RxResult;