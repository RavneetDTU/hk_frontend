// components/how/HowItWorksSection.tsx
"use client";

import Image from "next/image";

export const ExploreWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Share your preferences",
      description:
        "Tell us about your unique needs and preferences to help us create a personalized plan for your care.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    },
    {
      number: "02",
      title: "Customized solutions",
      description:
        "We analyze your requirements and craft tailored solutions designed specifically for your goals.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    },
    {
      number: "03",
      title: "Achieve your vision",
      description:
        "Experience seamless results as we bring your perfect vision to life with precision and care.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    },
  ];

  return (
    <section className=" bag-[#F9F4F1] bg-[#F9F4F1] w-full">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12 space-y-12 text-center">
        {/* Badge and Heading */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-blue-600">• How it works</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Step-by-step process for <br className="hidden sm:block" />
            seamless user experience
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {steps.map((step) => (
            <div key={step.number} className="space-y-4">
              {/* Step Number */}
              <div className="flex  flex-row items-center md:items-start md:flex-col gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F9F4F1]0 text-white text-sm font-bold">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600">{step.description}</p>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={step.image}
                  alt="Step Image"
                  width={400}
                  height={280}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
