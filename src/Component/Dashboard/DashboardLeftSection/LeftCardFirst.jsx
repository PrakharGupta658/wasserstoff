import React from "react";
import DemoRadialBar from "../../AntComponents/ProgressIcon";
import DemoTinyArea from "../../AntComponents/TinyGraph"



function LeftCardFirst() {
  return (
    <div
      style={{
        width: "15%",
        height: "280px",
        borderRadius: "5px",
        margin: "0",
        backgroundColor:"white",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"

      }}
    >
      <div style={{ padding: "10px" }}>
        <div style={{ display: "flex", justifyContent: "center" , width:"210px" ,  height:"100px"  }}>
          <DemoRadialBar/>
        </div>
        <div
          style={{ textAlign: "center" ,fontFamily: "Roboto,sansSerif"}}
        >
          Total Earning
        </div>
        <h6
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "10px",
            fontSize:"20px"
          }}
        >
          $12,875
        </h6>
        <p
          style={{
            fontSize: "10px",
            textAlign: "center",
            marginBottom: "20px",
            color:"gray"
          }}
        >
          Compressed to $21,537 last year
        </p>
        <div style={{ display: "flex", flexDirection: "column" , marginLeft:"18px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ fontSize: "10px", marginRight: "10px" }}>
                Presentation
              </div>
              <p style={{ fontSize: "10px" , color:"gray" , marginLeft:"20px" }}>234</p>
              <div style={{fontSize:"10px", width: "50px", height: "12px" , marginLeft:"20px"}}>
              <DemoTinyArea/>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ fontSize: "10px", marginRight: "10px" }}>
                Development
              </div>
              <p style={{ fontSize: "10px" , color:"gray" ,marginLeft:"15px"}}>234</p>
              <div style={{fontSize:"10px", width: "50px", height: "12px" , marginLeft:"20px"}}>
              <DemoTinyArea/>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ fontSize: "10px", marginRight: "10px" }}>
                Research
              </div>
              <p style={{ fontSize: "10px" , color:"gray", marginLeft:"32px" }}>234</p>
              <div style={{fontSize:"10px", width: "50px", height: "12px" , marginLeft:"20px"}}>
              <DemoTinyArea/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftCardFirst;