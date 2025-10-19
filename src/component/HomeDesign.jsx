import React, { useState } from "react";
import { motion } from "framer-motion";
import imagies from "./imagies";
import check_mate from "../assets/check_mate.png";
import { useNavigate } from "react-router-dom";

const HomeDesign = () => {
  const [showDrive, setShowDrive] = useState(false);
  const [showCheckMate, setShowCheckMate] = useState(false);
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay },
    }),
  };

  return (
    <motion.div
      id="design-section"
      initial="hidden"
      animate="visible"
      className="w-full min-h-screen py-8 overflow-hidden text-white"
    >
      {/* ===== Header Section ===== */}
      <motion.div
        variants={fadeUp}
        custom={0.2}
        className="flex flex-col items-center justify-between w-full gap-8 px-6 pt-20 lg:flex-row"
      >
        <h3 className="text-center lg:text-left">
          <span className="block text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl font-Urbanist">
            Let’s have a look at my
          </span>
          <span className="block mt-2 text-2xl font-semibold sm:text-3xl lg:text-4xl text-yellow">
            Portfolio
          </span>
        </h3>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-3 text-sm font-semibold text-white transition-all duration-300 border rounded-full shadow-md cursor-pointer sm:text-base lg:px-12 lg:py-4 border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-sm hover:shadow-lg"
        >
          Download Resume
        </motion.button>
      </motion.div>

      {/* ===== Portfolio Section ===== */}
      <motion.div
        variants={fadeUp}
        custom={0.4}
        className="flex flex-col-reverse gap-6 mt-10 lg:flex-row"
      >
        {/* === Drive9ja === */}
        <div
          onClick={() => setShowDrive(!showDrive)}
          className="relative flex-1 w-full rounded-lg cursor-pointer bg-primary-white overflow-clip group min-h-90"
        >
          <motion.img
            src={imagies.Drive9ja}
            alt="Drive9ja"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1 }}
            className={`${
              showDrive
                ? "h-50 translate-y-5 translate-x-3/4 transition-all duration-1000 ease-in-out w-auto "
                : "transition-all duration-1000 ease-in-out translate-y-1/2 group-hover:translate-y-5 translate-x-3/4 h-50 w-auto"
            }`}
          />

          <motion.button
            onClick={() => {
              navigate("/design/drive9ja");
              window.scrollTo(0, 0);
            }}
            whileHover={{ rotate: 90 }}
            className="absolute p-1 text-2xl transition-all duration-300 border rounded-full shadow-md cursor-pointer size-14 hover:bg-yellow bg-primary-white top-4 right-4 text-primary-dark group-hover:scale-110 border-grey-50 group-hover:shadow-md"
          >
            ➡
          </motion.button>

          <div
            className={`absolute flex flex-col w-full max-w-md gap-4 p-4 transition-all duration-700 border-2 shadow-md rounded-xl left-6 bottom-6 bg-primary-white/20 backdrop-blur-sm border-grey-50 ${
              showDrive
                ? "translate-y-0"
                : "translate-y-20 lg:group-hover:translate-y-0"
            }`}
          >
            <p className="text-6xl font-semibold text-primary-dark/75">
              Drive9ja
            </p>
            <p className="max-w-xs text-sm font-medium text-primary-dark/75">
              Simplify payment app for car owners, commercial drivers, and fleet
              managers.
            </p>
          </div>
        </div>

        {/* === Check Mate === */}
        <div
          onClick={() => setShowCheckMate(!showCheckMate)}
          className="relative flex-1 w-full bg-no-repeat bg-cover rounded-lg cursor-pointer overflow-clip group min-h-85"
          style={{ backgroundImage: `url(${check_mate})` }}
        >
          <motion.button
            onClick={() => {
              navigate("/design/checkmate");
              window.scrollTo(0, 0);
            }}
            whileHover={{ rotate: 90 }}
            className="absolute p-1 text-2xl transition-all duration-300 border rounded-full shadow-md cursor-pointer size-14 hover:bg-yellow bg-primary-white top-4 right-4 text-primary-dark group-hover:scale-110 border-grey-50 group-hover:shadow-md"
          >
            ➡
          </motion.button>

          <div
            className={`absolute flex flex-col w-full max-w-md gap-4 p-4 transition-all duration-700 border-2 shadow-md rounded-xl left-6 bottom-6 bg-primary-white/20 backdrop-blur-xl border-grey-50/10 ${
              showCheckMate
                ? "translate-y-0"
                : "translate-y-20 lg:group-hover:translate-y-0"
            }`}
          >
            <p className="text-6xl font-semibold text-white/80">Check Mate</p>
            <p className="max-w-md font-medium text-md text-primary-dark">
              Smart Task Management for Students and Teams
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeDesign;
