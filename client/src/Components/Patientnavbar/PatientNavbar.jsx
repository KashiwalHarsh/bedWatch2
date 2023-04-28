import React from 'react'
import './PatientNavbar.css'
export default function PatientNavbar(props) {
  return (
    <div className="PatientNavbar">
      <div
        className="left"
        style={props.state ? { color: "rgb(39, 14, 39)" } : { color: "white" }}
      >
        <h3>
          <i class="fa-solid fa-arrow-left"></i>
        </h3>
        <h1>Patient Card</h1>
        <div
          className="switch"
          style={
            props.state
              ? { border: "1px solid black" }
              : { border: "1px solid white" }
          }
        >
          <div
            className={props.state ? "circle" : "circle active"}
            style={
              props.state
                ? { backgroundColor: "black" }
                : { backgroundColor: "white" }
            }
            onClick={() => props.setState(!props.state)}
          ></div>
        </div>
      </div>
      <div className="right">
        <div className="head2">
          <a href="/patientEntry">
            <span>
              <i class="fa-solid icon fa-plus"></i>
            </span>
          </a>
        </div>

        <div className="head3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/194/194915.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
