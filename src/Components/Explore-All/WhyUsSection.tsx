"use client";

import Image from "next/image";
import SideImage from "@/assets/explore-all/EXPLORE-ALL-BANNER-2-480x630.jpg";

export const WhyUsSection = () => {
  return (
    <section className="py-10 bag-[#F9F4F1] bg-gray-50 w-full">
      <div className="h-full container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Left Content */}
        <div className="w-full lg:w-2/5 space-y-8">
          {/* Badge */}
          <div className="text-blue-600 font-medium text-lg">• Why us</div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            No more boring diets and  calorie counting
          </h2>

          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 px-2 flex items-center justify-center rounded-full border border-gray-300 text-lg font-semibold text-gray-700">
              01
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Weight Management
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Losing weight goes beyond just changing your diet. It also
                depends about how you live, sleep and think. Our
                multidisciplinary team of dieticians, fitness trainers and
                coaches work in tandem to understand the root cause of your
                weight gain and help you create long-lasting changes in your
                nutrition, lifestyle that help make good health permanent.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 px-2 flex items-center justify-center rounded-full border border-gray-300 text-lg font-semibold text-gray-700">
              02
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Fun. Flexible. Natural.
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                We use the latest in behavioral sciences to fix your eating
                habits, and personalize your meal plan to include 500+ foods
                that make your weight loss journey fun and sustainable. Get in
                touch with our team of experts now to start customizing the
                right meal plan for you.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="rounded-3xl overflow-hidden w-full max-w-md lg:max-w-full">
            <Image
              src={SideImage}
              alt="consultation"
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
