import React from "react";
import { Link } from "gatsby";

export default function SiteMap() {
  return (
    <div
      className="footer-item footer-nav"
      aria-label="footer navigation links"
    >
      <h2 className="footer-subheading">Navigation</h2>

      <Link to="/services" className="footer-link">
        Services
      </Link>
      <Link to="/contact" className="footer-link">
        Contact
      </Link>
    </div>
  );
}
