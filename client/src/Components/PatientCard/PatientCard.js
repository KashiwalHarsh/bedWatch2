import React from 'react'
import './PatientCard.css'
export default function PatientCard() {
  return (
    <div>
    <div className='userdetail'> 
    <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="" className='userimage' />

    <div className="userdetailname">
        <div className="namedetails">
            <h2>Name</h2>
            <h4>:</h4>
            <h3>Karan Arora</h3>
        </div>
        <div className="namedetails">
            <h2>Phone Number</h2>
            <h4>:</h4>
            <h3>98989823</h3>
        </div>
        <div className="namedetails">
            <h2>Age</h2>
            <h4>:</h4>
            <h3>38 years old</h3>
        </div>
        <div className="namedetails">
            <h2>Blood type</h2>
            <h4>:</h4>
            <h3>A+</h3>
        </div>
        <div className="namedetails">
            <h2>Height</h2>
            <h4>:</h4>
            <h3>185 Centimeter</h3>
        </div>
        <div className="namedetails">
            <h2>Weight</h2>
            <h4>:</h4>
            <h3>83 Kg</h3>
        </div>
        <div className="namedetails">
            <h2>Doctor Assigned</h2>
            <h4>:</h4>
            <h3>Dr. Harsh</h3>
        </div>
        <div className="namedetails">
            <h2>Medical Condition</h2>
            <h4>:</h4>
            <h3>Asthma,Alergies,Coronary,Heart Disease</h3>
        </div>
    </div>
    </div>
    <div className='nextBox'> 
    <div className='nextItem'>
        <div className="detail">
            <h2>Allocate Bed</h2>
            <h4>:</h4>
            <h3>QR</h3>
        </div>
        <div className="detail">
            <h2>Deallocate Bed</h2>
            <h4>:</h4>
            <h3>QR</h3>
        </div>      
    </div>
    </div>
    </div>
  )
}