import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>BINART</h1>
      <div className="menu">
        <a href="">History</a>
        <a href="#slider">Advantages</a>
        <a href="">Gallery</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="navButons">
        <button id="mintButton">Mint</button>
        <button id="connectWalletButton">Connect Wallet</button>
      </div>
    </div>
  );
}
