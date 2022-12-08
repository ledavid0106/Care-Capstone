// General Imports
import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import PrescriptionPage from "./pages/PrescriptionPage/PrescriptionPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar fixed="sticky"/>
      <Routes>
        <Route path="/" element={<PrivateRoute><HomePage/></PrivateRoute>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/rx" element={<PrivateRoute><PrescriptionPage/></PrivateRoute>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
