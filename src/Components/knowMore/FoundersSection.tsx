// components/founders/FoundersSection.tsx
"use client";

import Image from "next/image";

const founders = [
  {
    name: "RAVNEET PUNIYA",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    description: `
Mac and Sahil are childhood friends who struggled with obesity since childhood. Having tried several ineffective weight-loss programs over the years, the duo reconnected at a networking event in 2019 and bonded over their passion for sustainable and natural weight loss outcomes.

With a wealth of experience in nutrition, tech, and recruitment, the two joined forces to create a product focused on achieving long-term fitness through habit building and lifestyle modification. And thus, Fitelo was born.`,
    reversed: false,
  },
  {
    name: "SAHIL PUNIYA",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
    description: `
Mac and Sahil are childhood friends who struggled with obesity since childhood. Having tried several ineffective weight-loss programs over the years, the duo reconnected at a networking event in 2019 and bonded over their passion for sustainable and natural weight loss outcomes.

With a wealth of experience in nutrition, tech, and recruitment, the two joined forces to create a product focused on achieving long-term fitness through habit building and lifestyle modification. And thus, Fitelo was born.`,
    reversed: true,
  },
];

export const FoundersSection = () => {
  return (
    <section className="py-10 bag-[#F9F4F1] bg-gray-50 w-full">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-900">
          Meet Our Founders
        </h2>

        {founders.map((founder, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${
              founder.reversed ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-10`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900">
                {founder.name}
              </h3>
              <p className="text-gray-700 text-sm whitespace-pre-line">
                {founder.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
