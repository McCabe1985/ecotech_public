import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export default function SolarPanelCleaningSectionImg() {
  return (
    <StaticImage
      className="sectionpage-img-container"
      src="../../../../images/solarpanelcleaning.webp"
      alt="Denis, cleaning up some solar panels"
      as="div"
      placeholder="blurred"
    />
  );
}
