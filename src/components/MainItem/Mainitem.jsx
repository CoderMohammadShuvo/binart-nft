import React from "react";
import Main from "../Main/Main";
import Navbar from "../Navbar/Navbar";
import "./MainItem.css";

export default function Mainitem() {
  return (
    <div className="main">
      <Navbar />
      <Main />
    </div>
  );
}
