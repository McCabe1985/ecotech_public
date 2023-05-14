import React from "react";
import WindowCleaningSectionText from "./window-cleaning-section-parts/WindowCleaningSectionText";
import WindowCleaningSectionImg from "./window-cleaning-section-parts/WindowCleaningSectionImg";

export default function WindowCleaningSection() {
  return (
    <section id="windows" className="servicepage-section-container img-right">
      <WindowCleaningSectionText />
      <WindowCleaningSectionImg />
    </section>
  );
}
