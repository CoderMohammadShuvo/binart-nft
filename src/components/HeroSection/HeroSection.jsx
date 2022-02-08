import React from "react";
import HeaderSocial from "../HeaderSocial/HeaderSocial";
import Mainitem from "../MainItem/Mainitem";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero">
      <HeaderSocial />
      <Mainitem />
    </div>
  );
}
