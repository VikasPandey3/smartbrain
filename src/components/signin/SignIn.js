import React from 'react';
import './signin.css'
const SignIn = ({authenticate}) => {
    console.log("auth",)
    return(
      <div className='center'>
        <div className='signin'>
          <h2>SignIn</h2>
          <div className="container">
          <label for="uname"><b>Username</b></label>
          <input className='input' type="text" placeholder="Enter Username" name="uname" />
    
          <label for="psw"><b>Password</b></label>
          <input className='input' type="password" placeholder="Enter Password" name="psw" />
          <button className='signin-btn' onClick={()=>authenticate(true)}>SignIn</button>
          </div>
  
          {/* <div className="container" style={{backgroundColor:"#f1f1f1"}}>
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div> */}
        </div>
      </div>
    );
}


export default SignIn;