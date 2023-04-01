import React from "react";

import Sidebar from "./Sidebar";
import DemoGridMap from "../AntComponents/WorldMap";
import OverviewRight from "./RightSide";


function Overview() {
  return (
    <>
      <div style={{ height: "100vh", backgroundColor: "#E2E4F0"}}>
        
          <div style={{ display: "flex" }}>
            <Sidebar />
           <OverviewRight/>
          </div>
      
      </div>
    </>
  );
}

export default Overview;
