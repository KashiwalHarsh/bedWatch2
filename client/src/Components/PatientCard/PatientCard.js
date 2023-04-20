import React from 'react'
import './App.css'
export default function Registerpage() {
  return (
    <div className='Registerpage'>
    <div className="wrapper">
        <h1>Enter Patient Details</h1>
        <form >
            <input required type="text" placeholder='Name' />
            <input required type="text" placeholder='Phone Number' />
            <input required type="number" placeholder='Age' />
            <input required type="number" placeholder='Blood Group' />
            <input required type="number" placeholder='Height' />
            <input required type="number" placeholder='weight' />
            <input required type="text" placeholder='Doctor Assigned' />
            <textarea id='textArea' rows={4} required
            cols={37} placeholder='Medical Condition' />
      
            <span style={{fontSize:'12px',margin:'20px 0px',fontWeight:400}}>By creating an account ,I consent to the processing of my personal data in
                accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button style={{width:'40%',border:'none',padding:"15px 20px",backgroundColor:"teal",color:'white',cursor:"pointer",fontWeight:500
        }}>CREATE</button>
        </form>
    </div>
    </div>
  )
}