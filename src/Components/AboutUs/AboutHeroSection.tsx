import React from "react";
import Image from "next/image";
import HeroImage from "@/assets/aboutHeroImg.png";

const AboutHeroSection = () => {
  return (
    <section className="py-10 bg-[#CFC9BC] w-full ">
      <div className="max-w-7xl mx-auto container px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-8 space-y-8 lg:space-y-14">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 text-center leading-tight">
              <span className="block ">We`re Redefining</span>
              <span className="block">How the World</span>
              <span className="block">Perceives Weight</span>
              <span className="block">
                LOSS
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 text-start mt-12 p-4">
              Healthiclick goes beyond just workouts and diets, equipping you
              with the behavioral tools needed to make weight loss permanent and
              long-term.
            </p>

            
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/3 flex justify-center rounded-full overflow-hidden ">
            <div className="relative w-full h-64 md:h-96 lg:h-[400px] bg-amber-700 rounded-xl overflow-hidden shadow-xl">
              {/* Placeholder for image - replace with your actual image */}
                <Image
                  src={HeroImage}
                  alt="Healthiclick Hero"
                  layout="fill"
                  className="object-cover w-full h-full"
                  priority
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
