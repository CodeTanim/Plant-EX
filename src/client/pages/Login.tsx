import React from "react";
import "./logs.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h2 style={{ textAlign: "center" }}>Log In</h2>
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

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
            <p className="forgot-password text-right">
              <a href="#">Forgot password?</a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
