import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        {/* <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title}
        </p> */}
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          <span style={{ fontSize: "1.1em", verticalAlign: "middle" }}>©</span> {new Date().getFullYear()} {greeting.title}.
          Website template {" "}
          <a
            href="https://github.com/ashutosh1919/masterPortfolio"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: props.theme.text }}
          >
            here.
          </a>
        </p>
      </Fade>
    </div>
  );
}
