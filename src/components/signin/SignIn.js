import React from "react";
import "./signin.css";
class SignIn extends React.Component{
  constructor(){
    super()
    this.state={
      signInEmail:"",
      signInPassword:"",
      error:""
    }
  }
  onEmailchange=(event)=>{
    this.setState({signInEmail:event.target.value});
  }
  onPasswordchange=(event)=>{
    this.setState({signInPassword:event.target.value});
  }
  onSubmit=()=>{
    const {authenticate}=this.props;
    const {signInEmail,signInPassword}=this.state;
    fetch("https://polar-fjord-24275.herokuapp.com/signin",{
      method:'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        email: signInEmail,
        password:signInPassword
      })
    }).then(resp=> resp.json())
     .then(user=>{
       console.log(user);
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
      <div className="signin">
        <h2>SignIn</h2>
        <div className="container">
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={this.onEmailchange}
            required
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
            required
          />
          <button className="signin-btn" onClick={this.onSubmit}>
            SignIn
          </button>
          <p style={{color:"red",padding:'0',textAlign:'center'}}>{this.state.error}</p>
        </div>
      </div>
    </div>
  );
  }
};

export default SignIn;
