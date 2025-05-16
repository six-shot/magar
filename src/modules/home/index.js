import React, { useEffect } from "react";
import Hero from "./features/hero";
import Offers from "./features/offers";
import Feature from "./features/feature";
import Counter from "./features/counter";
import Wallet from "./features/wallet";
import Network from "./features/network";
import Portfolio from "./features/portfolio";
import Footer from "./features/footer";
import Navbar from "./features/navbar";
import { motion } from "framer-motion";

export default function Home() {
 

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />

      <div className="max-w-[1440px] mx-auto relative">
        <Network />
        <Offers />
        <Counter />
        <Feature />
        <Wallet />
        <Portfolio />
        <Footer />
      </div>

   
    </div>
  );
}
