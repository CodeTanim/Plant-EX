import React from "react";
import logoImg from "./logo.jpg";
import "./Navbar.css";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

interface NavbarWrapperProps {
  children: React.ReactNode;
}

const NavbarWrapper: React.FC<NavbarWrapperProps> = ({ children }) => {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        <img src={logoImg} alt="Plantex Logo" className="logo" />
      </Link>
      <FaBars className="bars" />
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
      <Link to="/home" className="nav-menu" id="home">
        Home
      </Link>
      <Link to="/about" className="nav-menu" id="about">
        About Us
      </Link>
      <Link to="/plant-identification" className="nav-menu" id="identify">
        Image Identification
      </Link>
    </NavbarWrapper>
  );
};

export default Navbar;
