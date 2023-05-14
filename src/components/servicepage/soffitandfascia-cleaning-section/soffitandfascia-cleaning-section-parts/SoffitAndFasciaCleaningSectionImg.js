import React from "react";
import { StaticImage } from "gatsby-plugin-image";
export default function SoffitAndFasciaCleaningSectionImg() {
  return (
    <StaticImage
      className="sectionpage-img-container"
      src="../../../../images/soffitcleaning.webp"
      alt="We clean soffits too!"
      as="div"
      placeholder="blurred"
    />
  );
}
