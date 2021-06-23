import React from "react";
import "./facedetection.css";
const FaceDetectionBox = ({ imgurl, box }) => {
  const {topRow,rightCol,bottomRow,leftCol,width,height}=box;
  return (
      <div className="facedetection">
        <div className='scroll'>
        <div className='x' >
          <img id="image" alt="" src={imgurl}/>
          <span className='face-box' style={{
              top: topRow,
              right: rightCol,
              bottom: bottomRow,
              left: leftCol,
              width:width-(rightCol+leftCol),
              height:height-(topRow+bottomRow)
            }}></span>
        </div>
        </div>
      </div>
  );
};

export default FaceDetectionBox;
