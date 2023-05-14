import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function SocialMedia() {
  return (
    <div className="footer-item social-media-container">
      <h2 className="footer-subheading">Social Media</h2>
      <div className="social-media-divider">
        <a
          href="https://www.facebook.com/profile.php?id=100064004114269"
          className="social-link"
        >
          <StaticImage
            src="../../images/facebooklogo.webp"
            alt="facebook logo"
            as="div"
            className="social-icon"
            placeholder="blurred"
          />
        </a>
        <a
          href="https://nextdoor.co.uk/pages/ecotech-window-cleaning-loxwoodbillingshurst-england/photos/"
          className="social-link"
        >
          <StaticImage
            src="../../images/nextdoorlogo.webp"
            alt="Nextdoor.co.uk logo"
            as="div"
            className="social-icon"
            placeholder="blurred"
          />
        </a>
      </div>
    </div>
  );
}
