import React from "react";
import "./signin.css";
const SignIn = ({ authenticate }) => {
  return (
    <div className="center">
      <div className="signin">
        <h2>SignIn</h2>
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            className="input"
            type="text"
            placeholder="Enter Username"
            name="uname"
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            className="input"
            type="password"
            placeholder="Enter Password"
            name="psw"
          />
          <button className="signin-btn" onClick={() => authenticate(true)}>
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
