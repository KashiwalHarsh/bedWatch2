import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import PatientCard from "../Components/PatientCard/PatientCard";
import "./home.css";
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
        <Navbar />
        <PatientCard state={state} setState={setState} />
      </div>
    </>
  );
}
