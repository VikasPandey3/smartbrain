import React from 'react';
import './App.css';
import Logo from './components/logo/Logo';
import FaceDetectionBox from './components/facedetectionbox/FaceDetectionBox';
import SignUp from './components/signup/SignUp';
import SignIn from './components/signin/SignIn';
import Navigation from './components/navigation/Navigation'
import ImageUrl from './components/imageurl/ImageUrl';

import Clarifai from "clarifai";
const app = new Clarifai.App({
 apiKey: 'af977778b13042c9b49be6c596dc87c9'
})

class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    input:'',
    imageurl:'',
    box:{},
    isAuthenticated:false,
    route:"signin"
  };
}
 faceLocationCalc=(data)=>{
  let clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
  let img=document.getElementById("image");
  let width=Number(img.width);
  let height=Number(img.height);
  const box={
    
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
    
  }
  return box
 }

 drawBox=(data)=>{
   this.setState({box:data})
 }

 onInputChange=(event)=>{
  this.setState({imageurl:event.target.value});
  console.log(event.target.value)
 }

 onButtonSubmit=(e)=>{
  app.models
  .predict(Clarifai.FACE_DETECT_MODEL, this.state.imageurl)
  .then(response=> this.drawBox(this.faceLocationCalc(response)))
  .catch(error=>console.log(error))
  this.setState({input:this.state.imageurl});
 }

 onRouteChange=(route)=>{
  if(route==='signout'){
    this.setState({isAuthenticated:false});
  }
    this.setState({route:route});
 }

 authenticate=(state)=>{
  this.setState({isAuthenticated:state});
 }


  render() {
    const {input,box,isAuthenticated,route}=this.state
    return (
      <div>
        <Navigation isAuthenticated={isAuthenticated} onRouteChange={this.onRouteChange}/>
        {isAuthenticated?
        <div>
          <ImageUrl onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceDetectionBox imgurl={input} box={box}/>
        </div>
        :<div>
          {route==="signin"? <SignIn authenticate={this.authenticate}/>:<SignUp authenticate={this.authenticate}/>}
        </div>
        }
      </div>
    
    )
    
  }
}



export default App;
