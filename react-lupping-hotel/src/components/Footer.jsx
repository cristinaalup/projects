import React from "react";
import "./css/Footer.css";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="font-poppins p-15 blue-text-footer">
        <p> All rights reserved © {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
