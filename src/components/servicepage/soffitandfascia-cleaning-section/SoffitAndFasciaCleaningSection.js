import React from "react";
import SoffitAndFasciaCleaningSectionText from "./soffitandfascia-cleaning-section-parts/SoffitAndFasciaCleaningSectionText";
import SoffitAndFasciaCleaningSectionImg from "./soffitandfascia-cleaning-section-parts/SoffitAndFasciaCleaningSectionImg";
export default function SoffitAndFasciaCleaningSection() {
  return (
    <section
      id="soffits-and-fascias"
      className="servicepage-section-container img-right"
    >
      <SoffitAndFasciaCleaningSectionText />
      <SoffitAndFasciaCleaningSectionImg />
    </section>
  );
}
