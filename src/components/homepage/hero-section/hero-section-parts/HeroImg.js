import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function HeroImg() {
  return (
    <StaticImage
      src="../../../../images/ecotechlogo.webp"
      alt="Our logo"
      as="div"
      className="hero-img"
      placeholder="blurred"
    />
  );
}
