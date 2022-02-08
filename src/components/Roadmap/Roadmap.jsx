import React from "react";
import "./Roadmap.css";
import Line from "../../assets/Line 1.svg";
import Roadmaps from "../../assets/Roadmap.svg";
import Line2 from "../../assets/Line 2.png";

export default function Roadmap() {
  return (
    <div className="roadmap">
      <div className="sliderTitle">
        <img src={Line} alt="" />
        <h4>Advantages</h4>
      </div>
      <h2>Our Roadmap</h2>
      <img id="roadMaps" src={Roadmaps} alt="" />
      <div className="roadMapOptions">
        <div className="leftSide">
          <div className="odd">
            <p>Whitelisting</p>
          </div>
          <div className="inn">
            <p>Fiat Pre-Sale</p>
          </div>
          <div className="odd">
            <p>Discord Channels & Polls</p>
          </div>
          <div className="inn">
            <p>Ethereum Minting</p>
          </div>
          <div className="odd">
            <p>Child Collection</p>
          </div>
          <div className="inn">
            <p>Binart Marketplace</p>
          </div>
          <div className="odd">
            <p>Child Collection</p>
          </div>
        </div>
        <img id="line2" src={Line2} alt="" />
        <div className="rightOption">
          <div className="inn">
            <p>NFT Collection</p>
          </div>
          <div className="odd">
            <p>Solana Minting</p>
          </div>
          <div className="inn">
            <p>Airdrops</p>
          </div>
          <div className="odd">
            <p>Binance Smart Chain Minting</p>
          </div>
          <div className="inn">
            <p>Avalanche Minting</p>
          </div>
          <div className="odd">
            <p>Exclusive Real Life Experience</p>
          </div>
          <div className="inn">
            <p>Member Pre-Sales</p>
          </div>
        </div>
      </div>
    </div>
  );
}
