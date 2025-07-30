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
      color: "bg-purple-100 ",
      link: "/pcod",
    },
    {
      icon: <GiStarFormation className="h-full w-full" />,
      name: "THYROID",
      color: "bg-blue-100 ",
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
      color: "bg-gray-200 ",
      link: "/explore-all",
    },
  ];

  return (
    <section className="relative bg-gray-50 py-8">
      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Desktop layout - image on left, content on right */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          {/* Image - only shown on desktop */}
          <div className="flex-1 h-screen relative">
            <Image
              src={BannerImage}
              alt="Hero Background"
              className="rounded-lg object-cover"
              fill
              quality={90}
            />
          </div>

          {/* Content */}
          <div className="w-1/2 h-full gap-5 flex flex-col justify-center text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Make weight loss fun, permanent and natural
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Achieve long-term wellness through simple, powerful, and holistic
              changes in your nutrition and eating habits
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="bg-indigo-600 text-white px-10 py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">
                Talk To Us
              </button>
              <Link href="/know-more">
                <div className="bg-white text-indigo-600 px-10 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium border border-indigo-600">
                  Know More
                </div>
              </Link>
            </div>

            {/* Health conditions grid - centered on mobile, left-aligned on desktop */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {healthConditions.map((condition, index) => (
                <Link key={index} href={condition.link}>
                  <div
                    key={index}
                    className={`${condition.color} px-4 py-6 rounded-lg flex flex-col items-center justify-center space-y-2 text-center`}
                  >
                    <div className="h-16 flex items-center">
                      {condition.icon}
                    </div>
                    <div className="text-lg font-semibold">
                      {condition.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width bottom section */}
        <div className="w-full text-center mt-8 lg:mt-16">
          <Image
            src={HeroBottomBanner}
            alt="Hero Background"
            className="rounded-lg object-cover w-full h-96"
            quality={90}
          />
        </div>
      </div>
    </section>
  );
};
