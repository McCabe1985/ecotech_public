import React from "react";
import CaravanCleaningSectionImg from "./caravan-cleaning-section-parts/CaravanCleaningSectionImg";
import CaravanCleaningSectionText from "./caravan-cleaning-section-parts/CaravanCleaningSectionText";
export default function CaravanCleaningSection() {
  return (
    <section id="caravans" className="servicepage-section-container img-left">
      <CaravanCleaningSectionImg />
      <CaravanCleaningSectionText />
    </section>
  );
}
