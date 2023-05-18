import React from "react";

export const Navbar = () => {
  return (
    <div className="container">
      <div className="xd">
        <div className="brand">
          <a href="#">
            {" "}
            <img src="logo.png" alt="" />{" "}
          </a>
        </div>

        <ul className="contents">
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#"> Watch us</a>
          </li>
        </ul>
      </div>
      <div className="login-signup">
        <a href="" className="login-link">
          Login
        </a>

        <a href="" className="signup-link">
          Sign up
        </a>
      </div>
    </div>
  );
};
