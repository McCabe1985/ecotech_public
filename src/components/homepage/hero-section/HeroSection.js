import React from "react";
import HeroText from "./hero-section-parts/HeroText";
import HeroImg from "./hero-section-parts/HeroImg";

export default function HeroSection() {
  return (
    <header className="hero-container">
      <HeroText />
      <HeroImg />
    </header>
  );
}
