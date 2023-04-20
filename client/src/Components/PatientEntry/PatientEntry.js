import React, { useEffect, useState } from 'react'
import './PatientEntry.css'

export default function Registerpage() {
  const [user, setUser] = useState({
    Name:"",
    Age :"",
    Blood: "",
    Condition:"",
    Doctor:"",
    Height:"",
    PhoneNum:"",
    Weight:""})

  const handlchange = (e)=>{
    e.preventDefault();
    const {name, value} = e.target;
    console.log({name,value})
    setUser({ ...user, [name]: value });
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("handleSubmite ran"+e.target)
    const senddata = async()=>{
      const response = await fetch("http://localhost:4001/patiententry",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name:user.Name,
          PhoneNum:user.PhoneNum,
          Age : user.Age,
          Blood : user.Blood,
          Height : user.Height,
          Weight:user.Weight,
          Doctor : user.Doctor,
          Condition : user.Condition,
        } )
      })
      const data = await response.json();
      console.log(data);
      if(data.status === 200){
        window.location.href = '/patients'
      }

    }
    senddata();
  }
  return (
    <div className='Registerpage'>
    <div className="wrapper">
        <h1>Enter Patient Details</h1>
        <form >
            <input name='Name' value={user.Name} onChange={handlchange} type="text" placeholder='Name' />
            <input name='PhoneNum' value={user.PhoneNum} onChange={handlchange} type="number" placeholder='Phone Number' />
            <input name='Age' value={user.Age} onChange={handlchange} type="text" placeholder='Age' />
            <input name='Blood' value={user.Blood} onChange={handlchange} type="text" placeholder='Blood Group' />
            <input name='Height' value={user.Height} onChange={handlchange} type="text" placeholder='Height' />
            <input name='Weight' value={user.Weight} onChange={handlchange} type="text" placeholder='weight' />
            <input name='Doctor' value={user.Doctor} onChange={handlchange} type="text" placeholder='Doctor Assigned' />
            <textarea id='textArea' name='Condition' value={user.Condition} onChange={handlchange} rows={4}
            cols={37} placeholder='Medical Condition' />
      
            <span style={{fontSize:'12px',margin:'20px 0px',fontWeight:400}}>By creating an account ,I consent to the processing of my personal data in
                accordance with the <b>PRIVACY POLICY</b>
            </span>
            <button type='submit' onClick={handleSubmit} style={{width:'40%',border:'none',padding:"15px 20px",backgroundColor:"teal",color:'white',cursor:"pointer",fontWeight:500
        }}>CREATE</button>
        </form>
    </div>
    </div>
  )
}



