import PatientButton from "../PatientButton/PatientButton";



const PatientEntries = ({patients}) => {
    return ( 
        <>
            <td>{patients.id}</td>
            <td>{patients.first_name}</td>
            <td>{patients.middle_name}</td>
            <td>{patients.last_name}</td>
            <td>{patients.sex}</td>
            <td>{patients.dob}</td>
            <td>{patients.weight}</td>
            <td>{patients.height}</td>
            <td>{patients.allergies}</td>
            <td>{patients.email}</td>
            <PatientButton patient={patients}/>
        </>
     );
}
 
export default PatientEntries;