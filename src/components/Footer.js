import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Bookvibe.All rights reserved</p>

      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </footer>
  );
}

export default Footer;
