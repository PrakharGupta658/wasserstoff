import React from "react";
import "./LeftCardSecond.css";

function LeftCardSecond() {
  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col">
            <p style={{fontWeight:"100"}}>Total Earnings</p>
          </div>
          <div className="col">
            <h2>
              $12,875 <span className="increase">+10%</span>
            </h2>
          </div>
          <div className="col">
            <p style={{fontSize:"12px"}}>Compared to $21,490 last year</p>
          </div>
        </div>
        <div style={{borderBottom:"1px solid  #6B5ED2"}}></div>
        <div className="row">
          <div className="col">
            <p style={{fontWeight:"100"}}>Sales</p>
          </div>
          <div className="col">
            <h2>
              $43,123 <span className="increase">+12%</span>
            </h2>
          </div>
          <div className="col">
            <p style={{fontSize:"12px"}}>Compared to $21,490 last year</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftCardSecond;
