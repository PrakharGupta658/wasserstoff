import React from "react";
import LeftCardFirst from "./DashboardLeftSection/LeftCardFirst";
import LeftCardSecond from "./DashboardLeftSection/LeftCardSecond";
import LeftCardThird from "./DashboardLeftSection/LeftCardThird";
import DashRight from "./RightSide/RightSide";

function Dashboard() {
  return (
    <>
      <div style={{ height: "100vh", backgroundColor: "rgb(251 251 251)"}}>
         <div style={{fontSize:"25px" , marginLeft:"50px" , fontFamily: "Roboto,sansSerif"}}>
            Design faster
         </div>
          <div style={{marginLeft:"50px"  , display:"grid" , rowGap:"20px"}}>
            <LeftCardFirst />
            <LeftCardSecond />
            <LeftCardThird/>
          </div>
          <div className="Right__section">
            <DashRight />
          </div>
        
      </div>
    </>
  );
}

export default Dashboard;
