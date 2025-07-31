import React from "react";
import Image from "next/image";
import PcosFeaturesImage from "@/assets/pcod/PCOD-BANNER-2-475x530.jpg";
import { SiGotomeeting } from "react-icons/si";


const PcodFeaturesSection = () => {
  const features = [
    {
      Image: <SiGotomeeting />,
      title: "Acne",
      description:
        "Triggered by the ovaries` overproduction of androgens, leading to increased oil production in the skin",
    },
    {
      Image: <SiGotomeeting /> ,
      title: "Increased Testosterone",
      description:
        "Resulting from malfunctioning adrenal glands, leading to an overproduction of male hormones",
    },
    {
      Image: <SiGotomeeting /> ,
      title: "Infertility",
      description:
        "PCOS-induced hormonal imbalance disrupts the growth and release of eggs from the ovaries",
    },
    {
      Image: <SiGotomeeting /> ,
      title: "Weight Gain",
      description:
        "PCOS hampers the body`s ability to use insulin effectively, preventing the conversion of sugars and starches from food into energy",
    },
  ];

  return (
    <section className="py-2 bg-[#F9F4F1] w-full">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-4 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Features
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </div>

        {/* Content + Image Container */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Left Column - Features List */}
          <div className="lg:w-1/2">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-[#F9F4F1] rounded-lg hover:bg-purple-50 transition duration-300"
                >
                  <h3 className="text-xl flex items-center gap-3 font-bold text-purple-800 mb-2">
                    {feature.Image}
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex items-center">
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={PcosFeaturesImage}
                alt="PCOS Features"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PcodFeaturesSection;
