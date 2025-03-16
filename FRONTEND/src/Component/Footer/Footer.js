import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} User Center. All rights reserved. @Rukshan Ekanayake...</p>
    </footer>
  );
}

export default Footer;
