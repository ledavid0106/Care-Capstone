import VerifyRxButton from "../VerifyRxButton/VerifyRxButton";

const VRxEntries = ({prescription}) => {
    let rxactive = ""
    if (prescription.active === true) {
        rxactive = "Active"
    } else {
        rxactive = "Discontinued"
    }
    return ( 
            <>
                <VerifyRxButton RxId={prescription}/>
                <td>{prescription.id}</td>
                <td>{rxactive}</td>
                <td>{prescription.patient_first_name}</td>
                <td>{prescription.patient_middle_name}</td>
                <td>{prescription.patient_last_name}</td>
                <td>{prescription.patient_dob}</td>
                <td>{prescription.generic_name}</td>
                <td>{prescription.ndc}</td>
                <td>{prescription.dosage}</td>
                <td>{prescription.vessel}</td>
                <td>{prescription.volume}</td>
                <td>{prescription.sig}</td>
                <td>{prescription.frequency}</td>
                <td>{prescription.route}</td>
                <td>{prescription.ordering_doctor}</td>
                <td>{prescription.ordering_doctor_phone_number}</td>
                <td>{prescription.indication}</td>
            </>
     );
}
 
export default VRxEntries;