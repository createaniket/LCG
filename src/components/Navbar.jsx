import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

import LowercaseGroupLogo from '../images/LowercaseGroupLogoBlack.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      {/* Left - menu icon */}
      <div 
        className="nav-left"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className={`menu-icon ${menuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Center - Logo */}
      <div className="nav-center">
        <Link to="/">
          <img
            src={LowercaseGroupLogo}
            alt="Logo"
            className="logo"
          />
        </Link>
      </div>

      {/* Right - Links */}
      <nav className={`nav-right ${menuOpen ? "active" : ""}`}>
        <Link to="/privacy" onClick={() => setMenuOpen(false)}>PRIVACY POLICY</Link>
        <Link to="/terms" onClick={() => setMenuOpen(false)}>TERMS</Link>
        <Link to="/connect" className="btn-connect" onClick={() => setMenuOpen(false)}>
          CONNECT
        </Link>
      </nav>

    </header>
  );
}