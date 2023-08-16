import React from "react";
import "./Navbar.css";
import { NavLink as Link } from "react-router-dom";

interface NavbarWrapperProps {
  children: React.ReactNode;
}

const NavbarWrapper: React.FC<NavbarWrapperProps> = ({ children }) => {
  return (
    <nav className="nav">
      <div className="nav-menu">{children}</div>
      <div className="nav-btn">
        <Link to="/signup" className="nav-btn-link">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to="/home" className="nav-link" id="home">
        Home
      </Link>
      <Link to="/plant-identification" className="nav-link" id="identify">
        Image Identification
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
