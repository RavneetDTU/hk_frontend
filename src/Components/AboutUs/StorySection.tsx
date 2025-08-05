import React from "react";
import Image from "next/image";
import founderImage from "@/assets/about-founder-img.png";

const StorySection = () => {
  return (
    <section className=" bg-[#F9F4F1] py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Left Column - Image */}
          <div className="lg:w-1/2">
            <div className="relative h-64 md:h-96 lg:h-[400px] rounded-xl overflow-hidden shadow-xl">
              {/* Placeholder for image - replace with your actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <Image
                  src={founderImage}
                  alt="Rishabh and Sahil, founders of Healthiclick"
                  layout="fill"
                  className="object-cover w-full h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              The Genesis Story
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500"></div>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Rishabh and Sahil, childhood friends who both faced obesity from a
              young age, had experimented with various ineffective weight-loss
              programs over the years. They reconnected at a networking event in
              2019 and discovered a mutual passion for sustainable and natural
              weight loss solutions.
            </p>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Combining their extensive backgrounds in nutrition, technology,
              and recruitment, they teamed up to develop a product aimed at
              achieving long-term fitness through habit formation and lifestyle
              changes. This led to the creation of Healthiclick.
            </p>

        
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
