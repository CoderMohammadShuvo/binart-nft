import React from "react";
import "./AdvantageHolder.css";
import Line from "../../assets/Line 1.svg";
import Holders from "../../assets/Holders.svg";

export default function AdvantageHolder() {
  return (
    <div className="advantageHolder">
      <div className="sliderTitle" style={{ justifyContent: "left" }}>
        <img src={Line} alt="" />
        <h4>Advantages</h4>
      </div>
      <h2>For Holders (Even on secondary sales)</h2>
      <img id="holders" src={Holders} alt="" />
      <div className="holderAdvantages">
        <div className="holderAdvantage">
          <h4>01</h4>
          <p>
            Future Access to <br />
            Binart <br />
            Marketplace <br />
            private sales
          </p>
        </div>
        <div className="holderAdvantage">
          <h4>02</h4>
          <p>
            Will grant access <br />
            to the unlocked <br />
            Roadmap <br />
            Features
          </p>
        </div>
        <div className="holderAdvantage">
          <h4>03</h4>
          <p>
            NFTs are sellable in <br />
            Metadata- <br />
            compatible <br />
            Marketplaces (But <br />
            why sell anyway…?)
          </p>
        </div>
        <div className="holderAdvantage">
          <h4>04</h4>
          <p>
            Upcoming <br />
            Exclusive Real Life <br />
            Events
          </p>
        </div>
      </div>
    </div>
  );
}
