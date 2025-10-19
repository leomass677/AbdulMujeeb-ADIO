import React from "react";
import imagies from "../component/imagies";
import { div } from "framer-motion/client";
import Hero from "../component/Hero";
import Services from "../component/services";
import HomeDesign from "../component/HomeDesign";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <HomeDesign />
    </div>
  );
};

export default Home;
