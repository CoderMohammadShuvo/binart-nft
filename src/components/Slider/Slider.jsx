import React from "react";
import "./Slider.css";
import { Carousel } from "react-bootstrap";
import Line from "../../assets/Line 1.svg";
import Chain from "../../assets/Group (1).svg";
import Customize from "../../assets/Group 36616.svg";
import Cake from "../../assets/Cake.svg";

export default function Slider() {
  return (
    <div className="slider" id="slider">
      <div className="sliderTitle">
        <img src={Line} alt="" />
        <h4>Advantages</h4>
      </div>
      <h2 id="mainAdvantage">Main Advantages</h2>
      <div className="sliderItems">
        <Carousel>
          <Carousel.Item>
            <div className="sliderItemsMain">
              <div className="sliderItem">
                <div className="sliderImage">
                  <img src={Chain} alt="" />
                </div>
                <p>
                  First Multichain <br /> NFT Collection
                </p>
              </div>

              <div className="sliderItem">
                <div className="sliderImage">
                  <img src={Customize} alt="" />
                </div>
                <p>
                  First 100% customizable <br /> NFT Collection
                </p>
              </div>

              <div className="sliderItem">
                <div className="sliderImage">
                  <img src={Cake} alt="" />
                </div>
                <p>
                  NFT Cookie Baking & <br />
                  delivery in 24-48h
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="sliderItemsMain">
              <div className="sliderItem">
                <div className="sliderImage">
                  <img src={Chain} alt="" />
                </div>
                <p>
                  First Multichain <br /> NFT Collection
                </p>
              </div>

              <div className="sliderItem">
                <div className="sliderImage">
                  <img src={Customize} alt="" />
                </div>
                <p>
                  First 100% customizable <br /> NFT Collection
                </p>
              </div>

              <div className="sliderItem">
                <div className="sliderImage">
                  <img src={Cake} alt="" />
                </div>
                <p>
                  NFT Cookie Baking & <br />
                  delivery in 24-48h
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
