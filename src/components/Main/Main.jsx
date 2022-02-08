import React from "react";
import "./Main.css";
import Models from "../../assets/Models.svg";
import Fully from "../../assets/Fully.svg";
import MainLogo from "../../assets/Group 36609.svg";

export default function Main() {
  return (
    <div className="main">
      <div className="firstLine">
        <h1 className="mainTitle">Abstract</h1>
        <img src={Models} alt="" />
      </div>
      <div className="secondLine">
        <img style={{ marginRight: "40px" }} src={Fully} alt="" />
        <h1 className="mainTitle">decentralised</h1>
      </div>
      <p className="mainPara">
        Marketplace for abstract models collection. <br /> Come for the
        protocol. Stay for Design
      </p>
      <img
        style={{ marginTop: "70px" }}
        src={MainLogo}
        alt=""
        id="headerBigLogo"
      />
    </div>
  );
}
