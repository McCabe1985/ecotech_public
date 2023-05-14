import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function TestimonialImage() {
  return (
    <StaticImage
      src="../../../../images/deniscollage1.webp"
      alt="Denis, doing a bang up job."
      as="div"
      className="testimonials-image-container"
      imgClassName="testimonials-image"
      placeholder="blurred"
      loading="lazy"
    />
  );
}
