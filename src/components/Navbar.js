import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <div className="navbar">
      <Link className="header-link" to="/">
        <h1 className="header">COIN APP</h1>
      </Link>
      <Link className="header-link" to="exchange">
        <h1>Converter</h1>
      </Link>
    </div>
  );
}
