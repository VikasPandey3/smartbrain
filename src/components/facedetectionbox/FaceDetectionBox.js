import React from 'react';
import './facedetection.css';
const FaceDetectionBox = ({imgurl,box}) => {
    return( 
    <div className="center">
        <div className="facedetection">
        <img id="image"alt='' src={imgurl} width="400px" height="auto"/>
        <div className="face-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
    </div>
    );
}


export default FaceDetectionBox;