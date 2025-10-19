import React from "react";
import imagies from "../component/imagies";
import { motion } from "framer-motion";

import Hero from "../component/Hero";
import Services from "../component/Services";
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
