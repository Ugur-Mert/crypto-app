import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaSearch, FaCoins, FaExchangeAlt } from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="header-link" to="/">
        <h1>
          <FaCoins className="nav-icon" /> COIN APP
        </h1>
      </Link>
      <Link className="header-link" to="exchange">
        <h1>
          <FaExchangeAlt className="nav-icon" /> Converter
        </h1>
      </Link>
    </div>
  );
}
