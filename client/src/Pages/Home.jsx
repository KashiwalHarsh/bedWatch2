import React, { useEffect, useState } from "react";
import Patients from "../Components/Patients/Patients";
import "./home.css";
import Navbar from "../Components/Navbar/Navbar";
import PatientNavbar from "../Components/Patientnavbar/PatientNavbar";

export default function Home() {
  const [state, setState] = useState([]);

  return (
    <>
      <div
        className="home"
        style={
          state
            ? { backgroundColor: "rgb(255, 252, 248)" }
            : { backgroundColor: "black" }
        }
      >
        <Patients state={state} setState={setState} />
      </div>  
    </>
  );
}
