import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to Portfolio section (HomeDesign)
  const handleScrollToDesign = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("design-section")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 600);
    } else {
      document.getElementById("design-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  // Scroll to Contact section
  const handleScrollToContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact-section")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 600);
    } else {
      document.getElementById("contact-section")?.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Design", scroll: handleScrollToDesign },
    { name: "Testimonies", path: "/testimonies" },
  ];

  return (
    <nav className="bg-[#171717]/5 backdrop-blur-xs rounded-md text-white px-6 py-4 shadow-lg lg:h-[80px] sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-bold text-[#B57D58] cursor-pointer"
        >
          AbdulMujeeb ADIO
        </h1>

        {/* Desktop Menu */}
        <ul className="items-center hidden space-x-6 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.scroll ? (
                <button
                  onClick={item.scroll}
                  className="hover:text-[#B57D58] transition-colors"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.path}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className={`hover:text-[#B57D58] cursor-pointer ${
                    location.pathname === item.path
                      ? "text-[#B57D58] font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}

          {/* Contact button */}
          <motion.li
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button
              onClick={handleScrollToContact}
              className="px-8 py-3 ml-4 active:bg-primary-50 cursor-pointer font-bold text-black transition-all duration-500 bg-primary-white rounded-full hover:scale-105"
            >
              Contact
            </button>
          </motion.li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mt-4 space-y-6 md:hidden py-4">
          {navItems.map((item) => (
            <li key={item.name} className="border-b pb-4 border-white/80 group">
              {item.scroll ? (
                <button
                  onClick={item.scroll}
                  className="block hover:text-[#B57D58]  "
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  to={item.path}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setIsOpen(false);
                  }}
                  className={`block cursor-pointer hover:text-[#B57D58] ${
                    location.pathname === item.path
                      ? "text-[#B57D58] font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}

          {/* Contact button mobile */}
          <motion.li
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button
              onClick={handleScrollToContact}
              className="block px-6 py-3 font-bold text-black cursor-pointer transition-all duration-500 scale-105 focus:scale-110 active:bg-primary-50 bg-primary-white mt-4 w-full rounded-full"
            >
              Contact
            </button>
          </motion.li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
