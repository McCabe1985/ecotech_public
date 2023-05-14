import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function ConservatoryCleaningSectionImg() {
  return (
    <StaticImage
      className="sectionpage-img-container"
      src="../../../../images/conservatorycleaning.webp"
      alt="A spotlessly clean conservatory roof"
      as="div"
      placeholder="blurred"
    />
  );
}
