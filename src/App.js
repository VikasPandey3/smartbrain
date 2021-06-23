import React from "react";
import "./App.css";
import FaceDetectionBox from "./components/facedetectionbox/FaceDetectionBox";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import Navigation from "./components/navigation/Navigation";
import ImageUrl from "./components/imageurl/ImageUrl";

const initstate={
  input: "",
  imageurl: "",
  box: {},
  isAuthenticated: false,
  route: "signin",
  user:{}
};
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = initstate

  }
  faceLocationCalc = (data) => {
    let clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    let img = document.getElementById("image");
    
    let width = Number(img.width);
    let height = Number(img.height);
    const box = {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
      width:width,
      height:height
    };
    return box;
  };

  drawBox = (data) => {
    console.log(data)
    this.setState({ box: data });
  };

  onInputChange = (event) => {
    this.setState({ imageurl: event.target.value });
  };

  onButtonSubmit = (e) => {
    this.setState({ input: this.state.imageurl });
    fetch("https://polar-fjord-24275.herokuapp.com/imageurl",{
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
       imageurl:this.state.imageurl
      })
    })
    .then(res=>res.json())
    .then((response) =>{
       
       this.drawBox(this.faceLocationCalc(response));
       
      })
    .catch((error) => console.log(error));
    
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initstate);
    }else{
    this.setState({ route: route });
    }
  };

  authenticate = (state,user) => {
    this.setState({ isAuthenticated: state,user:user });
  };

  render() {
    const { input, box, isAuthenticated, route,user } = this.state;
    return (
      <div>
        <Navigation
          isAuthenticated={isAuthenticated}
          user={user}
          onRouteChange={this.onRouteChange}
        />
        {isAuthenticated ? (
          <div>
            <ImageUrl
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceDetectionBox imgurl={input} box={box} />
          </div>
        ) : (
          <div>
            {route === "signin" ? (
              <SignIn authenticate={this.authenticate} />
            ) : (
              <SignUp authenticate={this.authenticate} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
