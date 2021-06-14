import React from "react";
import "./imageurl.css";

const ImageUrl = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="center">
      <div className="center form">
        <input type="text" onChange={onInputChange} />
        <button onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  );
};

export default ImageUrl;
