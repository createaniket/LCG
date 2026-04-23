
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* LEFT */}
        <div className="footer-left">
 
        <Link to="/terms-of-service">Terms of Service</Link>
          <span>|</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span>|</span>
          <Link to="/connect" className="connect_f">Connect</Link>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          {/* <p>Copyright © 2026 LOWERCASE GROUP</p> */}
                   {/* <Link to="/terms-of-service">Terms of Service</Link>
          <span>|</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span>|</span>
          <Link to="/connect">Connect</Link> */}
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          {/* <Link to="/terms-of-service">Terms of Service</Link>
          <span>|</span>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span>|</span>
          <Link to="/connect">Connect</Link> */}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
