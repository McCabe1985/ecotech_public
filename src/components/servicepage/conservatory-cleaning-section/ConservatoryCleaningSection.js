import React from "react";
import ConservatoryCleaningSectionText from "./conservatory-cleaning-section-parts/ConservatoryCleaningSectionText";
import ConservatoryCleaningSectionImg from "./conservatory-cleaning-section-parts/ConservatoryCleaningSectionImg";
export default function ConservatoryCleaningSection() {
  return (
    <section
      id="conservatories"
      className="servicepage-section-container img-right"
    >
      <ConservatoryCleaningSectionText />
      <ConservatoryCleaningSectionImg />
    </section>
  );
}
