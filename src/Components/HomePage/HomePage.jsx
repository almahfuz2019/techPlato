import React from "react";
import Contact from "./Contact";
import ContactUs from "./ContactUs";
import OurClients from "./OurClients";
import OurProducts from "./OurProducts";
import About from "./About";
import Hero_Home from "./Hero_Home";
import "../../app/globals.css";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <Hero_Home />
      <About />
      <OurProducts />
      <OurClients />
      <ContactUs />
      <Contact />
    </div>
  );
}
