import React from "react";
import "./AdvantageMinter.css";
import Line from "../../assets/Line 1.svg";
import Mintrs from "../../assets/Minters.svg";

export default function AdvanceMinter() {
  return (
    <div className="advanceMinterMAin">
      <div className="advantageMinter">
        <div className="advantageMinterTitle">
          <div className="sliderTitle" style={{ justifyContent: "left" }}>
            <img src={Line} alt="" />
            <h4>Advantages</h4>
          </div>
          <h2>For Minters</h2>
        </div>
        <img src={Mintrs} alt="" id="advantageMinter" />
      </div>
      <div className="minterAdvantage">
        <div className="advantageFirstline">
          <div className="advantage">
            <h4>01</h4>
            <p>
              Select your <br /> own NFT customization
            </p>
          </div>
          <div className="advantage">
            <h4>02</h4>
            <p>
              Chose your favorite <br />
              Blockchain for Minting
            </p>
          </div>
          <div className="advantage">
            <h4>03</h4>
            <p>Mint price is limited to …</p>
          </div>
        </div>
        <div className="advantageFirstline">
          <div className="advantage">
            <h4>04</h4>
            <p>
              Discounts for Whitelisted <br /> users
            </p>
          </div>
          <div className="advantage">
            <h4>05</h4>
            <p>
              NFTs are sellable in Metadata- <br /> compatible Marketplaces (But{" "}
              <br /> why sell anyway…?)
            </p>
          </div>
          <div className="advantage">
            <h4>06</h4>
            <p>
              Lifetime royalties (1% to 5% on <br /> the upcoming Binart
              <br />
              Marketplace, or other
              <br />
              compatible marketplaces)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
