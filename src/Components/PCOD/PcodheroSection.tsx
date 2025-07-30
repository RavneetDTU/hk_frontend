import Image from "next/image";
import React from "react";
import PcodHeroImg from "@/assets/pcod/PCOD-BANNER-1-1150x675.jpg";

const PcodHeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 py-12 md:py-16 lg:py-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
        {/* Content Container */}
        <div className="w-4/5 flex flex-col items-center text-center ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            Say goodbye to PCOD struggles <span className="italic font-semibold">today</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 max-w-3xl leading-relaxed">
            Receive a personalized transformation plan that has successfully
            reversed PCOS for 90% of our users
          </p>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
            Contact Us
          </button>
        </div>

        {/* Full-width Image Container */}
        <div className="w-full relative aspect-video rounded-lg overflow-hidden shadow-xl">
          <Image
            src={PcodHeroImg}
            alt="PCOD Transformation"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default PcodHeroSection;