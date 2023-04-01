import React from "react";
import "./RightSide.css";
import { AiOutlineEye } from "react-icons/ai";
import { RiGlobalLine } from "react-icons/ri";
import { MdBarChart } from "react-icons/md";

import { BarChartOutlined } from "@ant-design/icons";
import DemoScatter from "../../AntComponents/GraphDashboard";

const DashRight = () => {
  return (
    <div className="dashBoard__right">
      {/* timeline */}
      <div className="dashBoard__right-timeline">
      timeline
      </div>

      {/* Circle */}
      <div className="dashBoard__right-parent__circle">
        <div className="dashBoard__right-child__circle">
          <div className="time-period">
            <span>1W</span>
            <span>1M</span>
            <span
              style={{
                backgroundColor: "#3247E5",
                borderRadius: "15px",
                height: "30px",
                width: "60px",
                textAlign: "center",
                color: "white",
                paddingTop: "8px",
              }}
            >
              3M
            </span>
            <span>1Y</span>
            <span>All</span>
          </div>
          <DemoScatter />
        </div>
      </div>

      {/* informers */}
      <div className="dashBoard__right-informer">
        <div className="dashBoard__right-trendGoods">
          <div className="icon">
            <AiOutlineEye style={{ fontSize: "15px", color: "#023AFF" }} />
          </div>
          <p
            style={{
              fontSize: "8px",
              fontFamily: "Roboto,sansSerif",
              fontWeight: "700",
            }}
          >
            TREND GOODS
          </p>
          <p style={{ fontSize: "30px", fontFamily: "Roboto,sansSerif" }}>
            204
          </p>
        </div>
        <div className="dashBoard__right-shoppingViews">
          <div className="icon">
            <RiGlobalLine style={{ fontSize: "15px", color: "#023AFF" }} />
          </div>
          <p
            style={{
              fontSize: "8px",
              fontFamily: "Roboto,sansSerif",
              fontWeight: "700",
            }}
          >
            SHOPPING VIEWS
          </p>
          <p style={{ fontSize: "30px", fontFamily: "Roboto,sansSerif" }}>
            65,540
          </p>
        </div>
        <div className="dashBoard__right-storeDynamics">
          <div className="icon">
            <MdBarChart style={{ fontSize: "15px", color: "#023AFF" }} />
          </div>
          <p
            style={{
              fontSize: "8px",
              fontFamily: "Roboto,sansSerif",
              fontWeight: "700",
            }}
          >
            STORE DYNAMICS
          </p>
          <p style={{ fontSize: "30px", fontFamily: "Roboto,sansSerif" }}>
            204
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashRight;
