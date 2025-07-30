import React from "react";
import Image from "next/image";
import SolutionImage from "@/assets/pcod/PCOD-BANNER-3-480x330.jpg"

const HealthiclickSolution = () => {
  return (
    <section className="py-8 bg-gray-50 bag-[#F9F4F1]">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12 border border-gray-300 p-4 rounded-lg shadow-lg">
        <h1 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Healthiclick Solution
            </h1>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:w-1/2">

            <p className="text-lg md:text-3xl text-gray-900 font-bold mb-4 leading-relaxed">
              Discover the nutrition and lifestyle changes that can improve your
              PCOD symptoms
            </p>

            <div className="space-y-6">
              <p className="text-gray-700 text-lg md:text-xl">
                Your personalized Healthiclick program follows a four-pillar
                approach aimed at alleviating PCOS symptoms, including mood
                swings, weight gain, irregular menstrual cycles, and
                inflammation.
              </p>

              <p className="text-gray-700 text-lg md:text-xl">
                Your dedicated coach addresses every aspect of your PCOS, from
                nutrition and sleep schedule to fitness and stress management,
                all of which are intimately linked to your symptoms.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2">
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
              {/* Placeholder - replace with your actual image */}
                <Image
                  src={SolutionImage}
                  alt="Healthiclick Solution"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthiclickSolution;
