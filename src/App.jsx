import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductViewer />
    </>
  );
};

export default App;
