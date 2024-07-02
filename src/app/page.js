import HomePage from "@/Components/HomePage/HomePage";
import React from "react";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
export default function Page() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
