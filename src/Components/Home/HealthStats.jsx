import React from "react";
import Image from "next/image";
import WeightLossImage from "@/assets/home-page/heathified1.jpg";
import HbA1cImage from "@/assets/home-page/healthified2.jpg";
import StepsImage from "@/assets/home-page/healthified3.jpg";
import WellbeingImage from "@/assets/home-page/healthified4.jpg";

export const HealthStats = () => {
  const stats = [
    {
      image: WeightLossImage,
    },
    {
      image: HbA1cImage,
    },
    {
      image: StepsImage,
    },
    {
      image: WellbeingImage,
    },
  ];

  return (
    <section className="py-8 bg-gray-50 bag-[#F9F4F1]">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          40 Million+ Users Healthified{" "}
        </h2>
        <div className="w-full">
          <div className="hidden md:grid md:grid-cols-4 md:gap-4 md:h-[70vh]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={stat.image}
                  alt="Healthified Image"
                  fill
                  className="object-cover"
                />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
