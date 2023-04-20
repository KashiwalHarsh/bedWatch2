import React from 'react'
import './PatientNavbar.css'
export default function PatientNavbar(props) {
  return (
    <div className='PatientNavbar'>

        <div className="left" style={props.state?{color:"rgb(39, 14, 39)"}:{color:'white'}}>
        <h3><i class="fa-solid fa-arrow-left"></i></h3>
            <h1>Patient Card</h1>
          <div className="switch" style={props.state?{border:'1px solid black'}:{border:"1px solid white"}}>

              <div className={props.state?'circle':'circle active'} 
            style={props.state?{backgroundColor:"black"}:{backgroundColor:'white'}}
            onClick={()=>props.setState(!props.state)}></div>
          </div>

        </div>
        <div className="right">
           <div className="head" style={props.state?{color:"rgb(39, 14, 39)"}:{color:'white'}}>
           <h3>Appointments history</h3> 
           <span><i class="fa-solid  icon fa-sort-down"></i></span>
</div>
           <div className="head2" style={props.state?{backgroundColor:"rgb(39, 14, 39) ",color:"white"}:{backgroundColor:"white",color:"rgb(39, 14, 39)"}}>
           <span><i class="fa-solid icon fa-plus"></i></span>
           <h3>New Patient</h3>
           </div>

           <div className="head3">
               <div className='button'><i class="fa-solid icon fa-bell"></i>
               <span></span></div>
            

               <img src="https://cdn-icons-png.flaticon.com/512/194/194915.png" alt="" />
           </div>
           </div>

        </div>
    
  )
}
