import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/homepage/hero-section/HeroSection";
import SpecialOfferWidget from "../components/homepage/special-offer-widget/SpecialOfferWidget";
import ServiceSection from "../components/homepage/services-section/ServiceSection";
import TestimonialsSection from "../components/homepage/testimonials-section/TestimonialsSection";
import OtherServices from "../components/homepage/other-services-section/OtherServices";

export default function Home() {
  return (
    <Layout>
      <main className="main-content-container">
        <HeroSection />
        <SpecialOfferWidget />
        <ServiceSection />
        <TestimonialsSection />
        <OtherServices />
      </main>
    </Layout>
  );
}

export const Head = () => (
  <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

    <meta
      name="description"
      content="Professional Window Cleaning services in West Sussex! We handle internals as well as externals, caravans, conservatories, fascias and soffits. "
    />
    <meta
      name="keywords"
      content="Window Cleaning Sussex, Caravan Cleaning Sussex, Soffit and Fascia cleaning Susssex, Greenhouse cleaning Sussex, conservatory cleaning sussex"
    />
    <meta name="format-detection" content="telephone=yes" />
    <meta name="theme-color" content="#000000" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="theme-color" content="#000000" />
    <meta
      property="og:title"
      content="Professional Window Cleaners in West Sussex"
    />
    <meta
      property="og:description"
      content="Professional Window Cleaning services in West Sussex! We handle internals as well as externals, caravans, conservatories, fascias and soffits."
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://www.mccabe-webdesign.com/#contact"
    />
    <meta
      property="og:image"
      content="https://i.postimg.cc/qBydZxfV/ecotech.png"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="msapplication-TileColor" content="#222" />
    <meta name="theme-color" content="#222" />
    <title>Window Cleaning services in West Sussex | Ecotech</title>
  </>
);
