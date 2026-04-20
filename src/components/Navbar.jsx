import { Link } from "react-router-dom";
import "./Navbar.css";

import LowercaseGroupLogo from '../images/LowercaseGroupLogoBlack.png';

export default function Navbar() {
  return (
    <header className="navbar">
      {/* Left - menu icon */}
      <div className="nav-left">
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Center - Logo (clickable) */}
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
      <nav className="nav-right">
        <Link to="/privacy">PRIVACY POLICY</Link>
        <Link to="/terms">TERMS</Link>
        <Link to="/connect" className="btn-connect">
          CONNECT
        </Link>
      </nav>
    </header>
  );
}