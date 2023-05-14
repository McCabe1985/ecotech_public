import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export default function CaravanCleaningSectionImg() {
  return (
    <StaticImage
      className="sectionpage-img-container"
      src="../../../../images/caravancleaning.webp"
      alt="Denis, getting stuck in and making this caravan look brand new"
      as="div"
      placeholder="blurred"
    />
  );
}
