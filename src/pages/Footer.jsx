import React from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
} from "react-icons/fa6";

const Footer = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      id="contact-section"
      className="bg-[#595959] text-white rounded-3xl mt-20 px-6 sm:px-12 md:px-20 py-2"
    >
      {/* === Top Section === */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-between gap-6 sm:gap-8 md:gap-0 md:flex-row md:items-center"
      >
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
          Let’s Connect There
        </h2>

        {/* Smooth scroll button */}
        <motion.a
          href="#contact-section"
          onClick={handleScrollToContact}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#d8c226] text-black flex justify-between font-semibold px-8 py-3 rounded-full flex items-center gap-2 text-lg hover:bg-[#e0cf4c] transition cursor-pointer"
        >
          Hire me{" "}
          <span className="text-xl">
            <GoArrowUpRight className="text-2xl" />
          </span>
        </motion.a>
      </motion.div>

      {/* === Bottom Section === */}
      <div className="grid grid-cols-1 gap-10 text-gray-200 md:grid-cols-4 mt-14">
        {/* --- Left Profile --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white">AbdulMujeeb ADIO</h3>
          <p className="mb-4 text-sm text-gray-300">UI/UX Designer</p>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://x.com/properilorinboy?s=21"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-400"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/abdulmujeeb-adio-299a0a213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-400"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://dribbble.com/abd-mujeeb-adio"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-400"
            >
              <FaDribbble />
            </a>
            <a
              href="https://www.behance.net/abdmujeebadio"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-400"
            >
              <FaBehance />
            </a>
          </div>
        </motion.div>

        {/* --- Navigation --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="mb-3 text-lg font-semibold text-white">Navigation</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="transition hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/portfolio" className="transition hover:text-yellow-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/about" className="transition hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a
                href="#contact-section"
                onClick={handleScrollToContact}
                className="transition cursor-pointer hover:text-yellow-400"
              >
                Contact
              </a>
            </li>
          </ul>
        </motion.div>

        {/* --- Social Links --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="mb-3 text-lg font-semibold text-white">
            Social Links
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="https://x.com/properilorinboy?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-yellow-400"
              >
                <FaXTwitter /> X / Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdulmujeeb-adio-299a0a213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-yellow-400"
              >
                <FaLinkedinIn /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://dribbble.com/abd-mujeeb-adio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-yellow-400"
              >
                <FaDribbble /> Dribbble
              </a>
            </li>
            <li>
              <a
                href="https://behance.net/abdmujeebadio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-yellow-400"
              >
                <FaBehance /> Behance
              </a>
            </li>
          </ul>
        </motion.div>

        {/* --- Contact Info --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="mb-3 text-lg font-semibold text-white">
            Contact Info
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a
                href="mailto:adiopeace@gmail.com"
                className="transition hover:text-yellow-400"
              >
                adiopeace@gmail.com
              </a>
            </li>
            <li>
              <a
                href="mailto:properilorinboy@gmail.com"
                className="transition hover:text-yellow-400"
              >
                properilorinboy@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+2348103811859"
                className="transition hover:text-yellow-400"
              >
                +234 (810) 381 1859
              </a>
            </li>
            <li>Kwara State, Nigeria</li>
          </ul>
        </motion.div>
      </div>

      {/* --- Copyright --- */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-10 text-sm text-center border-t-2 border-gray-200 text-gray-300 py-4 "
      >
        © {new Date().getFullYear()} AbdulMujeeb ADIO
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
