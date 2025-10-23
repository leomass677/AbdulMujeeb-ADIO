import React from "react";
import { Star } from "lucide-react";
import imagies from "./imagies"; // ensure this contains your image path

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center lg:justify-center justify-between mt-10 sm:mt-12 min-h-screen px-6  lg:pt-0 pb-32 md:px-12 lg:px-0 text-white overflow-hidden    max-h-screen">
      {/* Text */}
      <div className="relative z-20 mb-8 text-center md:mb-12 lg:mb-16">
        <h1 className="text-2xl font-bold leading-tight md:text-6xl lg:text-4xl ">
          I’m{" "}
          <span className="text-[#C1B63A] relative">
            AbdulMujeeb
            <span className="absolute left-1/2 -translate-x-1/2 -top-3 w-10 h-2 bg-[#C1B63A] rounded-full opacity-80"></span>
          </span>{" "}
          <br />
          Product Designer
        </h1>
      </div>

      {/* Quote and Stars */}
      <div className="relative h-[70vh] z-20 flex flex-col items-center md:flex-row md:items-start justify-start  lg:justify-between w-full  gap-6 md:gap-12 mt-6  -amber-300 ">
        {/* Left Quote */}
        <div className="w-full lg:max-w-[35%] lg:-translate-y-30 text-gray-300 text-center  md:text-left text-base md:text-lg lg:text-xl ">
          <span className="text-3xl md:text-4xl lg:text-5xl text-[#C1B63A] ">
            “
          </span>
          <p className="mt-2 leading-relaxed md:text-xl">
            AbdulMujeeb’s design is thoughtful, user-centered, and merges
            creativity, usability, and strategy. Every pixel, flow, and
            interaction is crafted to solve real problems and create meaningful
            impact.
          </p>
        </div>

        {/* Stars */}
        <div className="flex gap-2 mt-4 md:mt-0 text-[#C1B63A]">
          {[...Array(4)].map((_, i) => (
            <Star key={i} fill="#C1B63A" stroke="none" size={28} />
          ))}
        </div>
      </div>

      {/* Profile Image with yellow arc */}
      <div className="absolute bottom-12 w-full   lg:bottom-25 left-1/2 transform -translate-x-1/2 -translate-y-20 md:-translate-y-16 lg:-translate-y-4 flex flex-col  items-center z-10 ">
        {/* Arc background */}
        <div className="absolute bottom-1 w-[80vw] h-[230px] md:w-[450px] md:h-[300px] lg:w-[450px] lg:h-[220px] bg-gradient-to-t from-[#C1B63A] to-[#7A6C25] rounded-t-full   "></div>

        {/* Image */}
        <img
          src={imagies.person}
          alt="AbdulMujeeb"
          className="md:relative absolute bottom-0   w-[300px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[310px] lg:h-[300px]  object-cover rounded-sm shadow-xs border-4 border-transparent z-10 "
        />
      </div>
    </section>
  );
};

export default HeroSection;
