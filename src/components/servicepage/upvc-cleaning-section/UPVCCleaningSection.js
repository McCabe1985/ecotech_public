import React from "react";
import UPVCCleaningSectionText from "./upvc-cleaning-section-parts/UPVCCleaningSectionText";
import UPVCCleaningSectionImg from "./upvc-cleaning-section-parts/UPVCCleaningSectionImg";

export default function UPVCCleaningSection() {
  return (
    <section id="upvc" className="servicepage-section-container img-right">
      <UPVCCleaningSectionText />
      <UPVCCleaningSectionImg />
    </section>
  );
}
