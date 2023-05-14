import React from "react";
import { Link } from "gatsby";
export default function ConservatoryCleaningSectionText() {
  return (
    <section className="servicepage-text-container">
      <h2 className="servicepage-section-heading">
        Professional Conservatory Cleaning
      </h2>
      <p className="servicepage-section-text">
        Your conservatory is a beautiful addition to your home, offering a
        relaxing space to enjoy the outdoors while still being indoors. But over
        time, dirt, dust, and grime can build up on the glass, frames, and roof,
        detracting from its beauty and making it less enjoyable to spend time
        in. That's where our conservatory cleaning service comes in.
      </p>
      <p className="servicepage-section-text">
        Our team of professional cleaners is trained to clean all types of
        conservatories, from small ones to large and complex designs. We use
        high-quality cleaning solutions and equipment to remove even the
        toughest stains and build-up, leaving your conservatory looking brand
        new again.
      </p>
      <p className="servicepage-section-text">
        Whether you need a one-time deep cleaning or regular maintenance, we
        offer flexible scheduling and competitive pricing to fit your needs and
        budget. Contact us today to schedule your conservatory cleaning service
        and bring the sparkle back to your beautiful space.
      </p>
      <p className="servicepage-section-price">Price TBA upon quotation</p>
      <Link to="/contact" className="servicepage-section-link">
        Contact Us
      </Link>
    </section>
  );
}
