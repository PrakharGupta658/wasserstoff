import React from "react";

import Sidebar from "./Sidebar";
import DemoGridMap from "../AntComponents/WorldMap";


function Overview() {
  return (
    <>
      <div style={{ height: "100vh", backgroundColor: "#E2E4F0"}}>
        
          <div style={{ display: "flex" , columnGap:"350px" }}>
            <Sidebar />
           <DemoGridMap/>
          </div>
      
      </div>
    </>
  );
}

export default Overview;
