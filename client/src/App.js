import React from 'react'
import Home from './Pages/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import PatientEntry from "./Components/PatientEntry/PatientEntry";
import PatientCard from "./Components/PatientCard/PatientCard";

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
          </Routes>
        </Router>
      </div>
    </>
  );
}

