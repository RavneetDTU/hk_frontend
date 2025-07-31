import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/home-page/banner-image.jpg";
import HeroBottomBanner from "@/assets/home-page/banner-img2.jpg";
import { GiStarFormation } from "react-icons/gi";
import Link from "next/link";

export const HeroSection = () => {
  const healthConditions = [
    {
      icon: <GiStarFormation className="h-full w-full" />,
      name: "PCOD",
      color: "bg-purple-100",
      link: "/pcod",
    },
    {
      icon: <GiStarFormation className="h-full w-full" />,
      name: "THYROID",
      color: "bg-blue-100",
      link: "/thyroid",
    },
    {
      icon: <GiStarFormation className="h-full w-full" />,
      name: "DIABETES",
      color: "bg-green-100",
      link: "/diabetes",
    },
    {
      icon: <GiStarFormation className="h-full w-full" />,
      name: "EXPLORE ALL",
      color: "bg-gray-200",
      link: "/explore-all",
    },
  ];

  return (
    <section className="relative  bg-[#F9F4F1] py-8">
      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Mobile layout - column, Desktop layout - row (unchanged) */}
        <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-8 mb-16">
          {/* Image - shown on all devices now */}
          <div className="w-full lg:flex-1 h-full lg:h-screen relative overflow-hidden">
            <Image
              src={BannerImage}
              alt="Hero Background"
              width={0}
              height={0}
              className="rounded-lg object-contain md:object-cover"
            />
          </div>

          {/* Content - mobile adjustments only */}
          <div className="w-full lg:w-1/2 gap-5 flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-4 lg:mb-6">
              Make weight loss fun, permanent and natural
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 lg:mb-8">
              Achieve long-term wellness through simple, powerful, and holistic
              changes in your nutrition and eating habits
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="bg-indigo-600 text-white px-6 sm:px-10 py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">
                Talk To Us
              </button>
              <Link href="/know-more">
                <div className="bg-white text-indigo-600 px-6 sm:px-10 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium border border-indigo-600">
                  Know More
                </div>
              </Link>
            </div>

            {/* Health conditions grid - 2 columns on mobile, unchanged on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 mt-8 lg:mt-10">
              {healthConditions.map((condition, index) => (
                <Link key={index} href={condition.link}>
                  <div
                    key={index}
                    className={`${condition.color} px-4 py-4 sm:py-6 rounded-lg flex flex-col items-center justify-center space-y-2 text-center`}
                  >
                    <div className="h-12 sm:h-16 flex items-center">
                      {condition.icon}
                    </div>
                    <div className="text-md sm:text-lg font-semibold">
                      {condition.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width bottom section - mobile height adjustment only */}
        <div className="w-full text-center mt-8 lg:mt-16">
          <div className="relative h-full rounded-lg overflow-hidden">
            <Image
              src={HeroBottomBanner}
              alt="Hero Background"
              width={0}
              height={0}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};