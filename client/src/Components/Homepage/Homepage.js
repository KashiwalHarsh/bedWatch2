import React from "react";
import "./Homepage.css";
import bed from "../utils/bed.png";
export default function Homepage() {
  const handleClick = () => {};
  return (
    <div className="Homepage">
      <div className="homeContainer">
        <nav>
            <div></div>
          <div>Welcome to BedWatch</div>
          <div><button onClick={handleClick}>Login</button></div>
        </nav>
      </div>
      <div className="Mainsection">
        <div className="mainleft">
          Here you can check the bed availability in the hospital
        </div>
        <div className="mainright">
          <img src={bed} alt="" />
        </div>
      </div>
      <div>
        <div>Number of Beds Availble</div>
        <div>Number of Beds Occupied</div>
      </div>
    </div>
  );
}
