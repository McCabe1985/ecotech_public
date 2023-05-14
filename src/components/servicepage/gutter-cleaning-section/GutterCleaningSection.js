import React from "react";
import GutterCleaningSectionText from "./gutter-cleaning-section-parts/GutterCleaningSectionText";
import GutterCleaningSectionImg from "./gutter-cleaning-section-parts/GutterCleaningSectionImg";
export default function GutterCleaningSection() {
  return (
    <section id="gutters" className="servicepage-section-container img-left">
      <GutterCleaningSectionImg />
      <GutterCleaningSectionText />
    </section>
  );
}
