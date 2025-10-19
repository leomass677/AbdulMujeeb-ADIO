import React from "react";
import { TypeAnimation } from "react-type-animation";
import imagies from "../component/imagies";

const about = () => {
  return (
    <div>
      <div className=" grid grid-rows-1 items-stretch md:grid-cols-2 lg:grid-cols-2 gap-6 text-white justify-center  min-h-[calc(100vh-80px)] py-10 leading-relaxed text-[16px] font-normal">
        <div className="flex flex-col gap-2 px-8 transition-all duration-500 shadow-md bg-transparent backdrop-blur-sm text-primary-white border hover:rounded-3xl border-gray-50/20 hover:border-green-50 hover:scale-101 py-7 rounded-2xl group hover:shadow-lg">
          <h2 className="text-2xl font-bold font-Dm-sans">ABOUT ME</h2>

          <div className="text-2xl font-semibold">
            <TypeAnimation
              sequence={[
                "I’m AbdulMujeeb Adio.",
                2000,
                "I’m a UI/UX Designer.",
                2000,
                "I’m an Aspiring Entrepreneur.",
                2000,
                "I’m a Problem Solver.",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="flex flex-col gap-2 px-8 transition-all leading-relaxed duration-500 shadow-md bg-transparent backdrop-blur-sm text-primary-white border hover:rounded-br-4xl border-gray-50/20 hover:border-green-50 hover:scale-101 py-7 rounded-2xl group hover:shadow-lg">
            A UI/UX Designer, aspiring entrepreneur, and problem solver who
            believes design should be more than just visuals; it should be about
            creating experiences that make life easier, smarter, and more
            enjoyable. My journey into design is shaped by a unique background,
            I hold an HND in Purchasing & Supply and I’m currently pursuing a
            BSc in Business Entrepreneurship. This blend of business knowledge
            and creative design thinking helps me approach projects not just as
            a designer, but also as a strategic thinker who understands both the
            user’s needs and the business goals behind every product.
          </p>

          <div className="flex flex-col gap-2 px-8 transition-all duration-500 shadow-md bg-transparent backdrop-blur-sm text-primary-white border hover:rounded-tr-4xl border-gray-50/20 hover:border-green-50 hover:scale-101 py-7 rounded-2xl group hover:shadow-lg">
            <h3 className="text-[18px] font-semibold">What Drives Me 🚀</h3>
            <p className="">
              I’m passionate about building solutions that solve real problems.
              For example:
            </p>
            <ol>
              <li>
                Drive9ja – a payment app designed to help drivers and fleet
                managers handle transactions seamlessly.
              </li>
              <li>
                CheckMate – a task management tool tailored for students and
                professionals to stay organized.
              </li>
              <li>
                Brand Identity Projects – helping businesses craft stories and
                digital experiences that connect with people.
              </li>
            </ol>
            <p>
              Each project reflects my commitment to human-centered design
              research-driven, intuitive, and impactful.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex items-center justify-center rounded-lg md:h-full">
          <div className="w-full h-[500px] rounded-full bg-yellow/20 shadow-yellow/60 shadow-2xl backdrop-blur-none drop-shadow-2xl   flex justify-center items-center overflow border-8 border-yellow/30 ">
            {" "}
            <img
              src={imagies.person}
              alt={imagies.person}
              className=" absolute rounded-b-full top-0 left-0 -translate-y-24 drop-shadow-2xl h-[580px] object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 px-8 transition-all duration-500 shadow-md bg-transparent backdrop-blur-sm text-primary-white border hover:rounded-br-4xl border-gray-50/20 hover:border-green-50 hover:scale-101 py-7 rounded-2xl group hover:shadow-lg">
          <h2>My Values ✨</h2>
          <div className="w-10 h-1 transition-all duration-500 ease-in-out rounded-full bg-primary-white group-hover:w-full "></div>
          <ol>
            <li>
              Empathy: Putting myself in the user’s shoes to design with
              purpose.
            </li>
            <li>
              Creativity: Finding fresh, practical ways to solve challenges.
            </li>
            <li>
              Impact: Designing products that improve lives, businesses, and
              communities.
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-2 px-8 transition-all duration-500 shadow-md bg-transparent backdrop-blur-sm text-primary-white border hover:rounded-bl-4xl border-gray-50/20 hover:border-green-50 hover:scale-101 py-7 rounded-2xl group hover:shadow-lg">
          <h2>Funny Fact 😁</h2>
          <div className="w-10 h-1 transition-all duration-500 ease-in-out rounded-full bg-primary-white group-hover:w-full "></div>
          <p>
            I love to write. I have series of articles on Medium, loveshortstory
            and I currently have an eBook for sale on Selar.com. (500 things
            every entrepreneur needs)
          </p>
        </div>

        <div className="flex flex-col gap-2 px-8 transition-all duration-500 shadow-md bg-transparent backdrop-blur-sm text-primary-white border hover:rounded-tr-4xl border-gray-50/20 hover:border-green-50 hover:scale-101 py-7 rounded-2xl group hover:shadow-lg">
          <h2>My Mission 💡</h2>
          <div className="w-10 h-1 transition-all duration-500 ease-in-out rounded-full bg-primary-white group-hover:w-full "></div>
          <p>
            To use design as a bridge between ideas and impact creating
            products, brands, and experiences that not only work but also
            inspire. 👉 If you’re looking for a designer who brings creativity,
            empathy, and business insight into every project, I’d love to
            collaborate with you.
          </p>
        </div>

        <div className="flex flex-col gap-2 px-8 transition-all duration-500 shadow-md bg-transparent backdrop-blur-sm text-primary-white border border-gray-50/20 hover:rounded-tl-4xl hover:border-green-50 hover:scale-101 py-7 rounded-2xl group hover:shadow-lg">
          <h2 className="font-bold">Beyond Design 🌍</h2>
          <div className="w-10 h-1 transition-all duration-500 ease-in-out rounded-full bg-primary-white group-hover:w-full "></div>
          <p>
            Outside of design, I’m deeply interested in fitness, health, and
            social impact. I believe that strong communities are built when
            people have the tools to live better and think smarter—and I want my
            work to contribute to that vision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
