import axios from "axios";
import React, {useState, useEffect} from 'react';
import { Form } from 'react-bootstrap';


const NDCFind = ({prescrisxion}) => {

    const [search, setSearch] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // async function getndc() {
    //     const response = await axios.get(`https://api.fda.gov/drug/ndc.json?search=generic_name:"Bupropion"&limit=10`)
    //     setSearch(response.data.results)
    // }
    // useEffect(()=>{
    //     getndc()
    // },)
    
    useEffect(()=> {
        setSearch([]);
        axios
            .get(`https://api.fda.gov/drug/ndc.json?search=generic_name:"Bupropion"&limit=10`)
            .then(response=> { 
                console.log(response.data.results)
                setSearch(response.data.results)
                setIsError(false)
            })
            .catch(error=>{
                console.log(error)
                setIsError(true)
                setIsLoading(false)
            })
    }, [])



    return ( 
        <Form.Group>
        <Form.Label>NDC</Form.Label>
            <select onChange={(e)=>setSearch(e.target.value)}>
                {search.map(sx=>{
                    return <option value={sx.product_ndc}>{sx.product_ndc} {sx.generic_name} {sx.active_ingredients[0]["strength"]} {sx.dosage_form}</option>
                })}
            </select>
        </Form.Group>   
     );
}
 
export default NDCFind;