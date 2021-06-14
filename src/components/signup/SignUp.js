import React from 'react';
import './signup.css'

const SignUp = ({authenticate}) => {
    return (
        <div className='center'>
        <div className='signup'>
          <h2>SignUp</h2>
          <div className="container">
          <label for="uname"><b>Username</b></label>
          <input className='input' type="text" placeholder="Enter Username" name="uname" />

          <label for="email"><b>Email</b></label>
          <input className='input' type="text" placeholder="Enter Email" name="email"/>
    
          <label for="psw"><b>Password</b></label>
          <input className='input' type="password" placeholder="Enter Password" name="psw" />
          <button className='signup-btn' onClick={()=>authenticate(true)}>Signup</button>
          </div>
  
          {/* <div className="container" style={{backgroundColor:"#f1f1f1"}}>
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div> */}
        </div>
      </div>)
}



export default SignUp;