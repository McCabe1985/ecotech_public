import React from "react";
import { Link } from "gatsby";

export default function OtherServiceCards() {
  return (
    <article className="other-service-cards-container">
      <article className="other-service-card-wrapper">
        <h3 className="other-service-card-heading">
          Soffit and Fascia Cleaning Services
        </h3>
        <p className="other-service-card-text">
          Our professional cleaning team offers top-notch soffit and fascia
          cleaning services to keep your home or business looking its best. We
          use specialized equipment and eco-friendly cleaning solutions to
          remove dirt, grime, and stains from hard-to-reach areas.
        </p>
        <Link
          to="/services#soffits-and-fascias"
          className="other-service-card-link"
        >
          Find out more!
        </Link>
      </article>

      <article className="other-service-card-wrapper">
        <h3 className="other-service-card-heading">UPVC Cleaning Services</h3>
        <p className="other-service-card-text">
          We specialize in providing top-quality UPVC cleaning services that are
          designed to make your property shine. Our skilled team uses
          state-of-the-art equipment and eco-friendly cleaning solutions to
          effectively remove dirt, grime, and other debris from your uPVC
          surfaces.
        </p>
        <Link to="/services#upvc" className="other-service-card-link">
          Find out more!
        </Link>
      </article>

      <article className="other-service-card-wrapper">
        <h3 className="other-service-card-heading">
          Solar panel cleaning services
        </h3>
        <p className="other-service-card-text">
          We offer exceptional solar panel cleaning services to help maximize
          your solar energy utput. With our eco-friendly cleaning solutions and
          specialized equipment, we can get those panels operating at peak
          performance.
        </p>
        <Link to="/services#solar-panels" className="other-service-card-link">
          Find out more!
        </Link>
      </article>
      <article className="other-service-card-wrapper">
        <h3 className="other-service-card-heading">
          Greenhouse cleaning services
        </h3>
        <p className="other-service-card-text">
          We provide top-notch greenhouse cleaning services to keep your plants
          healthy and thriving. Using only the best eco-friendly cleaning
          solutions and specialized equipment, we remove dirt, algae, and other
          build-ups that can damage your plants and affect their growth.
        </p>
        <Link to="/services#greenhouses" className="other-service-card-link">
          Find out more!
        </Link>
      </article>
      <article className="other-service-card-wrapper">
        <h3 className="other-service-card-heading">
          Caravan and static home cleaning services
        </h3>
        <p className="other-service-card-text">
          Our professional cleaning team provides top-quality caravan cleaning
          services to keep your mobile home looking its best. Using eco-friendly
          cleaning solutions and specialized equipment, we can make your caravan
          look new again.
        </p>
        <Link to="/services#caravans" className="other-service-card-link">
          Find out more!
        </Link>
      </article>
    </article>
  );
}
