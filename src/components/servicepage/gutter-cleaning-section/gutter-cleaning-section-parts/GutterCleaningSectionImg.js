import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export default function GutterCleaningSectionImg() {
  return (
    <StaticImage
      className="sectionpage-img-container"
      src="../../../../images/guttercleaning.webp"
      alt="Denis, expertly cleaning a gutter"
      as="div"
      placeholder="blurred"
    />
  );
}
