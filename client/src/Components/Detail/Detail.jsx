import React from 'react'
import './detail.css'
export default function Detail(props) {
  const {
    Age,
    Blood,
    Condition,
    Doctor,
    Height,
    Name,
    PhoneNum,
    Weight,
    _id,
    state,
  } = props.pData;

  const handleCardClick = (id) => {
    window.location.href = `/patient/${id}`;
  };

  let x = state ? { color: "black" } : { color: "white" };
  return (
    <div>
      <div onClick={() => handleCardClick(_id)} className="detail">
        <div className="profile">
          <div className="profiledetail">
            <div className="profileimage">
              <img
                src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                alt=""
              />
              <div className="name">
                <h3>{Name}</h3>
                <p>{Age} years old</p>
              </div>
            </div>
            <div className="profiledetailtype">
              <div className="nameType">
                <h4>height</h4>
                <p>{Height}</p>
              </div>
              <div className="nameType">
                <h4>weight</h4>
                <p>{Weight}</p>
              </div>
              <div className="nameType">
                <h4>Blood type</h4>
                <p>{Blood}</p>
              </div>
            </div>
          </div>
          <div
            className="profileinformation"
            style={
              state
                ? { backgroundColor: "white" }
                : { backgroundColor: "black" }
            }
          >
            <div className="topprofileinformation">
              <div className="wrapper">
                <h4>Phone Number</h4>
                <p style={x}>{PhoneNum}</p>
              </div>
              <div className="wrapper">
                <h4>Passport</h4>
                <p style={x}>{_id}</p>
              </div>
            </div>
            <div className="bottomprofileinformation">
              <div className="wrapper2">
                <h4>Doctor</h4>
                <p style={x}>{Doctor}</p>
              </div>
              <div className="wrapper2">
                <h4>Medical Condition</h4>
                <p style={x}>{Condition}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
