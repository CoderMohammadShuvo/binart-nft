import React from "react";
import "./HeaderSocial.css";
import discord from "../../assets/Group.svg";
import twitter from "../../assets/Shape.svg";
import facebook from "../../assets/icon-social-facebook.svg";
import telegram from "../../assets/Telegram - Original.svg";

export default function HeaderSocial() {
  return (
    <div className="headerSocial">
      <div className="socialIcon">
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
  );
}
