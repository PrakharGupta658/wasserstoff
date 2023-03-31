import React from "react";
import {
  RiseOutlined,
  CrownOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { RingProgress } from "@ant-design/plots";
import "./sidebar.css";
import DemoColumn from "../AntComponents/GraphOverview";
import Footer from "../Footer";

const Sidebar = () => {
  const Ring1 = () => {
    const config = {
      height: 100,
      width: 100,
      autoFit: false,
      percent: 0.27,
      color: ["#333", "#E8EDF3"],
    };
    return <RingProgress {...config} />;
  };
  const Ring2 = () => {
    const config = {
      height: 100,
      width: 100,
      autoFit: false,
      percent: 0.67,
      color: ["#00B929", "#E8EDF3"],
    };
    return <RingProgress {...config} />;
  };

  return (
    <>
      <div
        className="sidebar"
        style={{
          width: "218px",
          height:"100vh",
          // height: "270px",
          // left: "60px",
          // top: "406px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          fontFamily: "Roboto,sansSerif",
        }}
      >
        <div className="sidebar-title">
          <p>WSTF FRONT - END HACKATHON</p>
        </div>

        <div className="sidebar__amount">
          <div className="sidebar-amount__box1">
            <p className="users" style={{ fontWeight: "600" }}>
              All User<span> DETAILS</span>
            </p>
          </div>
          <div className="sidebar-amount__box2">
            <p className="totalUser">2,431,340</p>
          </div>
        </div>

        <div
          style={{
            background: "",
            marginTop: "40px",
            marginLeft: "30px",
            width: "220px",
          }}
        >
          <div
            className="sidebar-side__indicators-box1"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
            }}
          >
            <div
              className="sidebar"
              style={{
                background: "#8676FF",
                marginLeft: "15px",
                width: "60px",
                height: "60px",
                borderRadius: "16px",
              }}
            >
              <RiseOutlined
                style={{
                  paddingTop: "22px",
                  color: "white",
                  fontSize: "1.7rem",
                  marginLeft: "10px",
                }}
              />
            </div>

            <div className="earning">
              <p style={{ fontSize: "15px", marginBottom: "6px" }}>
                Total earning
              </p>
              <p>540,549</p>
            </div>
          </div>

          <div
            className="sidebar-side__indicators-box1"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
            }}
          >
            <div
              className="sidebar"
              style={{
                background: "#66C8FF",
                marginLeft: "15px",
                width: "60px",
                height: "60px",
                borderRadius: "16px",
              }}
            >
              <CrownOutlined
                style={{
                  paddingTop: "22px",
                  color: "white",
                  fontSize: "1.7rem",
                  marginLeft: "10px",
                }}
              />
            </div>

            <div className="sales">
              <p style={{ fontSize: "15px", marginBottom: "6px" }}>Sales</p>
              <p>1,205,677</p>
            </div>
          </div>

          <div
            className="sidebar-side__indicators-box1"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "14px",
            }}
          >
            <div
              className="sidebar"
              style={{
                background: "#FF9066",
                marginLeft: "15px",
                width: "60px",
                height: "60px",
                borderRadius: "16px",
              }}
            >
              <BarChartOutlined
                style={{
                  paddingTop: "22px",
                  color: "white",
                  fontSize: "1.7rem",
                  marginLeft: "10px",
                }}
              />
            </div>

            <div className="purchases">
              <p style={{ fontSize: "15px", marginBottom: "6px" }}>Purchases</p>
              <p>48,430,039</p>
            </div>
          </div>
        </div>

        <div
          className="sidebar-dough"
          style={{
            // background: "#EEF0FA",
            display: "flex",
            justifyContent: "space-between",
            justifyContent: "center",
            marginTop: "40px",
            marginLeft: "30px",
          }}
        >
          <div className="sidebar-dough__bax1">
            <div>{Ring1()}</div>
            <div className="active">
              <p className="num">92,980</p>
              <p>Active users</p>
            </div>
          </div>
          <div className="sidebar-dough__bax2">
            <div>{Ring2()}</div>
            <div className="new">
              <p>22,652</p>
              <p>New users</p>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "62px",
            width: "655%",
            marginTop: "15px",
            backgroundColor: "white",
            marginLeft: "45px",
            marginBottom:"15px",
           
          }}
        >
          <DemoColumn />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
