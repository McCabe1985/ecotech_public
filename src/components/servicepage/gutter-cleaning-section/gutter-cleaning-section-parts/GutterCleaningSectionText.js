import React from "react";
import { Link } from "gatsby";
export default function GutterCleaningSectionText() {
  return (
    <section className="servicepage-text-container">
      <h2 className="servicepage-section-heading">
        Professional Gutter Cleaning Services
      </h2>
      <p className="servicepage-section-text">
        Clogged gutters can cause a lot of problems, from water damage to your
        roof and siding to the growth of harmful mold and bacteria. That's why
        it's important to keep your gutters clean and clear of debris. At our
        gutter cleaning business, we specialize in providing reliable,
        efficient, and affordable gutter cleaning services for homes and
        businesses.
      </p>
      <p className="servicepage-section-text">
        Our team of experienced professionals uses state-of-the-art equipment to
        clean out your gutters quickly and effectively, ensuring that water
        flows freely and safely away from your property. We also offer regular
        maintenance programs to help keep your gutters in top condition all year
        round.
      </p>
      <p className="servicepage-section-text">
        With our competitive pricing and commitment to customer satisfaction,
        you can trust us to keep your gutters clean and your property protected.
        Contact us today to schedule your gutter cleaning service and enjoy
        peace of mind knowing that your home or business is in good hands.
      </p>
      <p className="servicepage-section-price">
        Gutter cleaning and clearance from only £10!
      </p>
      <Link to="/contact" className="servicepage-section-link">
        Contact Us
      </Link>
    </section>
  );
}
