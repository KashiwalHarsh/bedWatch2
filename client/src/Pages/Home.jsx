import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Patients from "../Components/Patients/Patients";
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
        <Patients state={state} setState={setState} />
      </div>
    </>
  );
}
