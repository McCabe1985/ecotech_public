import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export default function GreenHouseCleaningSectionImg() {
  return (
    <StaticImage
      className="sectionpage-img-container"
      src="../../../../images/greenhousecleaning.webp"
      alt="A greenhouse, ready to be cleaned"
      as="div"
      placeholder="blurred"
    />
  );
}
