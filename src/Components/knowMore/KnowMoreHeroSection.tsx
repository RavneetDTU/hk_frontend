// components/promo/WeightLossProgramSection.tsx
"use client";

import Image from "next/image";

export const KnowMoreHeroSection = () => {
  return (
    <section className="py-10 bag-[#F9F4F1] bg-gray-50 w-full">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Powerful weight-loss <br />
            programs designed by <br />
            experts who have <br />
            been there, done that.
          </h2>
          <p className="text-base text-gray-700">
            With empathy central to our approach, Fitelo is committed to helping you
            become your best self through small, simple and realistic changes in your
            life that lead to long-term wellness.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="overflow-hidden rounded-3xl w-full max-w-md lg:max-w-full">
            <Image
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="Doctor consulting"
              width={600}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
