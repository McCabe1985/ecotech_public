import React from "react";
import { Link } from "gatsby";
export default function UPVCCleaningSectionText() {
  return (
    <section className="servicepage-text-container">
      <h2 className="servicepage-section-heading">
        Professional UPVC Cleaning
      </h2>
      <p className="servicepage-section-text">
        Your UPVC external features such as windows, doors, and guttering play a
        crucial role in protecting your home from the elements and keeping it
        looking beautiful. But over time, dirt, grime, and environmental factors
        like algae and moss can build up, making your UPVC external features
        look dull and uninviting. That's where our UPVC external cleaning
        service comes in.
      </p>
      <p className="servicepage-section-text">
        Our team of experienced cleaners specializes in deep cleaning all types
        of UPVC external features, from small and simple to large and complex.
        We use only the best cleaning products and equipment to ensure that
        every surface is spotless and free from dirt, grime, and stains.
      </p>
      <p className="servicepage-section-text">
        Whether you need a one-time deep cleaning or regular maintenance, we
        offer flexible scheduling and competitive pricing to fit your needs and
        budget. Contact us today to schedule your UPVC external cleaning service
        and enjoy a fresh and clean home exterior.
      </p>
      <p className="servicepage-section-price">UPVC cleaning from just £10!</p>
      <Link to="/contact" className="servicepage-section-link">
        Contact Us
      </Link>
    </section>
  );
}
