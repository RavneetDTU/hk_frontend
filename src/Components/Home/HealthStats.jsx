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
    <section className="py-8  bg-[#F9F4F1]">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          10,000 Users Healthified{" "}
        </h2>
        <div className="w-full">
          <div className="grid grid-col-1 md:grid-cols-4 gap-4 h-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={stat.image}
                  alt="Healthified Image"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  className="object-cover object-bottom w-full h-56 md:h-full"
                />
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
