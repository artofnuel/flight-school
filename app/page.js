"use client";
import Cta from "./components/Cta";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  const [toggle, setToggle] = useState(true);
  return (
    <main className="bg-white text-black">
      <Hero />
      <Services />
      <Cta />
      <Footer />
    </main>
  );
}
