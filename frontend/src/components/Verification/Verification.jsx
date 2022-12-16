import axios from "axios";
import React, {useState, useEffect} from 'react';
import useAuth from "../../hooks/useAuth";
import VProdEntries from "./VProdEntries/VProdEntries";
import VRxEntries from "./VRxEntries/VRxEntries";
import "./Verification.css"

const VerificationProcess = () => {
    const [unverifiedRx, setUnverifiedRx] = useState([])
    const [unverifiedProduction, setUnverifiedProduction] = useState([])
    const [user, token] = useAuth();
    
    useEffect(()=>{
        getAUVRx();
        getAUVProd();
    },[])

    async function getAUVRx(){
        const response = await axios.get("http://127.0.0.1:8000/api/prescription/all/",
                                        {headers: {Authorization: "Bearer " + token,}})
        console.log(response.data)
        let te = response.data.filter(e=>e.verified==null)
        console.log("te",te)
        setUnverifiedRx(te)
        
    }
    async function getAUVProd(){
        const response = await axios.get("http://127.0.0.1:8000/api/production/all/",
                                        {headers: {Authorization: "Bearer " + token,}})
        console.log(response.data)
        let mp = response.data.filter(e=>e.verified==null)
        console.log("mp",mp)
        setUnverifiedProduction(mp)
        }
    

    return ( 
        <div className="bigbigtable">
            <div > <h2 className="rx">Unverified Prescriptions</h2>
                <table className="table table-dark table-stdiped table-bordered table-hover ">
                    <thead>
                        <tr>
                            <th>Verify</th>
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
                        {unverifiedRx.map((rx)=>{
                            return (
                                <tr>
                                    <VRxEntries prescription={rx}/>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
            <div> <h2 className="prod">Unverified Production</h2>
            <table className="table table-dark table-striped table-bordered table-hover ">
                <thead >
                    <tr>
                        <th style={{textAlign: "center"}}>Verify</th>
                        <th>Production ID</th>
                        <th>Patient ID</th>
                        <th>Patient Last Name</th>
                        <th>Patient DOB</th>
                        <th>Prescription ID</th>
                        <th>Medication Generic Name</th>
                        <th>NDC</th>
                        <th>Dosage</th>
                        <th>Lot-Number</th>
                        <th>Expiration</th>
                    </tr>  
                </thead>
                <tbody>
                    {unverifiedProduction.map((rx)=>{
                        return (
                            <tr>
                                <VProdEntries production={rx} />
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
        </div>
     );
}
 
export default VerificationProcess;