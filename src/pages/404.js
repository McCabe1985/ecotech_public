import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

export default function NotFound() {
  return (
    <Layout>
      <main className="main-content-container">
        <section className="notfound-content-container">
          <h1 className="notfound-heading">Error 404, Page Not Found</h1>
          <Link to="/" className="notfound-link">
            Back to Homepage
          </Link>
        </section>
      </main>
    </Layout>
  );
}
