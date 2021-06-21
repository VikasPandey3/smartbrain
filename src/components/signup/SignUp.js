import React from "react";
import "./signup.css";

class SignUp extends React.Component  {
  constructor(){
    super();
    this.state={
      username:"",
      signUpEmail:"",
      signUpPassword:"",
      error:""
    }
  }
  onUsernamechange=(event)=>{
    this.setState({username:event.target.value});
  }
  onEmailchange=(event)=>{
    this.setState({signUpEmail:event.target.value});
  }
  onPasswordchange=(event)=>{
    this.setState({signUpPassword:event.target.value});
  }
  onSubmit=()=>{
    const {authenticate}=this.props;
    const {username,signUpEmail,signUpPassword}=this.state;
    fetch("https://polar-fjord-24275.herokuapp.com/signup",{
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        username:username,
        email: signUpEmail,
        password:signUpPassword
      })
    }).then(resp=> resp.json())
     .then(user=>{
       if(user.id){
          authenticate(true,user);
       }else{
        this.setState({error:user})
       }
     }).catch(err=>{this.setState({error:err})})
    
  }
  render(){
  return (
    <div className="center">
      <div className="signup">
        <h2>SignUp</h2>
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter Username"
            name="uname"
            onChange={this.onUsernamechange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={this.onEmailchange}
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            className="input"
            type="password"
            placeholder="Enter Password"
            name="psw"
            onChange={this.onPasswordchange}
          />
          <button className="signup-btn" onClick={this.onSubmit}>
            Signup
          </button>
          <p style={{color:"red",padding:'0',textAlign:'center'}}>{this.state.error}</p>
        </div>
      </div>
    </div>
  );
  }
};

export default SignUp;
