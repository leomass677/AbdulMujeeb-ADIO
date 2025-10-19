import React from "react";
import { Star } from "lucide-react";
import imagies from "./imagies"; // ensure this contains your image path

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden text-white pb-22 md:px-12 lg:px-20">
      {/* Text */}
      <div className="relative z-20 mb-6 text-center md:mb-10 lg:mb-16">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          I’m{" "}
          <span className="text-[#C1B63A] relative">
            AbdulMujeeb,
            <span className="absolute left-1/2 -translate-x-1/2 -top-3 w-8 h-3 bg-[#C1B63A] rounded-full opacity-80"></span>
          </span>{" "}
          <br />
          Product Designer
        </h1>
      </div>

      {/* Quote and Stars */}
      <div className="relative z-20 flex flex-col items-start justify-between w-full max-w-5xl gap-6 mt-2 md:flex-row md:mt-4">
        {/* Left Quote */}
        <div className="max-w-xs text-sm leading-relaxed text-gray-300 lg:text-[18px] md:text-base lg:-translate-x-18">
          <span className="text-3xl text-[#C1B63A]">“</span>
          <p>
            AbdulMujeeb’s design is thoughtful, user-centered, and merges
            creativity, usability, and strategy. Every pixel, flow, and
            interaction is crafted to solve real problems and create meaningful
            impact.
          </p>
        </div>

        {/* Stars */}
        <div className="flex gap-2 text-[#C1B63A] self-center md:self-start">
          {[...Array(4)].map((_, i) => (
            <Star key={i} fill="#C1B63A" stroke="none" size={28} />
          ))}
        </div>
      </div>

      {/* Profile Image with yellow arc */}
      <div className="absolute bottom-0 z-10 flex flex-col items-center -translate-x-1/2 translate-y-4 left-1/2 md:translate-y-10 lg:translate-y-14">
        {/* Arc background */}
        <div className="w-[450px] lg:w-[600px] lg:h-[330px] h-[240px] bg-gradient-to-t from-[#C1B63A] to-[#7A6C25] rounded-t-full absolute bottom-0 lg:translate-x-5"></div>

        {/* Image */}
        <img
          src={imagies.person}
          alt="AbdulMujeeb"
          className="relative  lg:translate-y-8 z-10 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] object-cover rounded-lg border-4 border-transparent"
        />
      </div>
    </section>
  );
};

export default HeroSection;
