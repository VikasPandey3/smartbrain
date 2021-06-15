import React from "react";
import "./imageurl.css";

const ImageUrl = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="center">
      <div className="center form">
        <input type="text" onChange={onInputChange} placeholder="Enter image url with .jpg,.png " />
        <button onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  );
};

export default ImageUrl;
