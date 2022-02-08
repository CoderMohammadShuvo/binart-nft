import React, { useState } from "react";
import "./Faq.css";
import Faqa from "../../assets/FAQ.svg";
import Line from "../../assets/Line 1.svg";
import DownArray from "../../assets/Group 36621.png";
import Uparray from "../../assets/Group 36624.png";

export default function Faq() {
  const [first, setFirst] = useState(false);
  const [first2, setFirst2] = useState(false);
  const [first3, setFirst3] = useState(false);
  const [first4, setFirst4] = useState(false);

  return (
    <div className="faq" id="faq">
      <div className="sliderTitle" style={{ justifyContent: "left" }}>
        <img src={Line} alt="" />
        <h4>Advantages</h4>
      </div>
      <h2>Frequently Asked Questions</h2>
      <img id="holders" src={Faqa} alt="" class="faqh2" />

      <div className="accordion">
        <div className="firsLineAcc">
          <div className="firstAccordion">
            <div className="question">
              <p>
                How do you write a test case <br /> for game testing?
              </p>
              <img
                src={first ? Uparray : DownArray}
                alt=""
                onClick={() => setFirst(!first)}
              />
            </div>
            {first ? (
              <p id="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, natus!
              </p>
            ) : null}
          </div>
          <div className="firstAccordion">
            <div className="question">
              <p>
                How do you write a test case <br /> for game testing?
              </p>
              <img
                src={first2 ? Uparray : DownArray}
                alt=""
                onClick={() => setFirst2(!first2)}
              />
            </div>
            {first2 ? (
              <p id="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, natus!
              </p>
            ) : null}
          </div>
        </div>
        <div className="firsLineAcc">
          <div className="firstAccordion">
            <div className="question">
              <p>
                How do you write a test case <br /> for game testing?
              </p>
              <img
                src={first3 ? Uparray : DownArray}
                alt=""
                onClick={() => setFirst3(!first3)}
              />
            </div>
            {first3 ? (
              <p id="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, natus!
              </p>
            ) : null}
          </div>
          <div className="firstAccordion">
            <div className="question">
              <p>
                How do you write a test case <br /> for game testing?
              </p>
              <img
                src={first4 ? Uparray : DownArray}
                alt=""
                onClick={() => setFirst4(!first4)}
              />
            </div>
            {first4 ? (
              <p id="answer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, natus!
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
