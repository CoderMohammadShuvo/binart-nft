import React from "react";
import "./Footer.css";
import discord from "../../assets/Group.svg";
import twitter from "../../assets/Shape.svg";
import facebook from "../../assets/icon-social-facebook.svg";
import telegram from "../../assets/Telegram - Original.svg";
export default function Footer() {
  return (
    <div className="footerMain">
      <div className="footer">
        <h4 id="footerBinart">BINART</h4>
        <div className="footerDetials">
          <div className="footerDetalsContainer">
            <div className="leftSidefooter">
              <h3>
                <span style={{ color: "#D16318" }}>Get latest updates</span>{" "}
                <br /> about BinartNFTs
              </h3>
              <div className="form">
                <input type="text" placeholder="your email" />
                <button>Send</button>
              </div>
            </div>
            <div className="rightSide">
              <div className="rightsideFirstLine">
                <a href="">History</a>
                <a href="" id="footerGallary">
                  Gallery
                </a>
              </div>
              <div className="rightsideFirstLine">
                <a href="#slider">Advantages</a>
                <a href="#faq" id="footerFaq">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrightAreea">
          <h5>Ⓒ2022 Binart NFT. All rights reserved</h5>
          <div className="footersocialIcon">
            <div className="social">
              <a href="">
                <img src={twitter} alt="" />
              </a>
            </div>
            <div className="social">
              <a href="">
                <img src={facebook} alt="" />
              </a>
            </div>

            <div className="social">
              <a href="">
                <img src={discord} alt="" />
              </a>
            </div>
            <div className="social">
              <a href="">
                <img src={telegram} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
