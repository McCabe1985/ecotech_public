import React from "react";
import { Link } from "gatsby";
export default function CaravanCleaningSectionText() {
  return (
    <section className="servicepage-text-container">
      <h2 className="servicepage-section-heading">
        Professional Caravan and Static Home Cleaning
      </h2>
      <p className="servicepage-section-text">
        Your caravan or static home exterior is the first thing visitors and
        passersby see, and it's important to keep it looking clean and
        well-maintained. Over time, dirt, grime, and environmental factors like
        algae and moss can build up, making your caravan or static home look
        dull and uninviting. That's where our exterior cleaning service comes
        in.
      </p>
      <p className="servicepage-section-text">
        Our team of experienced cleaners specializes in deep cleaning all types
        of caravan and static home exteriors, from small and simple to large and
        luxurious. We use only the best cleaning products and equipment to
        ensure that every surface is spotless and free from dirt, grime, and
        stains.
      </p>
      <p className="servicepage-section-text">
        Whether you need a one-time deep cleaning or regular maintenance, we
        offer flexible scheduling and competitive pricing to fit your needs and
        budget. Contact us today to schedule your caravan or static home
        exterior cleaning service and enjoy a fresh and clean living space.
      </p>
      <p className="servicepage-section-price">
        Caravan and Static homes cleaning from only £20!
      </p>
      <Link to="/contact" className="servicepage-section-link">
        Contact Us
      </Link>
    </section>
  );
}
