import React from "react";
import OtherServicesHeader from "./other-services-parts/OtherServicesHeader";
import OtherServicesIntro from "./other-services-parts/OtherServicesIntro";
import OtherServiceCards from "./other-services-parts/OtherServiceCards";

export default function OtherServices() {
  return (
    <section className="other-services-section-container">
      <OtherServicesHeader />
      <OtherServicesIntro />
      <OtherServiceCards />
    </section>
  );
}
