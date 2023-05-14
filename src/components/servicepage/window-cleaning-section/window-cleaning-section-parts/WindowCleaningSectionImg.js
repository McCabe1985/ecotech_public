import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export default function WindowCleaningSectionImg() {
  return (
    <StaticImage
      className="sectionpage-img-container"
      src="../../../../images/windowcleaning.webp"
      alt="Denis, expertly cleaning a window"
      as="div"
      placeholder="blurred"
    />
  );
}
