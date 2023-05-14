import React from "react";
import SolarPanelCleaningSectionText from "./solarpanel-cleaning-section-parts/SolarPanelCleaningSectionText";
import SolarPanelCleaningSectionImg from "./solarpanel-cleaning-section-parts/SolarPanelCleaningSectionImg";

export default function SolarPanelCleaningSection() {
  return (
    <section
      id="solar-panels"
      className="servicepage-section-container img-left"
    >
      <SolarPanelCleaningSectionImg />
      <SolarPanelCleaningSectionText />
    </section>
  );
}
