import React from "react";
import { Link } from "gatsby";

export default function WindowCleaningSectionText() {
  return (
    <section className="servicepage-text-container">
      <h2 className="servicepage-section-heading">
        Professional Window Cleaning Service
      </h2>
      <p className="servicepage-section-text">
        Looking for a reliable window cleaning service? Look no further! Our
        team of experienced professionals is here to help you keep your windows
        crystal clear and streak-free. We use only the best cleaning solutions
        and equipment to ensure that your windows are spotless and sparkling.
      </p>
      <p className="servicepage-section-text">
        Whether you need regular window cleaning services for your home or
        business, or you need a one-time cleaning for a special event, we've got
        you covered. Our flexible scheduling options make it easy to find a time
        that works for you, and our competitive pricing means that you'll get
        great service at a great value.
      </p>
      <p className="servicepage-section-text">
        Don't let dirty windows detract from the beauty of your home or
        business. Contact us today to schedule your window cleaning service and
        see the difference that our team can make!
      </p>
      <p className="servicepage-section-price">
        Window cleaning from just £20!
      </p>
      <Link to="/contact" className="servicepage-section-link">
        Contact Us
      </Link>
    </section>
  );
}
