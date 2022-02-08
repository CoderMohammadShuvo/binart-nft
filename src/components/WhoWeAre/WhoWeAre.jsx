import React from "react";
import "./WhoWeAre.css";
import Line from "../../assets/Line 1.svg";

export default function WhoWeAre() {
  return (
    <div className="whoWeareMain">
      <div className="whoWeAre">
        <div className="aboutUs">
          <div className="aboutTitle">
            <div className="aboutUsMain">
              <img src={Line} alt="" />
              <p>About Us</p>
            </div>
            <h2>Who We Are</h2>
          </div>
          <div className="aboutUsPara">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum
            </p>
          </div>
        </div>
      </div>
      <div className="secondNumbers">
        <div className="numbers">
          <div className="crafts">
            <h1>10k</h1>
            <h4>NFTs Crafted</h4>
          </div>

          <div className="crafts">
            <h1>67</h1>
            <h4>Artists</h4>
          </div>

          <div className="crafts">
            <h1>761</h1>
            <h4>Collectors</h4>
          </div>

          <div className="crafts" style={{ borderRight: "none" }}>
            <h1>761</h1>
            <h4>Accessories</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
