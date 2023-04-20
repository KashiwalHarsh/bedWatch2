import React, { useEffect, useState } from "react";
import PatientNavbar from "../Patientnavbar/PatientNavbar";
import Detail from "../Detail/Detail";
export default function PatientCard({ state, setState, pData }) {
  const [patientData, setPatientData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:4000/patientdata");
        const data = await response.json();
        setPatientData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div className="patientcard">
      <PatientNavbar state={state} setState={setState} />
      {isLoading ? (
        <>
          <div>Loading...</div>
        </>
      ) : (
        patientData.map((item, index) => {
          return <Detail pData={item} state={state} setState={setState} />;
        })
      )}
    </div>
  );
}
