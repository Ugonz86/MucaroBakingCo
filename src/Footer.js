import React from 'react';
import "./App.css";
import logo3 from "./images/logo3.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <Link to="https://www.instagram.com/bakingjeva/">
        <img src={logo3} className="insta-logo" alt="instagram-logo" />
      </Link>
      <p>Powered by UGX</p>
    </div>
  );
}

export default Footer;
