import React from "react";
import TestimonialsHeader from "./testimonials-section-parts/TestimonialsHeader";
import TestimonialsContent from "./testimonials-section-parts/TestimonialsContent";

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section-container">
      <TestimonialsHeader />
      <TestimonialsContent />
    </section>
  );
}
