import React from "react";
import GreenHousecleaningSectionText from "./greenhouse-cleaning-section-parts/GreenHouseCleaningSectionText";
import GreenHousecleaningSectionImg from "./greenhouse-cleaning-section-parts/GreenHouseCleaningSectionImg";
export default function GreenHousecleaningSection() {
  return (
    <section
      id="greenhouses"
      className="servicepage-section-container img-left"
    >
      <GreenHousecleaningSectionImg />
      <GreenHousecleaningSectionText />
    </section>
  );
}
