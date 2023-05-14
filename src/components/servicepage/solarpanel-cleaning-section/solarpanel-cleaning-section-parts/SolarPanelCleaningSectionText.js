import React from "react";
import { Link } from "gatsby";
export default function SolarPanelCleaningSectionText() {
  return (
    <section className="servicepage-text-container">
      <h2 className="servicepage-section-heading">
        Professional Solar Panel Cleaning
      </h2>
      <p className="servicepage-section-text">
        Solar panels are a great investment for your home or business, helping
        to reduce energy costs and promote sustainable living. But over time,
        dirt, dust, and environmental factors like bird droppings can accumulate
        on the surface of your panels, reducing their efficiency and
        effectiveness. That's where our solar panel cleaning service comes in.
      </p>
      <p className="servicepage-section-text">
        Our team of experienced cleaners specializes in deep cleaning all types
        of solar panels, using only eco-friendly cleaning solutions and
        equipment to ensure that your panels are cleaned thoroughly without
        damaging the delicate surfaces. We also provide a comprehensive
        inspection of your panels to ensure they are functioning properly.
      </p>
      <p className="servicepage-section-text">
        Whether you need a one-time deep cleaning or regular maintenance, we
        offer flexible scheduling and competitive pricing to fit your needs and
        budget. Contact us today to schedule your solar panel cleaning service
        and maximize the efficiency of your solar power system.
      </p>
      <p className="servicepage-section-price">Price TBA upon quotation</p>
      <Link to="/contact" className="servicepage-section-link">
        Contact Us
      </Link>
    </section>
  );
}
