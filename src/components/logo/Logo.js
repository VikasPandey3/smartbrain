import React from "react";
import brain from "./brain.png";
import Tilt from "react-parallax-tilt";
import "./logo.css";
const Logo = () => {
  return (
    <div className="logo">
      <Tilt className="Tilt">
        <img className='logo-image' src={brain} alt="logo" />
      </Tilt>
    </div>
  );
};

export default Logo;
