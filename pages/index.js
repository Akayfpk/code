// src/pages/index.js
import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import ProductDisplay from "../components/ProductDisplay";

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>SitStyle Furniture Store</title>
        <meta name="description" content="Modern furniture for your home" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
      </Head>
      <main>
        {/* Product Display Section */}
        <ProductDisplay />
        
        {/* Other content sections */}
        {/* ... */}
      </main>
    </Layout>
  );
};

export default HomePage;
