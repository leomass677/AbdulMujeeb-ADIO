import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GoArrowLeft } from "react-icons/go";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] text-white px-6">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[120px] sm:text-[160px] font-bold text-yellow-400 leading-none"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-2xl font-semibold sm:text-3xl"
      >
        Oops! Page Not Found 😕
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-md mt-4 text-base text-gray-300 sm:text-lg"
      >
        The page you’re looking for doesn’t exist or may have been moved.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          navigate("/");
          window.scrollTo(0, 0);
        }}
        className="px-8 py-3 mt-8 flex font-semibold justify-center items-center gap-1 text-black transition bg-yellow-400 rounded-full shadow-md cursor-pointer hover:bg-yellow-500"
      >
        <span> Go Back Home</span>{" "}
        <GoArrowLeft className="font-black text-2xl" />
      </motion.button>
    </div>
  );
};

export default NotFound;
