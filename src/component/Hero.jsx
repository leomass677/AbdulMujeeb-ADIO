import React from "react";
import { Star } from "lucide-react";
import imagies from "./imagies"; // ensure this contains your image path

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-32 md:px-12 lg:px-20 text-white overflow-hidden">
      {/* Text */}
      <div className="relative z-20 mb-8 text-center md:mb-12 lg:mb-16">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
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
      <div className="relative z-20 flex flex-col items-center md:flex-row md:items-start justify-between w-full max-w-5xl gap-6 md:gap-12 mt-6">
        {/* Left Quote */}
        <div className="max-w-md text-gray-300 text-center md:text-left text-base md:text-lg lg:text-xl">
          <span className="text-3xl text-[#C1B63A]">“</span>
          <p className="mt-2 leading-relaxed">
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
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-20 md:-translate-y-16 lg:-translate-y-8 flex flex-col items-center z-10">
        {/* Arc background */}
        <div className="absolute bottom-0 w-[280px] h-[180px] md:w-[400px] md:h-[250px] lg:w-[600px] lg:h-[330px] bg-gradient-to-t from-[#C1B63A] to-[#7A6C25] rounded-t-full"></div>

        {/* Image */}
        <img
          src={imagies.person}
          alt="AbdulMujeeb"
          className="relative w-[220px] h-[220px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] object-cover rounded-xl border-4 border-transparent z-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
