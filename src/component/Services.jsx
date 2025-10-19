import React from "react";
import { motion } from "framer-motion";
import imagies from "../component/imagies";
import background_img from "../assets/backgroudImg.png";
const Services = () => {
  const items = [
    {
      img: imagies.img_1,
      heading: "UI/UX",
      paragraph: "Designing digital products that work as good as they look.",
    },
    {
      img: imagies.img_2,
      heading: "Web Design",
      paragraph:
        "I build web experiences that are bold, beautiful, and intuitive.",
    },
    {
      img: imagies.img_3,
      heading: "App Design",
      paragraph:
        "I design apps that don’t just look good—they feel right in every tap, swipe, and scroll.",
    },
  ];

  return (
    <div
      className="w-full px-8 py-8 text-white bg-center bg-no-repeat bg-cover rounded-3xl"
      style={{ backgroundImage: `url(${background_img})` }}
    >
      <h2 className="mb-8 text-3xl font-bold text-center">Our Services</h2>
      <div className="grid gap-8 cursor-pointer md:grid-cols-3">
        {items.map((item, key) => (
          <motion.div
            key={key}
            className="flex flex-col items-center gap-4 p-8 text-center transition-all duration-500 border shadow-lg rounded-2xl bg-white/2 border-white/20 backdrop-blur-xs hover:shadow-2xl hover:bg-white/5"
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div
              className="w-[90px] h-[90px] flex items-center justify-center rounded-full
              bg-white/20 border border-white/30 shadow-inner backdrop-blur-md"
            >
              <motion.img
                src={item.img}
                alt={item.heading}
                className="object-contain w-14 h-14"
                whileHover={{ scale: 1.15 }}
              />
            </div>
            <h3 className="text-xl font-semibold">{item.heading}</h3>
            <p className="text-gray-200">{item.paragraph}</p>
          </motion.div>
        ))}
      </div>

      {/*  */}
    </div>
  );
};

export default Services;
