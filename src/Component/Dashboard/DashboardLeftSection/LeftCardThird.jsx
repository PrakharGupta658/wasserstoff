import React from "react";
import "./LeftCardThird.css";

function LeftCardThird() {
  return (
    <>
      <div className="card-container-third">
        <div className="card-row-third">
          <div className="card_third">Travel</div>
          <div className="card_third" style={{color:"gray"}}>760</div>
          <div className="card_third">2,540</div>
          <div className="card_third">+</div>
        </div>
        <div className="card-row-third">
          <div className="card_third">Presentation</div>
          <div className="card_third" style={{color:"gray"}}>650</div>
          <div className="card_third">2,304</div>
          <div className="card_third">+</div>
        </div>
        <div className="card-row-third">
          <div className="card_third">Business</div>
          <div className="card_third" style={{color:"gray"}}>612</div>
          <div className="card_third">2,140</div>
          <div className="card_third">+</div>
        </div>
      </div>
    </>
  );
}

export default LeftCardThird;
