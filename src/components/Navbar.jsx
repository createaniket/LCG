import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

import LowercaseGroupLogo from '../images/LowercaseGroupLogoBlack.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <p className="topnavcontent">A DIVERSIFIED PRIVATE GROUP OF BRANDS, REAL ESTATE & STRATEGIC VENTURES</p>

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

    </header>
  );
}