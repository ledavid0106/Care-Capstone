import React, {useState, useEffect} from 'react';
import axios from 'axios';


const MedicationPage = () => {
    const [medication, setMedication] = useState([])
    
    useEffect(()=> {
        axios
            .get(`https://api.fda.gov/drug/ndc.json?search=generic_name:"Bupropion"&limit=5`)
            .then(response=>{
                console.log(response.data.results)
                setMedication(response.data)
            })
            .catch(error=>{
                console.log(error)
            })
    })

    // async function testing(){
    //     const response = await axios.get(`https://api.fda.gov/drug/ndc.json?search=generic_name:"Bupropion"&limit=5`)
    //     console.log(response.data)
    //     setMedication(response.data)
    // }
    
    return ( 
        <div>{medication}</div>
     );
}
 
export default MedicationPage;