import React from "react";
import { NavLink } from "react-router-dom";
import "./Styles.css"

export default function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? 'red' : '',
      borderBottom: isActive ? "2px solid black" : " "
    };
  };

  return (
      <nav className="primary-nav">
        <h1>The Oyin Brand</h1>
        <div className="nav-links">
        <NavLink style={navLinkStyle} to="/">
          Home
        </NavLink>
        <NavLink style={navLinkStyle} to="/about">
          About
        </NavLink>
        <NavLink style={navLinkStyle} to="/products">
          Products
        </NavLink>
        </div>
        
      </nav>
  );
}
