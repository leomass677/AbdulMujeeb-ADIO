import { motion } from "framer-motion";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import ContactUs from "./pages/ContactUs";
import Design from "./pages/design";
import Testimonies from "./pages/Testimonies";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        backgroundImage: `
          linear-gradient(to bottom right, rgba(181, 125, 88, 0.2), transparent),
          linear-gradient(135deg, #171717 30%, #B57D58 70%)
        `,
      }}
      className="px-[16px] sm:px-[20px] md:px-[48px] lg:px-[120px] pt-8 font-Manrope"
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/design/:id" element={<Design />} />
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </motion.div>
  );
};

export default App;
