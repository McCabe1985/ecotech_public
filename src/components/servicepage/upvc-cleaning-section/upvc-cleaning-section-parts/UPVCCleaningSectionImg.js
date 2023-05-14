import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function UPVCCleaningSectionImg() {
  return (
    <StaticImage
      className="sectionpage-img-container"
      src="../../../../images/upvccleaning.webp"
      alt="Nice and clean UPVC"
      as="div"
      placeholder="blurred"
    />
  );
}
