import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import React, {useState, useEffect} from 'react';
import ProductionEntries from "../ProductionEntries/ProductionEntries";
import AddNewProduction from "../AddNewProduction/AddNewProduction";
import "./ProductionResults.css"


const ProductionResult = () => {
    const [production, setProduction] = useState([])
    const [user, token] = useAuth();

    useEffect(()=> {
        axios
            .get(`http://127.0.0.1:8000/api/production/all/`,{
                headers: {
                  Authorization: "Bearer " + token,
                },
            })
            .then(response=> {
                setProduction(response.data)
                // console.log(response.data)
            })
            .catch(error=>{
                console.log(error)
            })
    },[])



    return ( 
        <div className="bigtable">
            <div className="prodbutt"><AddNewProduction/></div>
            <table className="table table-dark table-striped table-bordered table-hover ">
                <thead>
                    <tr>
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
                    {production.map((rx)=>{
                        return (
                            <tr>
                                <ProductionEntries production={rx}/>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
     );
}
 
export default ProductionResult;