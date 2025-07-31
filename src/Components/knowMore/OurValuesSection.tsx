// components/values/OurValuesSection.tsx
"use client";

import { ValueCard } from "./OurValuesCard";
import { Sparkles, Layers } from "lucide-react";

export const OurValuesSection = () => {
  const values = [
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "We`re in it for the long haul",
      description:
        "Our experts design effective and personalized plans that are designed to make weight loss permanent and prevent rebound weight-gain",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "We become a part of your life",
      description:
        "Fitelo`s team is with you every step of the way in your weight loss journey and monitors your progress routinely to ensure that you’re on track to achieving your health goals",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Our approach is rooted in science",
      description:
        "Your Fitelo plan is a powerful blend of psychology and nutrition to help you create a healthy relationship with food.",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title:
        "Your healthiclick plan is a powerful blend of psychology and nutrition to help you create a healthy relationship with food",
      description:
        "We value your satisfaction above all else and strive to ensure a perfect user experience for all our customers",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "We value transparency",
      description:
        "We believe that honesty and open communication is crucial to creating true impact",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Empathy is central to our mission",
      description:
        "Every human body is different, and each Fitelo plan is based on your unique goals and needs.",
    },
  ];

  return (
    <section className="pb-10 bag-[#F9F4F1] bg-[#F9F4F1] w-full">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="space-y-2 p-4 flex flex-col items-center justify-center">
          <p className="text-sm font-semibold text-blue-600 uppercase">
            Our Values
          </p>
          <h2 className=" w-full md:w-2/3 text-3xl md:text-5xl font-bold text-gray-900 text-center">
            Our values are the driving force behind everything we do at
            HealthiClick
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3 md:p-6 rounded-xl ">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
