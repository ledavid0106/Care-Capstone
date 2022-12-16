import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";



const PharmacistRoute = ({ children }) => {
  const [user] = useAuth();
  return user.is_Pharmacist ? children : <Navigate to="/" />;
};

export default PharmacistRoute;


