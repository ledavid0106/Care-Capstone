


const VProdEntries = ({production}) => {
    return ( 
        <>
            <td>{production.id}</td>
            <td>{production.patient.id}</td>
            <td>{production.patient.last_name}</td>
            <td>{production.patient.dob}</td>
            <td>{production.prescription.id}</td>
            <td>{production.prescription_generic_name}</td>
            <td>{production.ndc}</td>
            <td>{production.prescription_dosage}</td>
            <td>{production.lot_number}</td>
            <td>{production.expiration}</td>
        </>
     );
}
 
export default VProdEntries;