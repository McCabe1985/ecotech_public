import React from "react";
import { Link } from "gatsby";
export default function ServiceCards() {
  return (
    <article className="service-cards-container">
      <article className="service-card-wrapper">
        <h3 className="service-card-heading">
          External and Internal Window Cleaning Services
        </h3>
        <p className="service-card-text">
          At Ecotech, we use only the top-of-the-range equipment to ensure that
          every job is completed to the highest standard. We clean not only the
          windows but also frames, sills, and doors every time, leaving your
          property looking its best.
        </p>
        <Link to="/services#windows" className="service-card-link">
          Find out more!
        </Link>
      </article>

      <article className="service-card-wrapper">
        <h3 className="service-card-heading">Gutter Cleaning Services</h3>
        <p className="service-card-text">
          We use a powerful 3000w gutter vacuum and a camera with video link to
          ensure that every gutter is thoroughly cleaned. Our experienced team
          can clean even the hardest-to-reach gutters, providing a comprehensive
          service from the safety of the ground floor.
        </p>
        <Link to="/services#gutters" className="service-card-link">
          Find out more!
        </Link>
      </article>

      <article className="service-card-wrapper">
        <h3 className="service-card-heading">Conservatory cleaning services</h3>
        <p className="service-card-text">
          We also offer a comprehensive cleaning service that includes the roof,
          windows, and doors. We use a safe detergent to remove algae and grime,
          ensuring that your conservatory is thoroughly cleaned without causing
          any damage.
        </p>
        <Link to="/services#conservatories" className="service-card-link">
          Find out more!
        </Link>
      </article>
    </article>
  );
}
