import React from 'react'
import Home from './Pages/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import PatientEntry from "./Components/PatientEntry/PatientEntry";
import PatientCard from "./Components/PatientCard/PatientCard";
import Scanner from "./Components/Scanner/Scanner";
import Homepage from "./Components/Homepage/Homepage";

export default function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/patient/:id" element={<PatientCard />} />
            <Route exact path="/patients" element={<Home />} />
            <Route exact path="/PatientEntry" element={<PatientEntry />} />
            {/* <Route exact path="/scan" element={<Scanner />} /> */}
            {/* <Route exact path="/" element={<Homepage />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

