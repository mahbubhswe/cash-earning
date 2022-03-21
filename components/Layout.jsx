import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
export default function Layout({ pageTitle, children }) {
  return (
    <div className="min-h-full">
      <Head>
        <title>
          {pageTitle
            ? "Cash Earning | " + pageTitle
            : "Walcome to Cash Earning"}
        </title>
      </Head>
      <Navbar></Navbar>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">{children}</div>
        </div>
      </main>
    </div>
  );
}
