import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import PatientResults from "../../components/Patients/PatientResults/PatientResults";


const HomePage = () => {
  const [user, token] = useAuth();


    
  return (
    <div>
      <div className="container">
        <h1>Home Page for {user.first_name}!</h1>
      </div>
      <PatientResults/>
    </div>
  );
};

export default HomePage;
