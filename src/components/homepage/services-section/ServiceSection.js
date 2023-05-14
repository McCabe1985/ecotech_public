import React from "react";
import ServiceHeader from "./service-section-parts/ServiceHeader";
import ServiceIntro from "./service-section-parts/ServiceIntro";
import ServiceCards from "./service-section-parts/ServiceCards";

export default function Services() {
  return (
    <section className="services-section-container">
      <ServiceHeader />
      <ServiceIntro />
      <ServiceCards />
    </section>
  );
}
