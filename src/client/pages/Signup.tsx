import React, { useState } from "react";
import "./logs.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Signup = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const redirectToLogin = () => {
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <div>
      <Navbar />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h2 style={{ textAlign: "center" }}>Sign Up</h2>
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <br />
              <input
                type="email"
                id="firstName"
                className="form-control"
                placeholder="First name"
                style={{ width: "100%", height: "30px", color: "black" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <br />
              <input
                type="email"
                id="lastName"
                className="form-control"
                placeholder="Last name"
                style={{ width: "100%", height: "30px" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <br />
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter email"
                style={{ width: "100%", height: "30px" }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter password"
                style={{ width: "100%", height: "30px" }}
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
            <p className="forgot-password text-right">
              Already registered? <a href="/login">Log in</a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
