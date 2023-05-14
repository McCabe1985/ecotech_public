import React from "react";
import { Link } from "gatsby";
export default function GreenHouseCleaningSectionText() {
  return (
    <section className="servicepage-text-container">
      <h2 className="servicepage-section-heading">
        Professional Greenhouse Cleaning
      </h2>
      <p className="servicepage-section-text">
        Greenhouses provide an ideal environment for growing plants, but over
        time, dirt, dust, and other debris can accumulate on the walls and roof
        of your greenhouse, reducing the amount of sunlight and airflow that
        reaches your plants. That's where our greenhouse cleaning service comes
        in.
      </p>
      <p className="servicepage-section-text">
        Our team of experienced cleaners specializes in deep cleaning all types
        of greenhouses, using only eco-friendly cleaning solutions and equipment
        to ensure that your plants and greenhouse structure are not damaged
        during the cleaning process. We also provide a comprehensive inspection
        of your greenhouse to ensure it is in good working order.
      </p>
      <p className="servicepage-section-text">
        Whether you need a one-time deep cleaning or regular maintenance, we
        offer flexible scheduling and competitive pricing to fit your needs and
        budget. Contact us today to schedule your greenhouse cleaning service
        and keep your plants healthy and thriving in a clean and well-maintained
        environment.
      </p>
      <p className="servicepage-section-price">Price TBA upon quotation</p>
      <Link to="/contact" className="servicepage-section-link">
        Contact Us
      </Link>
    </section>
  );
}
