import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

export default function success() {
  return (
    <Layout>
      <main className="main-content-container">
        <section className="success-content-container">
          <h1 className="success-heading">Thankyou for getting in touch!</h1>
          <p className="success-blurb">
            We endeavour to respond to all messages within 48 hours.
          </p>
          <Link to="/" className="success-link">
            Back to Homepage
          </Link>
        </section>
      </main>
    </Layout>
  );
}
