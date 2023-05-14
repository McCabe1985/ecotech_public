import React from "react";
import BottomLogo from "../../images/ecotechtextlogo.svg";

export default function FooterLogo() {
  return (
    <div className="footer-logo-container">
      <img
        src={BottomLogo}
        alt="Ecotech Logo"
        className="footer-logo"
        aria-label="Ecotech Logo"
        loading="lazy"
        width="400"
        height="104"
      />
    </div>
  );
}
