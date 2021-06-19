import React from "react";
import Logo from "../logo/Logo";
import "./navigation.css";
const Navigation = ({ isAuthenticated, onRouteChange,user }) => {
  return (
    <div className="navigation">
      <Logo />
      {isAuthenticated ? (
        <div className="navigation-right">
          <div className="user">{user.username}</div>
          <div
            className="navigation-link"
            onClick={() => onRouteChange("signout")}
          >
            SignOut
          </div>
        </div>
      ) : (
        <div className="navigation-right">
          <div
            className="navigation-link"
            onClick={() => onRouteChange("signin")}
          >
            SignIn
          </div>
          <div
            className="navigation-link"
            onClick={() => onRouteChange("signup")}
          >
            SignUp
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
