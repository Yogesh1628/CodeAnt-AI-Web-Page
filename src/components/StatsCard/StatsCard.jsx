import React from "react";
import "./StatsCard.css";
import BigLogo from "../../assets/BigLogo.png";
import Logo from "../../assets/codeAnt Logo.png";
import Counts from "./Counts/Counts";
import CircleLogo from "../../assets/Vector.png";

const StatsCard = () => {
  return (
    <div className="stats-container">
      <div className="main-card">
        <div className="main-card-heading">
          <img src={Logo} />
          <p>AI to Detect & Autofix Bad Code</p>
        </div>
        <div style={{ border: "1px solid #E6E8F0" }}></div>
        <div className="stats">
          <Counts count="30+" name="Language Support" />
          <Counts count="10k+" name="Developers" />
          <Counts count="100k+" name="Hours Saved" />
        </div>
      </div>
      <div className="small-card">
        <div className="small-card-top">
          <div className="circle">
            <img src={CircleLogo} />
          </div>
          <div className="small-card-count">
            <p>Issues Fixed</p>
            <h1>500k+</h1>
          </div>
        </div>
        <div style={{height : "100%"}}>
          <div className="percentage">
            <h3>⬆️ 14%</h3>
            <p>This week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
